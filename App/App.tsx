import React, { useState, useCallback } from 'react';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium_Italic,
  Poppins_500Medium,
  Poppins_700Bold,
  Poppins_300Light,
  Poppins_100Thin,
} from '@expo-google-fonts/poppins';
import { NavigationContainer } from '@react-navigation/native';
import { I18nextProvider } from 'react-i18next';
import { loadAssets, configureFonts } from './Utils';
import NavigationRoot from './Navigation';
import { Theme, i18n } from './Core';
import { FontsConfig } from './Types';
import { QuizData } from './Context';

const paperTheme = {
  ...DefaultTheme,
  roundness: 4,
  colors: {
    ...DefaultTheme.colors,
    ...Theme.colors,
  },
  fonts: configureFonts(Theme.fonts as FontsConfig),
};

const App = () => {
  const [isAssetsLoaded, setIsAssetsLoaded] = useState(false);
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium_Italic,
    Poppins_500Medium,
    Poppins_700Bold,
    Poppins_300Light,
    Poppins_100Thin,
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
      <PaperProvider theme={paperTheme}>
        <I18nextProvider i18n={i18n}>
          <QuizData.Provider>
            <NavigationContainer>
              <NavigationRoot />
            </NavigationContainer>
          </QuizData.Provider>
        </I18nextProvider>
      </PaperProvider>
    );
  }
};

export default App;
