import { Tabs } from "expo-router";

export default function loginOptions() {
  return (
    <Tabs>
      <Tabs.Screen name="login"></Tabs.Screen>
      <Tabs.Screen name="signup"></Tabs.Screen>
    </Tabs>
  )
};