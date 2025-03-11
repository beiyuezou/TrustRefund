// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/Address.sol";

contract TourismRefund is Ownable, ReentrancyGuard {
    using Address for address payable;

    struct Ticket {
        uint256 amountPaid;
        bool visitedBlueMoonValley;
        bool usedShuttleBus;
        bool refunded;
    }

    mapping(address => Ticket) public tickets;
    
    event TicketPurchased(address indexed buyer, uint256 amount, uint256 timestamp);
    event RefundProcessed(address indexed visitor, uint256 amount, string refundType, uint256 timestamp);
    event EmergencyWithdraw(address indexed owner, uint256 amount, uint256 timestamp);

    uint256 public constant TICKET_PRICE = 1 ether; // 票价设为 1 ETN
    uint256 public constant FULL_REFUND = 1 ether; // 全额退款 1 ETN
    uint256 public constant PARTIAL_REFUND = 0.5 ether; // 部分退款 0.5 ETN

    modifier validAddress(address addr) {
        require(addr != address(0), "Invalid address");
        require(addr != address(this), "Contract address not allowed");
        _;
    }

    modifier onlyValidVisitor(address visitor) {
        require(tickets[visitor].amountPaid == TICKET_PRICE, "Visitor has not paid ticket");
        require(!tickets[visitor].refunded, "Already refunded");
        _;
    }

    constructor(address initialOwner) Ownable(initialOwner) {}

    function buyTicket() external payable nonReentrant {
        require(msg.value == TICKET_PRICE, "Must pay exactly 1 ETN");
        require(tickets[msg.sender].amountPaid == 0, "Ticket already purchased");

        tickets[msg.sender] = Ticket(msg.value, false, false, false);
        emit TicketPurchased(msg.sender, msg.value, block.timestamp);
    }

    function markVisit(
        address visitor,
        bool visitedBlueMoonValley,
        bool usedShuttleBus
    ) external onlyOwner validAddress(visitor) onlyValidVisitor(visitor) {
        tickets[visitor].visitedBlueMoonValley = visitedBlueMoonValley;
        tickets[visitor].usedShuttleBus = usedShuttleBus;
    }

    function refundFull(address payable visitor) 
        external onlyOwner validAddress(visitor) onlyValidVisitor(visitor) nonReentrant 
    {
        require(address(this).balance >= FULL_REFUND, "Insufficient contract balance");
        require(tickets[visitor].visitedBlueMoonValley || tickets[visitor].usedShuttleBus, "No proof of visitation");

        tickets[visitor].refunded = true;
        (bool success, ) = visitor.call{value: FULL_REFUND}("");
        require(success, "Transfer failed");

        emit RefundProcessed(visitor, FULL_REFUND, "Full Refund", block.timestamp);
    }

    function refundPartial(address payable visitor) 
        external onlyOwner validAddress(visitor) onlyValidVisitor(visitor) nonReentrant 
    {
        require(address(this).balance >= PARTIAL_REFUND, "Insufficient contract balance");
        require(tickets[visitor].visitedBlueMoonValley || tickets[visitor].usedShuttleBus, "No proof of visitation");

        tickets[visitor].refunded = true;
        (bool success, ) = visitor.call{value: PARTIAL_REFUND}("");
        require(success, "Transfer failed");

        emit RefundProcessed(visitor, PARTIAL_REFUND, "Partial Refund", block.timestamp);
    }

    function emergencyWithdraw() external onlyOwner nonReentrant {
        require(address(this).balance > 0, "No funds to withdraw");
        uint256 amount = address(this).balance;
        (bool success, ) = payable(owner()).call{value: amount}("");
        require(success, "Withdraw failed");

        emit EmergencyWithdraw(owner(), amount, block.timestamp);
    }
}
