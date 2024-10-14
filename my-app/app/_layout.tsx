/* eslint-disable import/order */
import { config } from "@gluestack-ui/config";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import {
  Slot,
  ErrorBoundaryProps,
  useNavigationContainerRef,
} from "expo-router";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useTranslation, I18nextProvider } from "react-i18next";
import { Text, SafeAreaView } from "react-native";
import { Provider } from "react-redux";

import store from "../context/store";
import i18n from "../locales/i18n";

import "../global.css";
import "reflect-metadata";

export function ErrorBoundary(props: ErrorBoundaryProps) {
  const { t } = useTranslation();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <Text>Error</Text>
    </SafeAreaView>
  );
}

function Layout() {
  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <GluestackUIProvider config={config}>
          <Helmet>
            <title>Test</title>
          </Helmet>
          <Slot />
        </GluestackUIProvider>
      </I18nextProvider>
    </Provider>
  );
}

export default Layout;
