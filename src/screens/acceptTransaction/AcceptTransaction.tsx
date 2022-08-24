import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import useTheme from '../../hooks/useTheme';

import {globalStyleSheet, styleSheet} from './stylesheet';
import {ImageUri} from '../../config';
import {RoundButton} from '../../components/Buttons';
import {AutoDetectWallet} from '../../components/Modal';
import {useState} from 'react';
import VerifyWallet from '../../components/Modal/VerifyWallet';
import {Navigation} from '../../navigation';
export const AcceptTransaction = (props: any) => {
  const {colors} = useTheme();

  return (
    <View
      style={{
        ...globalStyleSheet.mainContainer,
        backgroundColor: colors.tertiaryBackGround,
      }}>
      <View style={{...styleSheet.container}}>
        <View style={{...styleSheet.appDetail}}>
          <Image
            source={ImageUri.logo}
            style={{...styleSheet.iconApp}}
            resizeMode={'contain'}
          />
          <Text
            style={{
              ...styleSheet.appDetailLogo,
              ...globalStyleSheet.titleBold16,
              color: colors.primaryText,
            }}>
            SolMate
          </Text>
          <Text
            style={{
              ...styleSheet.appDetailId,
              ...globalStyleSheet.titleRegular10,
              color: colors.primaryText,
            }}>
            solmate.app
          </Text>
        </View>

        <View
          style={{
            ...styleSheet.containerDetail,
            backgroundColor: colors.secondaryBtnBackground,
          }}>
          <View
            style={{
              ...styleSheet.signMsg,
              borderBottomColor: colors.primaryBackground,
            }}>
            <Text
              style={{
                ...globalStyleSheet.titleMedium12,
                color: colors.primaryText,
              }}>
              Sign Message
            </Text>
          </View>
          <View
            style={{
              ...styleSheet.signMsgSol,
              borderBottomColor: colors.primaryBackground,
            }}>
            <Text
              style={{
                ...globalStyleSheet.titleRegular11,
                color: colors.secondaryText,
              }}>
              Sign Message
            </Text>
            <Text
              style={{
                ...globalStyleSheet.titleRegular11,
                color: colors.tertiaryText,
              }}>
              {` SolMate`}
            </Text>
          </View>
          <View
            style={{
              ...styleSheet.signMsgSol,
              borderBottomColor: colors.primaryBackground,
            }}>
            <Text
              style={{
                ...globalStyleSheet.titleRegular11,
                color: colors.secondaryText,
              }}>
              No password needed
            </Text>
          </View>
          <View
            style={{
              ...styleSheet.signMsgDetail,
              borderBottomColor: colors.primaryBackground,
            }}>
            <Text
              style={{
                ...globalStyleSheet.titleRegular11,
                color: colors.secondaryText,
              }}>
              {`Click "Sign" or "Approve" only means you have proved this wallet is owned by you`}
            </Text>
          </View>
          <View
            style={{
              ...styleSheet.signMsgDetail,
              borderBottomColor: colors.primaryBackground,
            }}>
            <Text
              style={{
                ...globalStyleSheet.titleRegular11,
                color: colors.secondaryText,
              }}>
              {`This request will not trigger any blockchain transaction or cost any gas fee`}
            </Text>
          </View>
        </View>
        <View style={{...styleSheet.btnContainer}}>
          <RoundButton
            backgroundColor={colors.secondaryBtnBackground}
            clickable={true}
            onPress={() => {
              Navigation.goToBack(props.navigation);
            }}
            textColor={colors.primaryText}
            borderColor={colors.secondaryBtnBackground}
            style={{...styleSheet.btn}}
            buttonWidth={'40'}
            text={'Cancel'}
            btnTextStyle={{...globalStyleSheet.titleMedium12}}
            buttonHeight={'6'}
          />
          <RoundButton
            backgroundColor={colors.primaryBtnBackground}
            clickable={true}
            onPress={() => {
              Navigation.goToRegister(props.navigation);
            }}
            textColor={colors.primaryText}
            borderColor={colors.primaryBtnBackground}
            style={{...styleSheet.btn}}
            buttonWidth={'40'}
            text={'Approve'}
            btnTextStyle={{...globalStyleSheet.titleMedium12}}
            buttonHeight={'6'}
          />
        </View>
      </View>
    </View>
  );
};
