import React from 'react';
import {StyleSheet, View, TextInput, KeyboardTypeOptions} from 'react-native';
import {
  widthPercentageToDP as WP,
  heightPercentageToDP as HP,
} from 'react-native-responsive-screen';
import {Text} from 'react-native-svg';
import {CustomFont, ImageUri} from '../../config';
import useTheme from '../../hooks/useTheme';
import {globalStyleSheet} from '../../style/style';
interface IProps {
  value?: string;
  onChangeText: Function;
  textStyle?: Object;
  style?: Object;
  keyboardType?: KeyboardTypeOptions;
  placeholderText?: string;
}
const SimpleInput = (props: IProps) => {
  const {colors} = useTheme();
  const value = props.value ? props.value : '';
  const keyboardType = props.keyboardType
    ? props.keyboardType
    : 'numbers-and-punctuation';
  return (
    <View
      style={[
        {
          ...styleSheet.mainContainer,
          backgroundColor: colors.inputBackground,
        },
        props.style && props.style,
      ]}>
      <TextInput
        value={value}
        maxLength={8}
        returnKeyType={'done'}
        onChangeText={text => props.onChangeText(text)}
        style={[
          {
            ...styleSheet.inputText,
            color: colors.secondaryText,
          },
          props.textStyle && props.textStyle,
        ]}
        keyboardType={keyboardType}
        placeholder={props.placeholderText}
        placeholderTextColor={colors.placeholderText}
      />
    </View>
  );
};
const styleSheet = StyleSheet.create({
  mainContainer: {
    width: WP('90%'),
    height: HP('7%'),
    marginTop: HP('1%'),
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
    borderRadius: HP('1%'),
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  inputText: {
    width: WP('90%'),
    height: HP('7%'),
    paddingStart: WP('4%'),
    paddingEnd: WP('4%'),
    ...globalStyleSheet.titleMedium12,
  },
});
export default SimpleInput;
