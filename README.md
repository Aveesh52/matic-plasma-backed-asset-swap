# Matic Plasma Backed Asset Swap

***
## 【Introduction of Matic Plasma Backed Asset Swap】
- This is dApp of plasma backed asset swap by using MaticNetwork

&nbsp;


***

## 【Setup for testing system behavior in frontend】
### Setup wallet by using Metamask
1. Add MetaMask to browser (Chrome or FireFox or Opera or Brave)    
https://metamask.io/  


2. Adjust appropriate newwork below 
```
● In case of using MaticNetwork
  https://testnetv3.matic.network


● In case of using Ropsten Test Network
  Ropsten Test Network
```

&nbsp;


### Setup backend
1. Deploy contracts to Ropsten Test Network
```
(root directory)

● In case of using MaticNetwork
  $ npm run migrate:matic


● In case of using Ropsten Test Network
  $ npm run migrate:ropsten
```

&nbsp;


### Setup frontend
1. Execute command below in root directory.
```
$ npm run client
```

2. Access to browser by using link 
```
http://127.0.0.1:3000
```

&nbsp;

***


## 【Work flow】

&nbsp;

***

## 【References】  
- Workshop of Matic Network   
  https://www.youtube.com/watch?v=-DvONglu_Qc

- Doc
  - Get Started   
    https://docs.matic.network/2-min-guide-to-matic/  

  - Swap ERC20 and ERC721  
    https://docs.matic.network/swap-assets/  

- Reference repos of Matic 
   - Contract of Matic Network
     https://github.com/maticnetwork/contracts

   - matic.js
     https://github.com/maticnetwork/matic.js/tree/master/examples/node

   - ethindia-workshop
     https://github.com/maticnetwork/ethindia-workshop   

   - asset-swap-tutorial
    https://github.com/nglglhtr/asset-swap-tutorial   

- ETH India Online hackathon's article which prize is written  
  https://blog.matic.network/matic-network-provides-5k-of-bounties-for-ethindia-online-hackathon/ 

- Discord  
  - https://discordapp.com/channels/538672958110171137/669399028336820265  
  - https://discordapp.com/channels/538672958110171137/669263132132245530   
