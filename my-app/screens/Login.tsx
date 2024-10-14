import React from "react";
import { SafeAreaView } from "react-native";
import Web3AuthModal from "../screens/Web3AuthModal";

export default function Login() {
  return (
    <SafeAreaView className="flex items-center justify-center w-full h-full bg-white1">
        <Web3AuthModal />
    </SafeAreaView>
  );
}
