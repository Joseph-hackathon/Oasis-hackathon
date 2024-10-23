![image](https://github.com/user-attachments/assets/e46f03ae-ccfb-4c6a-8d9c-f6ab030924d7)

## Project Overview

**Seus** is a Web3 browser designed to provide a seamless user experience similar to Web2 browsers like Chrome, while incorporating robust privacy, security, and wallet functionality using blockchain technologies. The browser integrates **Oasis Protocol** for privacy-enhancing features and **`Apillon’s non-custodial wallet`** for managing digital assets. Seus aims to bridge the gap between Web2 and Web3 by offering familiar browsing features while safeguarding users' personal data and enabling easy management of cryptocurrency wallets with **`ERC-4337 account abstraction`**.

## Problems

1. **Lack of Privacy in Web2 Browsers**: Current Web2 browsers like Chrome store vast amounts of user data, leading to privacy concerns as data is often shared with third parties or misused without users' consent.
   
2. **Complexity of Web3 Browsers**: Web3 browsers tend to feel unfamiliar and complicated for mainstream users due to complex blockchain interfaces and poor user experience.

3. **Wallet Management Friction**: Managing private keys and multiple wallets in Web3 environments is difficult for the average user. Traditional wallet systems lack flexibility, making account recovery and gas management cumbersome.

4. **Search Data Exposure**: Traditional Web2 browsers track search behavior, which compromises privacy and security. Users cannot control how their search data is stored or used.

## Solution

**Seus** offers a solution by combining the familiarity of Web2 browser design with advanced `Web3 privacy`, `security`, and `asset management features`. The core aspects of the solution are:

1. **Privacy-Preserving Browsing via Oasis Protocol**: 
   - Oasis Protocol’s privacy-preserving technology ensures that users' personal information, browsing history, and transaction data remain confidential.
   - By utilizing **off-chain compute** and **confidential data storage**, Seus protects users' data from exploitation.

2. **Seamless Wallet Integration with Apillon**:
   - **Account Abstraction (ERC-4337)**: When a user creates an email account in Seus, a wallet is automatically generated and linked to the email, simplifying wallet management.
   - **Non-Custodial Wallet**: Apillon provides a decentralized and secure way for users to manage their digital assets and interact with blockchain services without the hassle of managing private keys.

3. **User-Friendly Chrome-Like UX**:
   - To minimize the learning curve for Web2 users, Seus replicates the user experience of popular browsers like Chrome, ensuring ease of use and familiarity.
   - Users can easily access Web3 applications and manage their wallets without being overwhelmed by blockchain-specific interfaces.

4. **AI-Enhanced Search**:
   - Seus incorporates an **AI-powered search engine** that respects user privacy. Searches are processed with privacy-preserving mechanisms, and the results are delivered without compromising user data.
   - **Zero 1 Labs API Integration**: To enhance search functionality, Seus uses **Zero 1 Labs' API** to provide Web3 asset data and information. When users search for crypto assets or blockchain-related content, relevant Web3 data is retrieved and displayed.

## Key Points

- **Oasis Protocol Integration**: Oasis ensures users' privacy is protected, with confidential computing and secure off-chain data handling.
  
- **Apillon Wallet with ERC-4337**: Seus simplifies the wallet management process by linking wallets to email accounts using account abstraction, making it easier for users to manage multiple wallets and conduct transactions without dealing with gas fees directly.

- **Chrome-Like User Experience**: The familiar UX minimizes the friction for Web2 users transitioning to Web3, making the browser easy to adopt for a wider audience.

- **Zero 1 Labs API for Web3 Data**: By leveraging Zero 1 Labs' API, Seus allows users to access Web3 asset information quickly and efficiently, enhancing the search experience while maintaining user privacy.

- **Security and Privacy by Design**: Seus takes a security-first approach, ensuring users' data is encrypted and protected from third parties, using blockchain technology to offer a secure browsing experience.

## Diagram
``` mermaid
sequenceDiagram
    participant User
    participant Seus_Browser
    participant AI_SearchEngine
    participant Apillon_Wallet
    participant Oasis_Protocol

    User->>Seus_Browser: Open browser
    Seus_Browser->>User: Display Chrome-like UX

    User->>Seus_Browser: Perform search query
    Seus_Browser->>AI_SearchEngine: Send query for processing
    AI_SearchEngine-->>Seus_Browser: Return search results
    Seus_Browser-->>User: Display search results

    User->>Seus_Browser: Create email account
    Seus_Browser->>Apillon_Wallet: Request wallet address creation (ERC-4337)
    Apillon_Wallet-->>Seus_Browser: Return wallet address connected to email
    Seus_Browser-->>User: Confirm email creation with wallet

    User->>Seus_Browser: Access wallet connect
    Seus_Browser->>Apillon_Wallet: Connect to non-custodial wallet
    Apillon_Wallet-->>Seus_Browser: Allow wallet management (multiple wallets)
    User->>Seus_Browser: Execute transaction
    Seus_Browser->>Apillon_Wallet: Request transaction (gas abstraction)
    Apillon_Wallet-->>Seus_Browser: Confirm transaction
    Seus_Browser-->>User: Display transaction confirmation

    Seus_Browser->>Oasis_Protocol: Encrypt and manage user data (off-chain)
    Oasis_Protocol-->>Seus_Browser: Confirm privacy-protected data handling
    Seus_Browser-->>User: Confirm privacy and security
```

## Conclusion

**Seus** redefines Web3 browsing by creating a bridge between Web2 familiarity and Web3 security. With **`Oasis Protocol`** enhancing privacy and **`Apillon`** simplifying wallet management, users can confidently navigate the Web3 world without sacrificing ease of use. By integrating innovative solutions like **`Zero 1 Labs' API`** for Web3 asset data, Seus offers a powerful yet intuitive platform for users to explore and interact with decentralized applications. The goal of Seus is to provide a secure, private, and user-friendly gateway into the Web3 ecosystem, empowering users to take full control of their digital identity and assets.
