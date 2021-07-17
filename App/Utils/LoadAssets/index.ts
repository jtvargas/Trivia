import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

// This code is to pre-load and cache the app assets, see more in: https://docs.expo.io/guides/preloading-and-caching-assets/

function cacheFonts(
  fonts:
    | Font.FontSource[]
    | string[]
    | { [fontFamily: string]: Font.FontSource }[],
) {
  return fonts.map(font => Font.loadAsync(font));
}

const loadAssets = async () => {
  const fontAssets = cacheFonts([Ionicons.font]);

  await Promise.all([...fontAssets]);
};

export { loadAssets };
