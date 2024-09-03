# **DAO on Solana**

## **Overview**

This project is a Decentralized Autonomous Organization (DAO) built on the Solana blockchain. The purpose of this project is to explore the creation of a simple, yet functional DAO that allows users to create proposals and vote on them. The project uses Solana's efficient and scalable blockchain infrastructure to implement the core functionalities of the DAO, ensuring fast transaction times and low fees.

## **Features**

- **Create Proposals**: Users can create new proposals on the DAO for others to vote on.
- **Vote on Proposals**: DAO members can vote on active proposals, with the results determining whether a proposal is accepted or rejected.
- **Smart Contract on Solana**: The core logic of the DAO is implemented using Rust, leveraging Solana's smart contract capabilities.
- **Simple and Intuitive UI**: The project includes a basic front-end built with the MERN stack (MongoDB, Express.js, React, Node.js) to interact with the Solana smart contract.

## **Tech Stack**

- **Solana Blockchain**: Used to deploy the smart contract. Solana's high throughput and low fees make it an excellent choice for decentralized applications.
- **Rust**: The smart contract is written in Rust, which is the standard language for Solana programs due to its performance and safety features.
- **MERN Stack**:
  - **MongoDB**: For storing user data and proposals.
  - **Express.js**: Backend framework for handling API requests.
  - **React.js**: Frontend framework for building the user interface.
  - **Node.js**: Backend runtime for executing JavaScript code server-side.
- **GitHub**: Version control and project management.

## **What I Learned**

- **Smart Contract Development on Solana**: I learned how to write and deploy smart contracts using Rust on the Solana blockchain. This included understanding Solana's program model, account system, and the process of deploying a program to the Solana devnet.
- **Integration with Frontend**: I gained experience in integrating a blockchain backend with a traditional web frontend, specifically using Solana's JavaScript API to interact with the smart contract from the React-based UI.
- **DAO Concepts**: I explored the fundamental concepts behind DAOs, including proposal creation, voting mechanisms, and how these can be implemented in a decentralized environment.
- **MERN Stack Development**: While building the frontend, I further honed my skills in full-stack development using the MERN stack, focusing on how to manage state and handle asynchronous operations in a decentralized app (dApp).

## **Getting Started**

### **Prerequisites**

- Node.js and npm installed
- Rust and Cargo installed for building Solana programs
- Solana CLI installed and configured

### **Setup**

1. Clone the repository:
   ```bash
   git clone https://github.com/<YOUR_GITHUB_USERNAME>/<YOUR_REPOSITORY_NAME>.git
   ```
2. Navigate to the project directory:
   ```bash
   cd <YOUR_REPOSITORY_NAME>
   ```
3. Install the necessary dependencies for the frontend:
   ```bash
   cd client
   npm install
   ```
4. Build and deploy the Solana program:
   ```bash
   cd solana
   cargo build-bpf
   solana program deploy target/deploy/dao.so
   ```
5. Start the frontend:
   ```bash
   cd client
   npm start
   ```

### **Usage**

- Visit the frontend at `http://localhost:3000` to interact with the DAO.
- Create a proposal and vote on existing proposals using your Solana wallet.


This project was intresting for me to create, i learned some new things, yet there are still many issues in the project, especially the integration part. I will improve on them later on
