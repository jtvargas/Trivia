import { configureFonts as configureFontsRNP } from 'react-native-paper';

const fontConfig = {
  ios: {
    regular: {
      fontFamily: 'Poppins_400Regular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Poppins_500Medium',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'Poppins_300Light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'Poppins_100Thin',
      fontWeight: 'normal',
    },
  },
  android: {
    regular: {
      fontFamily: 'Poppins_400Regular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Poppins_500Medium',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'Poppins_300Light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'Poppins_100Thin',
      fontWeight: 'normal',
    },
  },
};

const configureFonts = () => {
  return configureFontsRNP(fontConfig);
};

export default configureFonts;
