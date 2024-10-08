import { View, Text } from 'react-native';
import { Link } from 'expo-router';

export default function Home() {
  return (
    <View>
      <Text> this is home page</Text>
      <Link href="./(loginOptions)/login">login</Link>
      <Link href="./(mainApp)/ContentPage">ContentPage</Link>
    </View>
  )
};