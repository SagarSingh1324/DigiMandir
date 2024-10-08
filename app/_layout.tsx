import { Stack } from "expo-router"

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index"></Stack.Screen>
      <Stack.Screen name="(loginOptions)" options={{headerShown:false}}></Stack.Screen>
      <Stack.Screen name="(mainApp)" options={{headerShown:false}}></Stack.Screen>
    </Stack>
  )
};