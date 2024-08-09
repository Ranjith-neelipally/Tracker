import React from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';
import AppNavigator from './src/Router/AppNavigator';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar animated={true} backgroundColor="#C1D6D9" />
      <GestureHandlerRootView>
        <AppNavigator />
      </GestureHandlerRootView>
    </SafeAreaView>
  );
}

export default App;
