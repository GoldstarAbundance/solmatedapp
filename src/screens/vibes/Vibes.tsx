import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  Animated,
  TextInput,
  ImageBackground,
} from 'react-native';
import useTheme from '../../hooks/useTheme';
import {Pager} from '@crowdlinker/react-native-pager';
import {globalStyleSheet, styleSheet} from './stylesheet';
import {ImageUri} from '../../config';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import GRTextTitle from '../../components/GRText/GRTextTitle';
import ConnectAudius from '../../components/Modal/ConnectAudius';
import SelectedSong from '../../components/Modal/SelectedSong';
import Slide from '../../components/ListItem/Slide';
import {Navigation} from '../../navigation';
import Toast from 'react-native-simple-toast';

const colorsVibes = ['#14F195', '#C297F6', '#E9FF5E'];
const flexDirection = ['flex-start', 'center', 'flex-end'];

export const Vibes = (props: any) => {
  const {colors} = useTheme();
  const [message, setMessage] = useState('Love the way you shine. Lets chat! ✨');
  const [connectAudiusVisible, setConnectAudiusVisible] = useState(false);
  const [confirmSoundVisible, setConfirmSoundVisible] = useState(false);
  const [isSongSelect, setIsSongSelect] = useState(false);
  const [currentVibes, setCurrentVibes] = useState(1);
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      useNativeDriver: false,
      duration: 10000,
    }).start();
  }, [fadeAnim]);

  return (
    <View
      style={{
        ...globalStyleSheet.mainContainer,
        backgroundColor: colors.primaryBackground,
      }}>
      <View style={{...styleSheet.header}}>
        <GRTextTitle
          viewStyle={{...styleSheet.titlemainGr}}
          textStyle={{...globalStyleSheet.titleBold28}}
          text={'Create Your Vibe'}
          colorOne={colors.tertiaryOne}
          colorTwo={colors.secondaryOne}
        />
      </View>

      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View style={{...styleSheet.container}}>
          <Text style={{...styleSheet.detailText, color: colors.primaryText}}>
            Select a colour orb
          </Text>
          <Text
            style={{
              ...styleSheet.detailMidText,
              color: colorsVibes[currentVibes],
            }}>
            to curate your mood
          </Text>

          <View
            style={[
              {
                ...styleSheet.tabContainer,
                borderColor: colorsVibes[currentVibes],
              },
              currentVibes == 0
                ? {justifyContent: 'flex-start'}
                : currentVibes == 1
                ? {justifyContent: 'center'}
                : {
                    justifyContent: 'flex-end',
                  },
            ]}>
            <View // Special animatable View
              style={{
                ...styleSheet.tab,
                backgroundColor: colorsVibes[currentVibes],
              }}></View>
          </View>

          <View style={{...styleSheet.flatlist}}>
            <Pager
              initialIndex={currentVibes}
              style={{...styleSheet.flatlistPager, alignSelf: 'center'}}>
              <Slide
                onPressActive={(vibe: number) => {
                  setCurrentVibes(vibe);
                }}
              />
              <Slide
                onPressActive={(vibe: number) => {
                  setCurrentVibes(vibe);
                }}
              />
              <Slide
                onPressActive={(vibe: number) => {
                  setCurrentVibes(vibe);
                }}
              />
            </Pager>
          </View>
          {/* 
          <Pager initialIndex={2}>
              <VIew
          </Pager>
           */}

          {/* <FlatList
            data={SLIDER_DATA}
            style={{...styleSheet.flatlist}}
            keyExtractor={item => item.key}
            showsHorizontalScrollIndicator={false}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {x: scrollX}}}],
              {
                useNativeDriver: false,
              },
            )}
            pagingEnabled
            horizontal
            decelerationRate={'normal'}
            scrollEventThrottle={16}
            renderItem={({item, index}) => (
              <View style={{...styleSheet.flatlistContainer}}>
                <Image
                  source={item.image}
                  resizeMode="contain"
                  style={{...styleSheet.midImage}}
                />
              </View>
            )}
          /> */}
          {isSongSelect ? (
            <View
              style={{
                ...styleSheet.containerOnSelection,
              }}>
              <Text
                onPress={() => {
                  setIsSongSelect(false);
                }}
                style={{
                  ...styleSheet.removeSongContainer,
                  color: colors.secondaryOne,
                }}>
                change or remove song
              </Text>
              <ImageBackground
                source={ImageUri.selectedSongBg}
                style={{
                  ...styleSheet.selectedSongContainer,
                }}
                resizeMode={'stretch'}>
                <Image
                  source={ImageUri.songSS}
                  style={{...styleSheet.selectedSong}}
                  resizeMode={'stretch'}
                />
              </ImageBackground>
            </View>
          ) : (
            <View
              style={{
                ...styleSheet.containerOnSelection,
              }}>
              <Text
                onPress={() => {
                  setConnectAudiusVisible(true);
                }}
                style={{
                  ...styleSheet.connectAudius,
                  color: colors.secondaryOne,
                }}>
                Connect Audius
              </Text>
              <Text
                style={{
                  ...styleSheet.detailMidText,
                  color: colors.primaryText,
                }}>
                Select a song to send with your vibe.
              </Text>
            </View>
          )}
          <View>
            <TextInput
              returnKeyType="default"
              onChangeText={text => setMessage(text)}
              placeholder="Add a personal message..."
              value={message}
              placeholderTextColor={colors.secondaryText}
              multiline={true}
              style={[
                {
                  ...styleSheet.inputText,
                  backgroundColor: colors.secondaryBackGround,
                  color: colors.secondaryText,
                },
              ]}
              keyboardType={'default'}
            />
          </View>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              message.length > 0
                ? Navigation.goToSendingVibes(props.navigation, message)
                : Toast.show('Please write personal message ...');
            }}
            style={{
              ...styleSheet.sendVibeBtn,
              backgroundColor: colors.secondaryBackGround,
            }}>
            {/* <Text style={{...styleSheet.sendText, color: colors.tertiaryOne}}>
              SEND YOUR VIBE
            </Text> */}

            <GRTextTitle
              viewStyle={{...styleSheet.titleTxtGr}}
              textStyle={{...globalStyleSheet.titleMedium11}}
              text={'SEND YOUR VIBE'}
              colorOne={colors.tertiaryOne}
              colorTwo={colors.secondaryOne}
            />
            <Image
              source={ImageUri.sendVibe}
              resizeMode="contain"
              style={{...styleSheet.sendIcon}}
            />
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>

      <ConnectAudius
        isVisible={connectAudiusVisible}
        onClose={() => {
          setConnectAudiusVisible(false);
          setTimeout(() => {
            setConfirmSoundVisible(true);
          }, 500);
        }}
      />
      <ConnectAudius
        isVisible={connectAudiusVisible}
        onClose={() => {
          setConnectAudiusVisible(false);
          setTimeout(() => {
            setConfirmSoundVisible(true);
          }, 500);
        }}
      />
      <SelectedSong
        isVisible={confirmSoundVisible}
        onClose={() => {
          setConnectAudiusVisible(false);
          setConfirmSoundVisible(false);
          setIsSongSelect(true);
        }}
      />
    </View>
  );
};
