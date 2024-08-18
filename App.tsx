import React from 'react';
import {SafeAreaView} from 'react-native';
import AppNavigator from './src/Router/AppNavigator';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {ThemeProvider, useTheme} from './src/theme/ThemeContext';
import CustomStatusBar from './src/components/StatusBar';

const MainApp = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomStatusBar />
      <GestureHandlerRootView>
        <AppNavigator />
      </GestureHandlerRootView>
    </SafeAreaView>
  );
};

function App(): React.JSX.Element {
  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
}

export default App;
