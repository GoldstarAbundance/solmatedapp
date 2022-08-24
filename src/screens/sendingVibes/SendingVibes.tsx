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
import {Navigation} from '../../navigation';
import {BackButton} from '../../components/Buttons/BackButton';
const SLIDER_DATA = [
  {
    key: '1',
    image: ImageUri.profileIcon,
  },
  {
    key: '2',
    image: ImageUri.profileIcon,
  },
];
export const SendingVibes = (props: any) => {
  const {colors} = useTheme();
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const [message, setMessage] = useState(props.route.params.message);

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
            text={'Sending Your Vibe'}
            colorOne={colors.tertiaryOne}
            colorTwo={colors.secondaryOne}
          />
        </View>

        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              ...styleSheet.textView,
              backgroundColor: colors.primaryText,
            }}>
            <Text
              style={{
                color: colors.primaryBackground,
                ...globalStyleSheet.titleMedium10,
              }}>
              {message}
            </Text>
          </View>
          <View style={{...styleSheet.container}}>
            <View style={{...styleSheet.flatlist}}>
              <Image source={ImageUri.leftCircle} resizeMode="contain" />
              <Image
                source={ImageUri.logo}
                resizeMode="contain"
                style={{...styleSheet.centerCircle}}
              />
              <Image source={ImageUri.rightCircle} resizeMode="contain" />
            </View>
          </View>
        </KeyboardAwareScrollView>
        <View
          style={{
            ...styleSheet.bottomContainer,
            backgroundColor: colors.primaryBackground,
          }}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              Navigation.goToVibesRequest(props.navigation, message);
            }}
            style={{
              ...styleSheet.sendVibeBtn,
            }}>
            <Image
              source={ImageUri.loadingIcon}
              resizeMode="contain"
              style={{...styleSheet.sendIcon}}
            />
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
