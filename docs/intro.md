---
sidebar_position: 1
---

# What is ZK-Worm ?

ZK-Worm refers to Wormhole’s exploration of using Zero-Knowledge (ZK) proofs within its cross-chain messaging infrastructure to enable more private and trustless transactions across blockchains. Wormhole, a leading cross-chain messaging protocol, traditionally facilitates secure interactions and asset transfers between various blockchain networks. By integrating ZK proofs, Wormhole aims to verify the validity of transactions without revealing sensitive information—adding a layer of privacy to cross-chain interactions.

The primary benefit of this integration would be allowing users to interact across chains without exposing transactional details, such as the amount or wallet addresses involved. This ZK-powered model has promising applications for decentralized finance (DeFi) and other use cases where privacy and data integrity are crucial. Current collaborations, such as those with NEAR Protocol, are early examples where ZK proofs are used to build secure cross-chain bridges like the NEAR-Ethereum corridor. This collaboration enhances interoperability while maintaining high privacy standards for transactions, positioning ZK technology as a key component in the evolving multi-chain ecosystem【16†source】【17†source】【18†source】.

It sounds like you're looking to start with integrating Zero-Knowledge (ZK) proofs on Wormhole for private transactions, possibly as part of a hackathon or development project. Here’s a step-by-step approach to help you get started with the essentials and initial setup:

---

### 1. **What You'll Need**
   - **Development Environment**: Set up a code editor like Visual Studio Code and ensure that Node.js is installed for JavaScript dependencies.
   - **Wormhole SDK**: Install the Wormhole SDK, which will help facilitate communication between different blockchains.
   - **Knowledge of ZK Proofs**: Understanding Zero-Knowledge proofs is critical. Libraries like `snarkjs` (for zk-SNARKs) or `circom` (for building circuits) can help with creating ZK proofs.
   - **Blockchain Wallet**: A blockchain wallet (like MetaMask) and testnet funds to deploy and test transactions.

---

### 2. **Generate Your Environment**
   - **Install SDKs**: Use npm or yarn to install Wormhole SDK and any additional dependencies (e.g., zk-SNARK libraries).
   - **Connect to Testnet**: Start on a testnet (e.g., Ethereum Goerli or Solana Devnet) to avoid using real assets. Wormhole’s documentation can guide you on connecting different chains on testnet.
   - **Smart Contracts**: Set up smart contracts that will handle ZK proofs on supported blockchains.

---

### 3. **Start Coding**
   - **Develop ZK Proofs**: Build your ZK circuit to handle transaction data without revealing it. You can use `circom` to define your proof and `snarkjs` to generate the proof.
   - **Integrate with Wormhole**: Use the Wormhole SDK to create a bridge that submits these proofs as part of the transaction payload.
   - **Test**: Ensure that transactions can be sent cross-chain without revealing private data, verifying the validity on the destination chain.

---

### 4. **Resources**
   - **Documentation**: Refer to Wormhole’s official [documentation](https://docs.wormhole.com) for detailed SDK usage.
   - **ZK Proof Guides**: Resources like the [ZK Proof Guide by ZK Hack](https://zkhack.dev/) offer tutorials on building Zero-Knowledge applications.
   - **Community Support**: Join developer forums or Wormhole’s Discord for support.

This setup will help you build a basic ZK-enabled environment on Wormhole and begin testing private cross-chain transactions. Let me know if you need specific coding examples or further assistance!