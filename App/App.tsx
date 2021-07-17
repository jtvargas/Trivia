import { StatusBar } from 'expo-status-bar';
import React, { useState, useCallback } from 'react';
import { Text, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
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
import { Ionicons } from '@expo/vector-icons';
import { loadAssets } from './Utils';

import { Button } from 'react-native-paper';

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
        <View style={styles.container}>
          <Text style={styles.textRegular}>TriviaAPP!</Text>
          <Text style={styles.textRegularItalic}>TriviaAPP!</Text>
          <Text style={styles.textMedium}>TriviaAPP!</Text>
          <Text style={styles.textMediumItalic}>TriviaAPP!</Text>
          <Text style={styles.textBold}>TriviaAPP!</Text>
          <View style={styles.box} />
          <Ionicons name="md-checkmark-circle" size={32} color="green" />
          <StatusBar style="auto" />
          <Button
            icon="camera"
            mode="contained"
            onPress={() => console.log('Pressed')}
          >
            Press me
          </Button>
        </View>
      </PaperProvider>
    );
  }
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    height: '100@s',
    width: '100@s',
    backgroundColor: 'blue',
  },
  textMedium: {
    fontFamily: 'Poppins_500Medium',
  },
  textRegular: {
    fontFamily: 'Poppins_400Regular',
  },
  textRegularItalic: {
    fontFamily: 'Poppins_400Regular_Italic',
  },
  textMediumItalic: {
    fontFamily: 'Poppins_500Medium_Italic',
  },
  textBold: {
    fontFamily: 'Poppins_700Bold',
  },
});

export default App;
