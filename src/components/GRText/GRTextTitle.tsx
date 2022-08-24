import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-community/masked-view';
import {Platform, StyleSheet, Text, View} from 'react-native';
import useTheme from '../../hooks/useTheme';

interface GRTextProps {
  viewStyle?: object;
  textStyle: object;
  text: string;
  colorOne: string;
  colorTwo: string;
}

const GRTextTitle = (props: GRTextProps) => {
  const {colors} = useTheme();

  return (
    <MaskedView
      style={props.viewStyle ? {...props.viewStyle} : null}
      maskElement={
        <View style={props.viewStyle ? {...props.viewStyle} : null}>
          <Text
            style={
              props.viewStyle
                ? {...props.textStyle, color: colors.secondaryOne}
                : null
            }>
            {props.text}
          </Text>
        </View>
      }>
      <LinearGradient
        style={props.viewStyle ? {...props.viewStyle} : null}
        colors={
          props.colorOne
            ? [props.colorOne, props.colorTwo]
            : [colors.secondaryOne, colors.primaryOne]
        }
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}></LinearGradient>
    </MaskedView>
  );
};

const styles = StyleSheet.create({
  mask: {
    opacity: 0,
  },
});

export default GRTextTitle;
