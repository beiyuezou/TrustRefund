# TrustRefund - Blockchain-powered Automated Refunds for Travelers  

## 🌟 Inspiration  
When tourist attractions close due to bad weather or unexpected events, tourists often face **a complicated, slow, and non-transparent refund process**. Meanwhile, attractions struggle with **financial strain and operational challenges in handling refunds**.  

**TrustRefund** is a decentralized application (DApp) that **automates ticket purchases and refunds using blockchain smart contracts**, ensuring **transparency, fairness, and efficiency** while reducing the **manual workload for attractions**.

---

## 🎯 What It Does  
TrustRefund provides a **decentralized and automated refund system** for tourism.  

- **Tourists** can purchase tickets securely on the blockchain.  
- **Refunds are processed automatically** based on smart contract rules.  
- **Attractions benefit from structured refund management**, reducing operational costs and enhancing visitor trust.  

### **Key Features**  
- **Smart Contract-powered Ticketing & Refunds**  
- **Immutable Purchase Records**  
- **Automated Full & Partial Refunds Based on Visit Status**  

---

## 🏗️ How We Built It  
- **Solidity Smart Contracts** – Handles ticket purchases, refund eligibility, and secure payments.  
- **React Frontend** – Provides a seamless user experience for Web3 interactions.  
- **ethers.js** – Facilitates Web3 transactions between the frontend and blockchain.  
- **MetaMask Integration** – Enables authentication and transaction signing.  
- **Remix IDE** – Used for developing and testing Solidity contracts before deployment.  

---

## ⚡ Challenges We Ran Into  
1. **Blockchain Transaction Delays**  
   - Refund transactions occasionally remained pending due to testnet congestion.  
   - ✅ **Solution**: Manually increasing gas fees to prioritize transactions.  

2. **Ticket Data Not Stored Properly**  
   - `tickets(address)` sometimes failed to return `amountPaid`, meaning data wasn’t recorded correctly.  
   - ✅ **Solution**: Optimized Solidity logic to ensure correct storage and retrieval.  

3. **Smart Contract Security Risks**  
   - Refund processes could be exploited by unauthorized accounts.  
   - ✅ **Solution**: Implemented `ReentrancyGuard` and `Ownable` for protection.  

---

## 🚀 What's Next for TrustRefund  
- **Optimizing Refund Confirmation Speeds** – Implementing event listeners for real-time transaction updates.  
- **Deploying on Layer 2 Solutions** – Reducing gas fees by migrating to Polygon or Optimism.  
- **Expanding to More Use Cases** – Enabling refund automation for event ticketing, hotels, and flight cancellations.  
- **Integrating Dispute Resolution** – Adding a decentralized mechanism for refund appeals.  
- **Partnerships with Attractions** – Collaborating with real-world tourism businesses to pilot the solution.  

---

## 🎥 Demo Video  
🔗 **[Watch the Full Demo Here](#)** (Replace with actual video link)  

## 📂 GitHub Repository  
🔗 **[View the Full Source Code](https://github.com/beiyuezou/TrustRefund)**  

## 📖 How to Run Locally  
### **Prerequisites**
- Install [Node.js](https://nodejs.org/)
- Install [MetaMask](https://metamask.io/)
- Clone the repository

### **Installation**
```bash
git clone https://github.com/beiyuezou/TrustRefund.git
cd TrustRefund
npm install

Run the Project
npm start
Open http://localhost:3000 in your browser.



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
