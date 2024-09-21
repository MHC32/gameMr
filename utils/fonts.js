// fonts.js
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';

export default function useCustomFonts() {
  const [loaded, error] = useFonts({
    'RopaSansItalic': require('../assets/fonts/RopaSans-Italic.ttf'),
    'RopaSansRegular': require('../assets/fonts/RopaSans-Regular.ttf'),
    'UrbanistItalic': require('../assets/fonts/Urbanist-Italic-VariableFont_wght.ttf'),
    'UrbanistVariable': require('../assets/fonts/Urbanist-VariableFont_wght.ttf'),
    'UrbanistBlack': require('../assets/fonts/Urbanist-Black.ttf'),
    'UrbanistItalic': require('../assets/fonts/Urbanist-BlackItalic.ttf'),
    'UrbanistBold': require('../assets/fonts/Urbanist-Bold.ttf'),
    'UrbanistBoldItalic': require('../assets/fonts/Urbanist-BoldItalic.ttf'),
    'UrbanistExtraBold': require('../assets/fonts/Urbanist-ExtraBold.ttf'),
    'UrbanistEtraBoldItalic': require('../assets/fonts/Urbanist-ExtraBoldItalic.ttf'),
    'UrbanistEtraLight': require('../assets/fonts/Urbanist-ExtraLight.ttf'),
    'UrbanistEtraLightItalic': require('../assets/fonts/Urbanist-ExtraLightItalic.ttf'),
    'UrbanistItalic': require('../assets/fonts/Urbanist-Italic.ttf'),
    'UrbanistLight': require('../assets/fonts/Urbanist-Light.ttf'),
    'UrbanistLightItalic': require('../assets/fonts/Urbanist-LightItalic.ttf'),
    'UrbanistMedium': require('../assets/fonts/Urbanist-Medium.ttf'),
    'UrbanistMediumItalic': require('../assets/fonts/Urbanist-MediumItalic.ttf'),
    'UrbanistRegular': require('../assets/fonts/Urbanist-Regular.ttf'),
    'UrbanistSemiBold': require('../assets/fonts/Urbanist-SemiBold.ttf'),
    'UrbanistSemiBoldItalic': require('../assets/fonts/Urbanist-SemiBoldItalic.ttf'),
    'UrbanistThin': require('../assets/fonts/Urbanist-Thin.ttf'),
    'UrbanistThinItalic': require('../assets/fonts/Urbanist-ThinItalic.ttf')
    

  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  return { loaded, error };
}
