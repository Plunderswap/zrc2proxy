# ERC20 to ZRC2 Proxy

## Requirement

`node@>=10`

## Install dependencies

`yarn`

## Enter private keys for deployment

`cp .env.sample .env`

## Compile contracts

`yarn compile`

## Run tests

`yarn test`

## Deploy contracts

```
yarn deploy:testnet
yarn deploy:mainnet
```

## Verifying contracts on sourcify.dev
`npx hardhat --network testnet verify-sourcify --contract EIP20ZRC2Proxy --address 0x453b11386FBd54bC532892c0217BBc316fc7b918`
