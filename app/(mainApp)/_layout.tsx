import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

export default function mainAppLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>

        <Drawer.Screen
          name="homepage" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Home',
            title: 'overview',
          }}
        />
        <Drawer.Screen
          name="Profile" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Profile',
            title: 'overview',
          }}
        />
        <Drawer.Screen
          name="ContentPage" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Content',
            title: 'overview',
          }}
        />
        <Drawer.Screen
          name="SettingPage" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Setting',
            title: 'overview',
          }}
        />
        <Drawer.Screen
          name="logout" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'logout',
            title: 'overview',
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
