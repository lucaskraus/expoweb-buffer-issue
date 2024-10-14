import {
    CHAIN_NAMESPACES,
    WEB3AUTH_NETWORK_TYPE,
    ChainNamespaceType,
    WEB3AUTH_NETWORK,
  } from "@web3auth/base";
  import { EthereumPrivateKeyProvider } from "@web3auth/ethereum-provider";
  import { Web3Auth } from "@web3auth/modal";
  import React from "react";
  import { View, Pressable, Text } from "react-native";
  
  export default function Web3AuthModal() {
    const chainConfig = {
      chainNamespace: CHAIN_NAMESPACES.EIP155,
      chainId: "0xaa36a7",
      rpcTarget: "https://rpc.ankr.com/eth_sepolia",
      displayName: "Ethereum Sepolia Testnet",
      blockExplorer: "https://sepolia.etherscan.io",
      ticker: "ETH",
      tickerName: "Ethereum",
    };
    const privateKeyProvider = new EthereumPrivateKeyProvider({
      config: { chainConfig },
    });
    const Web3authOptions = {
      clientId:
        "BLp6-z-fTRXLQsKHPcXvITV9ckcNe1mO5kzdLXdui-NNEPbTVrxmdQddXLilhGaZBPCaTgjZ4ljUMzQpi5Ct4GU",
      chainConfig,
      enableLogging: true,
      sessionTime: 86400,
      web3AuthNetwork: WEB3AUTH_NETWORK.TESTNET,
      useCoreKitKey: true,
      privateKeyProvider,
    };
  
    const web3auth = new Web3Auth(Web3authOptions);
  
    const initModal = async () => {
      await web3auth.initModal();
    };
  
    return (
      <View className="w-12">
        <Pressable
          onPress={initModal}
          className="p-2 rounded-full items-center bg-purple5"
        >
          <Text className="text-white1">Init Modal</Text>
        </Pressable>
      </View>
    );
  }
  