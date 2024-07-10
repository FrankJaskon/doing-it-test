# Project Title

This is a solution for a test assignment for the Frontend Developer position. 
The example is aimed at demonstrating the use of solana.web3 and code organization skills.

## Getting Started

### NOTE
It's recommended to use Node 18+

1. Run

   ```bash
   npm install
   ```

2. Wait for installation

3. Run dev server:

   ```bash
   npm run dev
   ```

4. Build the app:

   ```bash
   npm run build
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Work with CLI

1. Install Solana CLI (example for zsh you can find in `./install-solana-cli.sh`)

2. To top up the wallet balance, run the following command:

   ```bash
   solana airdrop 2 YOUR_PUBLIC_KEY --url devnet
   ```

3. Create a new wallet and save its data:

   ```bash
   solana-keygen new --outfile ~/my-solana-wallet.json
   ```

4. Get the public key:

   ```bash
   solana-keygen pubkey ~/my-solana-wallet.json
   ```

5. Show the current balance:

   ```bash
   solana balance ~/my-solana-wallet.json --url devnet
   ```

## Task Description

Используя стек Next.js + solana-web3.js, сделать веб-приложение с мобильной вёрсткой для создания крипто-кошелька и переводов в dev сети Solana:

1. Экран Кошелёк:
    - **Header:**
        - кнопка создать кошелёк
        - отображение баланса
    - **Body:**
        - отображение адреса кошелька
        - отображение private key

2. Экран Транзакции:
    - **Header:**
        - кнопка назад
        - отображение баланса
    - **Body:**
        - ввод количества SOL
        - ввод чужого адреса кошелька

Созданное приложение нужно загрузить в репозиторий на GitHub. В `README.md` нужно описать, как поднять локально ноду, собрать приложение, пополнить кошелёк через CLI, подтвердить транзакцию. В качестве решения отправить ссылку на GitHub.

## Implementation Details

### Technologies Used
- Next.js (app router)
- React
- TypeScript
- Tailwind CSS
- Solana Web3.js
- ESLint
- Prettier

### Wallet Context and Hooks

I implemented a context and hooks to manage the wallet state, allowing easy access and updates to the wallet state across any component.

### Balance Polling

I used a hook for long polling the wallet balance. The balance updates every 1 second if the user has a public key.

### Route Protection

I implemented route protection to ensure that the user is redirected to the main route if they do not have a wallet created.

### Modular Folder Structure

The project is organized with a modular folder structure, separating concerns such as services, hooks, and UI components. This makes the codebase more maintainable and scalable.

### Custom UI Components

Custom reusable UI components (like `Button`, `Input`, `Text`, etc.) are created to ensure consistency across the application and make the development process more efficient.