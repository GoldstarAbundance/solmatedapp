import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import PropTypes from 'prop-types';
import {StatusBar} from 'react-native';
import useTheme from '../../hooks/useTheme';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
interface Props {
  children?: any;
  color?: any;
  // any props that come into the component
}
export const CustomSafeAreaView = ({children, color}: Props) => {
  const {colors, dark} = useTheme();
  return (
    <SafeAreaView
      mode="padding"
      edges={['bottom', 'top']}
      style={[
        {flex: 1},
        color ? {backgroundColor: color} : {backgroundColor: colors.primaryOne},
      ]}>
      <StatusBar
        backgroundColor={color ? color : colors.primaryOne}
        barStyle="light-content"
      />
      {children}
    </SafeAreaView>
  );
};
CustomSafeAreaView.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element.isRequired,
  ]),
};
