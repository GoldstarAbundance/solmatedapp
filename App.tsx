/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {ThemeContext} from './src/context';
import {CustomSafeAreaView} from './src/components/SafeArea/CustomSafeAreaView';
import {AppNavigation} from './src/navigation/AppNavigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {enableScreens} from 'react-native-screens';

enableScreens(true);

const App = () => {
  return (
    <SafeAreaProvider>
        <ThemeContext>
          <CustomSafeAreaView color={null}>
            <AppNavigation />
          </CustomSafeAreaView>
        </ThemeContext>
    </SafeAreaProvider>
  );
};
export default App;
