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

export interface AutoDetectWalletProp {
  isVisible: boolean;
  onClose: Function;
}

const AutoDetectWallet = (props: AutoDetectWalletProp) => {
  const {colors} = useTheme();

  return (
    <Modal
      isVisible={props.isVisible}
      animationInTiming={1}
      animationOutTiming={1}>
      <View
        style={{
          ...styles.modalconatainer,
          backgroundColor: colors.autoDetectDialog,
        }}>
        <View style={{...styles.iconView}}>
          <Text
            style={{
              ...globalStyleSheet.titleBold16,
              color: colors.primaryText,
              width: WP('50%'),
              textAlign: 'center',
              marginTop: HP('2%'),
            }}>
            {'Connect a wallet on Solana to continue'}
          </Text>
          <View style={{...styles.autoDetectRow}}>
            <View style={{...styles.chainContainer}}>
              <Image
                source={ImageUri.phontomIcon}
                resizeMode={'contain'}
                style={{...styles.iconChain}}
              />
              <Text
                style={{
                  ...globalStyleSheet.titleMedium11,
                  color: colors.primaryText,
                  marginStart: WP('2%'),
                }}>
                Phontom
              </Text>
            </View>
            <Text
              style={{
                ...globalStyleSheet.titleMedium11,
                color: colors.secondaryText,
              }}>
              Detected
            </Text>
          </View>
        </View>
        <View style={{...styles.moreOptionContainer}}>
          <Text
            style={{
              ...globalStyleSheet.titleMedium11,
              color: colors.primaryText,
              marginStart: WP('2%'),
              marginEnd: WP('1%'),
            }}>
            More Options
          </Text>
          <Image
            source={ImageUri.dropDownIcon}
            resizeMode={'contain'}
            style={{...styles.iconDropDown, tintColor: colors.primaryText}}
          />
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            ...styles.iconCloseContainar,
            backgroundColor: colors.secondaryText,
          }}
          onPress={() => {
            props.onClose();
          }}>
          <Image
            source={ImageUri.exitIcon}
            resizeMode={'contain'}
            style={{...styles.iconClose, tintColor: colors.primaryBackground}}
          />
        </TouchableOpacity>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  moreOptionContainer: {
    width: WP('80%'),
    height: HP('4%'),
    marginTop: HP('3%'),
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  modalconatainer: {
    width: WP('90%'),
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: HP('2%'),
    paddingBottom: HP('2%'),
    borderRadius: HP('2%'),
  },
  autoDetectRow: {
    width: WP('80%'),
    height: HP('4%'),
    marginTop: HP('3%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  chainContainer: {
    flexDirection: 'row',
    width: WP('40%'),
    alignItems: 'center',
  },
  btnStyle: {
    marginTop: HP('2%'),
    borderRadius: HP('2%'),
    elevation: 2,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    paddingTop: 10,
    paddingStart: 30,
    paddingEnd: 30,
    paddingBottom: 10,
  },
  iconCloseContainar: {
    height: HP('3.5%'),
    width: HP('3.5%'),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    borderRadius: HP('4%'),
    top: HP('1.5%'),
    right: WP('5%'),
  },
  iconClose: {
    height: HP('2.5%'),
    width: WP('3.5%'),
  },
  iconChain: {
    height: HP('3%'),
    width: HP('3%'),
  },
  iconDropDown: {
    height: HP('2%'),
    width: HP('2%'),
    marginStart: WP('1%'),
  },
  iconView: {
    width: WP('80%'),
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  icon: {
    height: HP('6%'),
    width: WP('12%'),
  },
});
export default AutoDetectWallet;
