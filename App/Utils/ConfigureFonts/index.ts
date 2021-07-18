import { FontsConfig } from '../../Types';
import { configureFonts as configureFontsRNP } from 'react-native-paper';

const configureFonts = (fonts: FontsConfig) => {
  return configureFontsRNP(fonts);
};

export default configureFonts;
