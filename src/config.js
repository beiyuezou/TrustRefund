export const CONTRACT_ADDRESS = "0xc7dcddD4aC3C2a7df961d5eC8c93046E01f58026"; // 你的合约地址

export const CONTRACT_ABI = [
	{
		"inputs": [],
		"name": "buyTicket",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "emergencyWithdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "visitor",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "visitedBlueMoonValley",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "usedShuttleBus",
				"type": "bool"
			}
		],
		"name": "markVisit",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address payable",
				"name": "visitor",
				"type": "address"
			}
		],
		"name": "refundFull",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address payable",
				"name": "visitor",
				"type": "address"
			}
		],
		"name": "refundPartial",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "FULL_REFUND",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "PARTIAL_REFUND",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "TICKET_PRICE",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "tickets",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "amountPaid",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "visitedBlueMoonValley",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "usedShuttleBus",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "refunded",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];
