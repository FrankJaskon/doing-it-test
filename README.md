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
4. Building app:
```bash
npm run build
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Work with CLI

1. Install Solana CLI (example for zsh you can find in `./install-solana-cli.sh`)
2. In order to top up the wallet balance run by CLI:

```bash
solana airdrop 2 YOUR_PUBLIC_KEY --url devnet
```

3. Create a new wallet and save its data:

```bash
solana-keygen new --outfile ~/my-solana-wallet.json
```

4. Getting publicKey:

```bash
solana-keygen pubkey ~/my-solana-wallet.json
```

5. Showing current balance:

```bash
solana balance ~/my-solana-wallet.json --url devnet
```

## Task description

Используя стек next js + solana-web3.js сделать веб приложение под мобильную вёрстку для создания крипто кошелька и переводов в dev сети Solana:

1. Экран Кошелёк:
   Header:
- кнопка создать кошелёк
- отображение баланса
  Body:
- отображение адреса кошелька
- отображение private key

2. Экран Транзакции:
   Header:
- кнопка назад
- отображение баланса
  Body:
- ввод кол-во sol
- ввод чужого адреса кошелька

Созданное приложение, нужно загрузить в репозиторий на GitHub. В readme.md нужно описать как поднять локально ноду, сбилдить приложение, пополнить кошелёк через cli, подтвердить транзакцию.
В качестве решения отправить ссылку GitHub
