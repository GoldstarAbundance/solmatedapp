import React, {useEffect, useRef, useState} from 'react';
import {ROOT} from './Root';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {AppState} from 'react-native';
import {
  AcceptTransaction,
  Register,
  Sample,
  StartUp,
  VibesConnectAudius,
  VibesMessenger,
  VibesSelectSong,
  Astrology,
  SendingVibes,
  VibesRequest,
  Splash,
} from '../screens';
import BottomTabs from './BottomTabs';

const Stack = createStackNavigator();
export const AppNavigation = (props: any) => {
  const appState = useRef(AppState.currentState);
  const navigationRef: any = useRef();
  const [initialRoute, setInitialRoute] = useState(ROOT.SPLASH);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {isLoading ? (
        <></>
      ) : (
        <NavigationContainer ref={navigationRef}>
          <Stack.Navigator
            initialRouteName={initialRoute}
            screenOptions={{
              gestureEnabled: true,
              animationEnabled: false,
              detachPreviousScreen: false,
            }}>
            <Stack.Screen
              component={BottomTabs}
              name={ROOT.MAIN}
              options={{headerShown: false}}
            />
            <Stack.Screen
              component={AcceptTransaction}
              name={ROOT.ACCEPT_TRANSACTOIN}
              options={{headerShown: false}}
            />
            <Stack.Screen
              component={Register}
              name={ROOT.REGISTER}
              options={{headerShown: false}}
            />
            <Stack.Screen
              component={StartUp}
              name={ROOT.START_UP}
              options={{headerShown: false}}
            />
            <Stack.Screen
              component={VibesConnectAudius}
              name={ROOT.VIBES_CONNECT_AUDIUS}
              options={{headerShown: false}}
            />
            <Stack.Screen
              component={VibesMessenger}
              name={ROOT.VIBES_MESSENGER}
              options={{headerShown: false}}
            />
            <Stack.Screen
              component={VibesSelectSong}
              name={ROOT.VIBES_SELECT_SONG}
              options={{headerShown: false}}
            />
            <Stack.Screen
              component={Astrology}
              name={ROOT.ASTROLOGY}
              options={{headerShown: false}}
            />
            <Stack.Screen
              component={SendingVibes}
              name={ROOT.SENDING_VIBES}
              options={{headerShown: false}}
            />
            <Stack.Screen
              component={VibesRequest}
              name={ROOT.VIBES_REQUEST}
              options={{headerShown: false}}
            />
            <Stack.Screen
              component={Splash}
              name={ROOT.SPLASH}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </>
  );
};
