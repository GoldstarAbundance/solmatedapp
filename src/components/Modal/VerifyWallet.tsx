import useTheme from '../../hooks/useTheme';
import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import ToggleSwitch from 'toggle-switch-react-native';
import {
  heightPercentageToDP as HP,
  widthPercentageToDP as WP,
} from 'react-native-responsive-screen';
import {Enum, ImageUri} from '../../config';
import {globalStyleSheet} from '../../style/style';
import {useState} from 'react';
import CornerButton from '../Buttons/CornerButton';

export interface AutoDetectWalletProp {
  isVisible: boolean;
  onClose: Function;
  signMessagePress: Function;
  changeWalletPress: Function;
}

const VerifyWallet = (props: AutoDetectWalletProp) => {
  const {colors} = useTheme();
  const [usingLedger, setUsingLedger] = useState(false);

  return (
    <Modal
      isVisible={props.isVisible}
      animationInTiming={1}
      backdropColor={colors.verifyDialogShade}
      backdropOpacity={1}
      animationOutTiming={1}>
      <View
        style={{
          ...styles.modalconatainer,
          backgroundColor: colors.secondaryBackGround,
        }}>
        <View style={{...styles.iconView}}>
          <Text
            style={{
              ...globalStyleSheet.titleMedium20,
              color: colors.primaryText,
              width: WP('50%'),
              textAlign: 'center',
            }}>
            {'Verify Wallet'}
          </Text>
          <Text
            style={{
              ...globalStyleSheet.titleRegular11,
              color: colors.secondaryText,
              width: WP('55%'),
              marginTop: HP('3%'),
              textAlign: 'center',
            }}>
            {'Sign a message to prove ownership of wallet'}
          </Text>

          <View
            style={{
              ...styles.walletContainer,
              marginTop: HP('3%'),
              backgroundColor: colors.tertiaryBackGround,
            }}>
            <Text
              style={{
                ...globalStyleSheet.titleRegular11,
                color: colors.secondaryText,
                width: WP('40%'),
                textAlign: 'center',
              }}>
              {'0xc0ffdds3.......d54979'}
            </Text>
          </View>
          <View
            style={{
              ...styles.ledgerContainer,
            }}>
            <Text
              style={{
                ...globalStyleSheet.titleMedium12,
                color: colors.secondaryText,
                textAlign: 'center',
              }}>
              Using Ledger ?
            </Text>
            <ToggleSwitch
              isOn={usingLedger}
              trackOnStyle={{
                height: 25,
                width: 45,
              }}
              trackOffStyle={{
                height: 25,
                width: 45,
              }}
              onColor={colors.secondaryOne}
              thumbOnStyle={{
                backgroundColor: colors.primaryText,
                marginStart: WP('1%'),
                width: 20,
                height: 20,
                borderRadius: 25,
              }}
              thumbOffStyle={{
                backgroundColor: colors.primaryText,
                marginStart: WP('1%'),
                width: 20,
                height: 20,
                borderRadius: 25,
              }}
              offColor={colors.secondaryText}
              // labelStyle={{...styleSheet.optionRight}}
              animationSpeed={0.8}
              size="medium"
              onToggle={() => {
                setUsingLedger(!usingLedger);
              }}
            />
          </View>
          <View style={{...styles.btnContainer}}>
            <CornerButton
              backgroundColor={colors.tertiaryBtn}
              clickable={true}
              onPress={() => {
                props.signMessagePress();
              }}
              textColor={colors.primaryText}
              borderColor={colors.tertiaryBackGround}
              style={{...styles.btn}}
              buttonWidth={'40'}
              text={'Sign Message'}
              btnTextStyle={{...globalStyleSheet.titleMedium12}}
              buttonHeight={'5'}
            />
            <CornerButton
              backgroundColor={colors.secondaryBackGround}
              clickable={true}
              onPress={() => {
                props.changeWalletPress();
              }}
              textColor={colors.primaryText}
              borderColor={colors.secondaryText}
              style={{...styles.btn}}
              buttonWidth={'40'}
              text={'Change Wallet'}
              btnTextStyle={{...globalStyleSheet.titleMedium12}}
              buttonHeight={'5'}
            />
          </View>
        </View>

        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            ...styles.iconCloseContainar,
            backgroundColor: colors.secondaryText,
          }}
          onPress={() => {
            props.signMessagePress();
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
  btn: {
    width: WP('40%'),
    height: HP('6%'),
    elevation: 2,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  btnContainer: {
    width: WP('70%'),
    flexDirection: 'column',
    height: HP('13%'),
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: HP('3%'),
  },
  ledgerContainer: {
    width: WP('45%'),
    marginTop: HP('3%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  walletContainer: {
    height: HP('5%'),
    width: WP('50%'),
    borderRadius: 50,
    justifyContent: 'center',
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
    height: HP('3%'),
    width: HP('3%'),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    borderRadius: HP('4%'),
    top: HP('2%'),
    right: WP('5%'),
  },
  iconClose: {
    height: HP('2.5%'),
    width: WP('3.5%'),
  },
  iconChain: {
    height: HP('4%'),
    width: HP('4%'),
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
export default VerifyWallet;
