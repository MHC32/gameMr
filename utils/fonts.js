// fonts.js
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';

export default function useCustomFonts() {
  const [loaded, error] = useFonts({
    'RopaSansItalic': require('../assets/fonts/RopaSans-Italic.ttf'),
    'RopaSansRegular': require('../assets/fonts/RopaSans-Regular.ttf'),
    'UrbanistItalic': require('../assets/fonts/Urbanist-Italic-VariableFont_wght.ttf'),
    'UrbanistVariable': require('../assets/fonts/Urbanist-VariableFont_wght.ttf')
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  return { loaded, error };
}
