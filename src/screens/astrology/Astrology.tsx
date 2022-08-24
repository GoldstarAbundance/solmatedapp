import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import useTheme from '../../hooks/useTheme';

import {globalStyleSheet, styleSheet} from './stylesheet';
import {ImageUri} from '../../config';
import {RoundButton} from '../../components/Buttons';
import {Navigation} from '../../navigation';
import {BackButton} from '../../components/Buttons/BackButton';
export const Astrology = (props: any) => {
  const {colors} = useTheme();
  return (
    <>
      <View
        style={{
          ...globalStyleSheet.mainContainer,
          backgroundColor: colors.primaryBackground,
        }}>
        <View style={{...styleSheet.container}}>
          <Text
            style={{
              ...styleSheet.profileTitle,
              color: colors.primaryText,
            }}>
            Full Astrology Chart
          </Text>
          <Text style={{...styleSheet.secondTitle, color: colors.tertiaryText}}>
            How to read your chart
          </Text>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{...styleSheet.imageView}}>
              <Image
                source={ImageUri.dial}
                resizeMode={'contain'}
                style={{...styleSheet.imageStyle}}
              />
              <Image
                source={ImageUri.table1}
                resizeMode={'contain'}
                style={{...styleSheet.imageStyle}}
              />
              <Image
                source={ImageUri.table2}
                resizeMode={'contain'}
                style={{...styleSheet.imageStyle}}
              />
            </View>
          </ScrollView>
          {/* <RoundButton
            backgroundColor={colors.secondaryBackGround}
            clickable={true}
            onPress={() => {
              Navigation.goToBack(props.navigation);
            }}
            textColor={colors.primaryText}
            borderColor={colors.secondaryBackGround}
            style={{...styleSheet.btn}}
            buttonWidth={'40'}
            text={'Back'}
            btnTextStyle={{...globalStyleSheet.titleMedium12}}
            buttonHeight={'6'}
          /> */}
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
