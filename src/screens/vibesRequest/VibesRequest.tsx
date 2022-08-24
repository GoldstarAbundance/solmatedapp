import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  Animated,
  TextInput,
} from 'react-native';
import useTheme from '../../hooks/useTheme';

import {globalStyleSheet, styleSheet} from './stylesheet';
import {ImageUri} from '../../config';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import GRTextTitle from '../../components/GRText/GRTextTitle';
import ConnectAudius from '../../components/Modal/ConnectAudius';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Navigation} from '../../navigation';
import {BackButton} from './../../components/Buttons/BackButton';

export const VibesRequest = (props: any) => {
  const {colors} = useTheme();
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const [message, setMessage] = useState(props.route.params.message);
  const [connectAudiusVisible, setConnectAudiusVisible] = useState(false);
  const [confirmSoundVisible, setConfirmSoundVisible] = useState(false);
  return (
    <>
      <View
        style={{
          ...globalStyleSheet.mainContainer,
          backgroundColor: colors.primaryBackground,
        }}>
        <View style={{...styleSheet.header}}>
          <GRTextTitle
            viewStyle={{...styleSheet.titlemainGr}}
            textStyle={{...globalStyleSheet.titleBold28}}
            text={'Vibe From'}
            colorOne={colors.tertiaryOne}
            colorTwo={colors.secondaryOne}
          />
          <Text
            style={{
              ...globalStyleSheet.titleBold28,
              color: colors.primaryText,
            }}>
            Rahim
          </Text>
        </View>

        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              ...styleSheet.container,
            }}>
            <View
              style={{
                ...styleSheet.textView,
                backgroundColor: colors.primaryText,
              }}>
              <Text
                style={{
                  color: colors.primaryBackground,
                  ...globalStyleSheet.titleMedium11,
                }}>
                {message}
              </Text>
            </View>
            <View style={{...styleSheet.flatlist}}>
              <Image
                source={ImageUri.logo}
                resizeMode="contain"
                style={{...styleSheet.centerCircle}}
              />
            </View>
          </View>
        </KeyboardAwareScrollView>
        <View
          style={{
            ...styleSheet.bottomContainer,
          }}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              Navigation.goToMessenger(props.navigation, message);
            }}
            style={{
              ...styleSheet.sendVibeBtn,
              backgroundColor: colors.tertiaryOne,
            }}>
            <Text
              style={{...styleSheet.btnText, color: colors.primaryBackground}}>
              Accept
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              Navigation.goToBack(props.navigation);
            }}
            style={{
              ...styleSheet.sendVibeBtn,
              backgroundColor: colors.activeTab,
            }}>
            <Text style={{...styleSheet.btnText, color: colors.primaryText}}>
              Decline
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <BackButton
        onPress={() => {
          Navigation.goToBack(props.navigation);
        }}
      />
    </>
  );
};
