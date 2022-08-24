import React, {useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import useTheme from '../../hooks/useTheme';

import {globalStyleSheet, styleSheet} from './stylesheet';
import {ImageUri} from '../../config';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
export const Home = (props: any) => {
  const {colors} = useTheme();
  return (
    <View
      style={{
        ...globalStyleSheet.mainContainer,
        backgroundColor: colors.primaryBackground,
      }}>
      <View style={{...styleSheet.container}}>
        <View style={{...styleSheet.header}}>
          <View style={{...styleSheet.userDetial}}>
            <Text
              style={{...styleSheet.description, color: colors.secondaryText}}>
              Welcome,
            </Text>
            <Text style={{...styleSheet.title, color: colors.primaryText}}>
              Rahim
            </Text>
          </View>
          <ImageBackground
            source={ImageUri.logo}
            style={{...styleSheet.profile}}>
            <Image
              source={ImageUri.scarprioIcon}
              style={{...styleSheet.scarpioIcon}}
              resizeMode={'contain'}
            />
          </ImageBackground>
        </View>
        <KeyboardAwareScrollView>
          <View style={{...styleSheet.recentlyMatched}}>
            <Text
              style={{
                ...globalStyleSheet.titleMedium16,
                color: colors.primaryText,
              }}>
              Recently Matched
            </Text>
            <Text
              style={{
                ...globalStyleSheet.titleRegular12,
                color: colors.tertiaryText,
              }}>
              See all
            </Text>
          </View>
          <View style={{...styleSheet.recentlyMatchedColor}}>
            <Image
              source={ImageUri.teamIcon}
              style={{...styleSheet.multiColorIcon}}
              resizeMode={'contain'}
            />
          </View>
          <View
            style={{
              ...styleSheet.containerDetailTop,
            }}>
            <Text
              style={{
                ...globalStyleSheet.titleMedium16,
                color: colors.secondaryOne,
              }}>
              LEARN ABOUT ASTROLOGY
            </Text>
            <View
              style={{
                ...styleSheet.containerBox,
                backgroundColor: colors.secondaryBackGround,
              }}
            />
          </View>
          <View
            style={{
              ...styleSheet.containerDetail,
            }}>
            <Text
              style={{
                color: colors.secondaryOne,
                ...styleSheet.titleContainer,
              }}>
              SEE COMPATIBILITY WITH MATCHES
            </Text>
            <View
              style={{
                ...styleSheet.containerStrip,
                backgroundColor: colors.secondaryBackGround,
              }}
            />
            <View
              style={{
                ...styleSheet.containerStrip,
                backgroundColor: colors.secondaryBackGround,
              }}
            />
          </View>
          <View
            style={{
              ...styleSheet.containerDetail,
            }}>
            <Text
              style={{
                ...styleSheet.exploreText,
                
                color: colors.tertiaryOne,
              }}>
              EXPLORE NEW CONNECTIONS
            </Text>
            <View
              style={{
                ...styleSheet.containerBox,
                backgroundColor: colors.secondaryBackGround,
              }}
            />
          </View>
        </KeyboardAwareScrollView>
      </View>
    </View>
  );
};
