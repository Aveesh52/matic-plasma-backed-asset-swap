import React, { Component } from "react";
import getWeb3, { getGanacheWeb3, Web3 } from "../../utils/getWeb3";

import App from "../../App.js";

import { Typography, Grid, TextField } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from '../../utils/theme';
import { Loader, Button, Card, Input, Heading, Table, Form, Flex, Box, Image, EthAddress } from 'rimble-ui';
import { zeppelinSolidityHotLoaderOptions } from '../../../config/webpack';

import styles from '../../App.module.scss';
//import './App.css';




export default class SwapFactory extends Component {
  constructor(props) {    
    super(props);

    this.state = {
      /////// Default state
      storageValue: 0,
      web3: null,
      accounts: null,
      route: window.location.pathname.replace("/", "")
    };

    this.getTestData = this.getTestData.bind(this);
  }


  getTestData = async () => {
    const { accounts, swap_factory, web3 } = this.state;

    const response_1 = await swap_factory.methods.testFunc().send({ from: accounts[0] })
    console.log('=== response of testFunc() function ===', response_1);
  }


  // maticBase = async () => {
  //   const Matic = require('maticjs').default
  //   const config = require('./config')
  //   const token = config.ROPSTEN_TEST_TOKEN // test token address
  //   const from = config.FROM_ADDRESS // from address

  //   // Create object of Matic
  //   const matic = new Matic({
  //     maticProvider: config.MATIC_PROVIDER,
  //     parentProvider: config.PARENT_PROVIDER,
  //     rootChainAddress: config.ROOTCHAIN_ADDRESS,
  //     syncerUrl: config.SYNCER_URL,
  //     watcherUrl: config.WATCHER_URL,
  //   })

  //   matic.wallet = config.PRIVATE_KEY // prefix with `0x`

  //   this.setState({
  //     token: token,
  //     from: from,
  //     matic: matic
  //   });
  // }


  depositERC20 = async () => {
    const Matic = require('@maticnetwork/maticjs').default
    const config = require('./config')
    const token = config.ROPSTEN_TEST_TOKEN // test token address
    const from = config.FROM_ADDRESS // from address

    // Create object of Matic
    const matic = new Matic({
      maticProvider: config.MATIC_PROVIDER,
      parentProvider: config.PARENT_PROVIDER,
      rootChainAddress: config.ROOTCHAIN_ADDRESS,
      syncerUrl: config.SYNCER_URL,
      watcherUrl: config.WATCHER_URL,
    })

    matic.wallet = config.PRIVATE_KEY // prefix with `0x`

    const amount = '1000000000000000000' // amount in wei

    // Approve token
    matic
      .approveERC20TokensForDeposit(token, amount, {
        from,
        onTransactionHash: (hash) => {
          // action on Transaction success
          console.log(hash) // eslint-disable-line
        },
      })
      .then(() => {
        // Deposit tokens
        matic.depositERC20Tokens(token, from, amount, {
          from,
          onTransactionHash: (hash) => {
            // action on Transaction success
            console.log(hash) // eslint-disable-line
          },
        })
      })
  }

  depositERC721 = async () => {
    const Matic = require('@maticnetwork/maticjs').default
    const config = require('./config')
    const token = config.ROPSTEN_TEST_TOKEN // test token address
    const from = config.FROM_ADDRESS // from address

    // Create object of Matic
    const matic = new Matic({
      maticProvider: config.MATIC_PROVIDER,
      parentProvider: config.PARENT_PROVIDER,
      rootChainAddress: config.ROOTCHAIN_ADDRESS,
      syncerUrl: config.SYNCER_URL,
      watcherUrl: config.WATCHER_URL,
    })

    matic.wallet = config.PRIVATE_KEY // prefix with `0x`

    const tokenId = '1' // ERC721 token Id

    matic
      .approveERC721TokenForDeposit(token, tokenId, {
        from,
        onTransactionHash: (hash) => {
          // action on Transaction success
          console.log(hash) // eslint-disable-line      
        },
      })
      .then(() => {
        matic.depositERC721Tokens(token, from, tokenId, {
          from,
          onTransactionHash: (hash) => {
            // action on Transaction success
            console.log(hash) // eslint-disable-line
          },
        })
      })
  }


  //////////////////////////////////// 
  ///// Refresh Values
  ////////////////////////////////////
  refreshValues = (instanceStreamingMoney) => {
    if (instanceStreamingMoney) {
      console.log('refreshValues of instanceStreamingMoney');
    }
  }


  //////////////////////////////////// 
  ///// Ganache
  ////////////////////////////////////
  getGanacheAddresses = async () => {
    if (!this.ganacheProvider) {
      this.ganacheProvider = getGanacheWeb3();
    }
    if (this.ganacheProvider) {
      return await this.ganacheProvider.eth.getAccounts();
    }
    return [];
  }

  componentDidMount = async () => {
    const hotLoaderDisabled = zeppelinSolidityHotLoaderOptions.disabled;
 
    let SwapFactory = {};
    try {
      SwapFactory = require("../../../../build/contracts/SwapFactory.json"); // Load ABI of contract of SwapFactory
    } catch (e) {
      console.log(e);
    }

    try {
      const isProd = process.env.NODE_ENV === 'production';
      if (!isProd) {
        // Get network provider and web3 instance.
        const web3 = await getWeb3();
        let ganacheAccounts = [];

        try {
          ganacheAccounts = await this.getGanacheAddresses();
        } catch (e) {
          console.log('Ganache is not running');
        }

        // Use web3 to get the user's accounts.
        const accounts = await web3.eth.getAccounts();
        // Get the contract instance.
        const networkId = await web3.eth.net.getId();
        const networkType = await web3.eth.net.getNetworkType();
        const isMetaMask = web3.currentProvider.isMetaMask;
        let balance = accounts.length > 0 ? await web3.eth.getBalance(accounts[0]): web3.utils.toWei('0');
        balance = web3.utils.fromWei(balance, 'ether');

        let instanceSwapFactory = null;
        let deployedNetwork = null;

        // Create instance of contracts
        if (SwapFactory.networks) {
          deployedNetwork = SwapFactory.networks[networkId.toString()];
          if (deployedNetwork) {
            instanceSwapFactory = new web3.eth.Contract(
              SwapFactory.abi,
              deployedNetwork && deployedNetwork.address,
            );
            console.log('=== instanceSwapFactory ===', instanceSwapFactory);
          }
        }

        if (SwapFactory) {
          // Set web3, accounts, and contract to the state, and then proceed with an
          // example of interacting with the contract's methods.
          this.setState({ 
            web3, 
            ganacheAccounts, 
            accounts, 
            balance, 
            networkId, 
            networkType, 
            hotLoaderDisabled,
            isMetaMask, 
            swap_factory: instanceSwapFactory
          }, () => {
            this.refreshValues(
              instanceSwapFactory
            );
            setInterval(() => {
              this.refreshValues(instanceSwapFactory);
            }, 5000);
          });
        }
        else {
          this.setState({ web3, ganacheAccounts, accounts, balance, networkId, networkType, hotLoaderDisabled, isMetaMask });
        }
      }
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  }



  render() {
    return (

      <div className={styles.widgets}>
        <Grid container style={{ marginTop: 32 }}>

          <Grid item xs={12}>
            <h4>Matic Network / Plasma Backed Asset Swap</h4> <br />

            <Card width={"auto"} 
                  maxWidth={"420px"} 
                  mx={"auto"} 
                  my={5} 
                  p={20} 
                  borderColor={"#E8E8E8"}
            >
              <h4>Swap Factory</h4>

              <Image
                alt="random unsplash image"
                borderRadius={8}
                height="100%"
                maxWidth='100%'
                src="https://source.unsplash.com/random/1280x720"
              />

              <Button size={'small'} mt={3} mb={2} onClick={this.getTestData}> Get TestData </Button> <br />

              <Button size={'small'} mt={3} mb={2} onClick={this.depositERC20}> Deposit ERC20 </Button> <br />

              <Button size={'small'} mt={3} mb={2} onClick={this.depositERC721}> Deposit ERC721 </Button> <br />

            </Card>
          </Grid>

          <Grid item xs={4}>
          </Grid>

          <Grid item xs={4}>
          </Grid>
        </Grid>
      </div>
    );
  }

}
