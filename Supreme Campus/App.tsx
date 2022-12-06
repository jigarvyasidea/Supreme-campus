const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Screen1 from "./screens/Screen1";
import Screen2 from "./screens/Screen2";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);

  useFonts({
    Inter: require("./assets/fonts/Inter.ttf"),
    "Work Sans": require("./assets/fonts/Work Sans.ttf"),
  });

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 1000);
  }, []);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Screen1"
              component={Screen1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Screen2"
              component={Screen2}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <Screen1 />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;
