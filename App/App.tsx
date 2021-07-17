import React, { useState, useCallback } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium_Italic,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import { NavigationContainer } from '@react-navigation/native';
import { loadAssets } from './Utils';
import NavigationRoot from './Navigation';

const App = () => {
  const [isAssetsLoaded, setIsAssetsLoaded] = useState(false);
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium_Italic,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  const onFinishLoading = useCallback(() => {
    return setIsAssetsLoaded(true);
  }, []);

  if (!isAssetsLoaded || !fontsLoaded) {
    return (
      <AppLoading
        startAsync={loadAssets}
        onFinish={onFinishLoading}
        onError={console.warn}
      />
    );
  } else {
    return (
      <PaperProvider>
        <NavigationContainer>
          <NavigationRoot />
        </NavigationContainer>
      </PaperProvider>
    );
  }
};

export default App;
