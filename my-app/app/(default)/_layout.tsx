import { Tabs } from "expo-router";
import React from "react";
import Toast from "react-native-toast-message";

import "reflect-metadata";

export default function RoutesDefaultLayout() {
  return (
    <>
      <Tabs screenOptions={{ headerShown: false }}>
        <Tabs.Screen
          name="index"
          options={{
            tabBarStyle: { display: "none" },
            title: "Home",
            href: null,
          }}
        />
      </Tabs>
    </>
  );
}
