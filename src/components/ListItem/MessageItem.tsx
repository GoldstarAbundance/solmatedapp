import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import useTheme from '../../hooks/useTheme';
import {
  heightPercentageToDP as HP,
  widthPercentageToDP as WP,
} from 'react-native-responsive-screen';
import {Message} from '../../interface';
import {globalStyleSheet} from '../../style/style';
interface MsgProp {
  item: Message;
}

export const MessageItem = (props: MsgProp) => {
  const {colors} = useTheme();

  return (
    <View
      style={[
        {...styleSheet.container},
        props.item.sendByMe
          ? {
              justifyContent: 'flex-end',
            }
          : {
              justifyContent: 'flex-start',
            },
      ]}>
      {props.item.sendByMe ? (
        <View
          style={{
            ...styleSheet.msgContainer,
            backgroundColor: colors.secondaryOne,
          }}>
          <Text
            style={{
              ...globalStyleSheet.titleRegular12,
              color: colors.primaryText,
            }}>
            {props.item.msg}
          </Text>
        </View>
      ) : (
        <View style={{...styleSheet.msgContainer, backgroundColor: 'white'}}>
          <Text style={{...globalStyleSheet.titleMedium12, textAlign: 'left'}}>
            {props.item.msg}
          </Text>
        </View>
      )}
    </View>
  );
};
const styleSheet = StyleSheet.create({
  container: {
    alignItems: 'baseline',
    flexDirection: 'row',
    width: WP('100%'),
    padding: 8,
  },
  msgContainer: {
    maxWidth: WP('90%'),
    marginStart: WP('5%'),
    marginEnd: '5%',
    padding: 12,
    borderRadius: 10,
  },
  textMsg: {
    maxWidth: WP('90%'),
  },
});
