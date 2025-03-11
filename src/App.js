import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import { CONTRACT_ADDRESS, CONTRACT_ABI } from "./config";

function App() {
    const [account, setAccount] = useState("");
    const [contract, setContract] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        connectWallet();
    }, []);

    async function connectWallet() {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contractInstance = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
            const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });

            setAccount(accounts[0]);
            setContract(contractInstance);
        } else {
            alert("请安装 MetaMask!");
        }
    }

    async function buyTicket() {
        setLoading(true);
        try {
            const tx = await contract.buyTicket({ value: ethers.utils.parseEther("1") });
            await tx.wait();
            alert("购票成功!");
        } catch (error) {
            console.error(error);
            alert("购票失败!");
        }
        setLoading(false);
    }

    return (
        <div>
            <h2>TrustRefund DApp</h2>
            <p>连接的钱包: {account}</p>
            <button onClick={buyTicket} disabled={loading}>
                购票（1 ETN）
            </button>
        </div>
    );
}

export default App;
