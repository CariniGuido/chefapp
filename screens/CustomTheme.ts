import { DefaultTheme } from 'react-native-paper';

const CustomTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#FF6B6B',
    accent: '#4ECDC4',
    background: '#F7FFF7',
    surface: '#FFFFFF',
    text: '#2C363F',
    error: '#E63946',
  },
  fonts: {
    ...DefaultTheme.fonts,
    regular: {
      fontFamily: 'Roboto-Regular',
      fontWeight: 'normal' as 'normal',
    },
    medium: {
      fontFamily: 'Roboto-Medium',
      fontWeight: 'normal' as 'normal',
    },
    light: {
      fontFamily: 'Roboto-Light',
      fontWeight: 'normal' as 'normal',
    },
    thin: {
      fontFamily: 'Roboto-Thin',
      fontWeight: 'normal' as 'normal',
    },
  },
};

export default CustomTheme;