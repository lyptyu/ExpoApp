import '../global.css';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Stack } from 'expo-router';
import {View} from "react-native";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(drawer)',
};

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
        <Stack>
            <View>
                helloWorld
            </View>
        </Stack>
    </GestureHandlerRootView>
  );
}
