# geth-private-blockchain

# Install Truffle

``` 
npm install -g truffle 
```

# Solidity Compiler

```
sudo npm install -g solc
```

# Running the Ethereum Private Network
```
geth --port 4321 --networkid 1234 --datadir=./dataDir  --http --http.port 8543 
--http.addr 127.0.0.1 --http.api "eth,net,web3,personal,miner" --allow-insecure-unlock
```

# Connecting Geth to Ethereum Private Blockchain
```
geth attach http://127.0.0.1:8543
```

# Creating Ethereum Account

  ``` 
  personal.newAccount('seedphrase')
  
  personal.unlockAccount(web3.eth.coinbase)
  
  miner.start(1) // here 1 is to use 1 cpu 
  
  web3.fromWei(eth.getBalance(eth.coinbase), "ether") // to check weather the ether is increased or not
  
  miner.stop() 
  
  ```

 # Compiling and Deploying Smart Contract
 ```
 truffle compile
 
 truffle migrate
 
 ```
 
  
