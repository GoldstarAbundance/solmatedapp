import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import useTheme from '../../hooks/useTheme';

import {globalStyleSheet, styleSheet} from './stylesheet';
import {ImageUri} from '../../config';
import {RoundButton} from '../../components/Buttons';
import {useState} from 'react';
import VerifyWallet from '../../components/Modal/VerifyWallet';
import {AutoDetectWallet} from '../../components/Modal';
import {Navigation} from '../../navigation';
export const StartUp = (props: any) => {
  const {colors} = useTheme();
  const [autoDetectModalVisible, setAutoDetectModalVisible] = useState(false);
  const [verifyModalVisible, setVerifyModalVisible] = useState(false);

  return (
    <View
      style={{
        ...globalStyleSheet.mainContainer,
        backgroundColor: colors.primaryBackground,
      }}>
      <View style={{...styleSheet.container}}>
        <View
          style={{
            ...styleSheet.appDetailContainer,
          }}>
          <Text
            style={{
              ...styleSheet.txtContainer,
              ...globalStyleSheet.titleMedium12,
              color: colors.primaryText,
            }}>
            Beta
          </Text>
          {/* <Text
            style={{
              ...styleSheet.txtContainer,
              backgroundColor: 'white',
              ...globalStyleSheet.titleBold32,
            }}>
            SolMate
          </Text> */}
          <Image
            resizeMode="contain"
            source={ImageUri.solMate}
            style={{...styleSheet.solMateIcon}}
          />
        </View>
        <View
          style={{
            ...styleSheet.connectWalletBtn,
          }}>
          <RoundButton
            backgroundColor={colors.secondaryOne}
            clickable={true}
            onPress={() => {
              setAutoDetectModalVisible(true);
            }}
            textColor={colors.primaryText}
            borderColor={colors.secondaryOne}
            style={{...styleSheet.btnContainer}}
            buttonWidth={'55'}
            buttonHeight={'7'}
            text={'Connect Wallet '}
            btnTextStyle={{...globalStyleSheet.titleMedium16}}
          />
        </View>

        <Image
          resizeMode="contain"
          source={ImageUri.logoHalf}
          style={{...styleSheet.halfIcon}}
        />
      </View>
      <AutoDetectWallet
        isVisible={autoDetectModalVisible}
        onClose={() => {
          setAutoDetectModalVisible(false);
          setTimeout(() => {
            setVerifyModalVisible(true);
          }, 500);
        }}
      />
      <VerifyWallet
        isVisible={verifyModalVisible}
        signMessagePress={() => {
          setAutoDetectModalVisible(false);
          setVerifyModalVisible(false);
          setTimeout(() => {
            Navigation.goToAcceptTransaction(props.navigation);
          }, 500);
        }}
        changeWalletPress={() => {
          setAutoDetectModalVisible(false);
          setVerifyModalVisible(false);
        }}
        onClose={() => {}}
      />
    </View>
  );
};
