import useTheme from '../../hooks/useTheme';
import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import {
  heightPercentageToDP as HP,
  widthPercentageToDP as WP,
} from 'react-native-responsive-screen';
import {Enum, ImageUri} from '../../config';
import {globalStyleSheet} from '../../style/style';

export interface ConnectAudiusProp {
  isVisible: boolean;
  onClose: Function;
}

const ConnectAudius = (props: ConnectAudiusProp) => {
  const {colors} = useTheme();

  return (
    <Modal
      isVisible={props.isVisible}
      animationInTiming={1}
      animationOutTiming={1}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          props.onClose();
        }}
        style={{
          ...styles.modalconatainer,
          backgroundColor: colors.connectAudiusDialog,
        }}>
        <Text
          style={{
            ...globalStyleSheet.titleMedium16,
            color: colors.primaryText,
          }}>
          Connect Audius
        </Text>
      </TouchableOpacity>
    </Modal>
  );
};
const styles = StyleSheet.create({
  modalconatainer: {
    width: WP('90%'),
    height: HP('15%'),
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: HP('2%'),
    paddingBottom: HP('2%'),
    borderRadius: HP('2%'),
  },
});
export default ConnectAudius;
