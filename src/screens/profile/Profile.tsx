import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import useTheme from '../../hooks/useTheme';
import {launchImageLibrary} from 'react-native-image-picker';
import {globalStyleSheet, styleSheet} from './stylesheet';
import {ImageUri} from '../../config';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Navigation} from '../../navigation';
import Toast from 'react-native-simple-toast';
// import ToggleSwitch from 'toggle-switch-react-native';
import Toggle from 'react-native-toggle-element';

import GRTextTitle from '../../components/GRText/GRTextTitle';
export const Profile = (props: any) => {
  const {colors} = useTheme();
  const [imageProfileUri, setimageProfileUri] = useState('');
  const [nearBy, setNearBy] = useState(false);

  const selectProfile = async () => {
    try {
      const result = await launchImageLibrary({mediaType: 'photo'});
      if (result && !result.didCancel && !result.errorCode && result.assets) {
        if (result.assets[0]?.uri) {
          setimageProfileUri(result.assets[0]?.uri);
        } else {
          Toast.show('Try again');
        }
      }
    } catch (error: any) {
      console.log('Error is', error.message);
    }
  };

  return (
    <View
      style={{
        ...globalStyleSheet.mainContainer,
        backgroundColor: colors.primaryBackground,
      }}>
      <Text
        style={{
          ...styleSheet.profileTitle,
          color: colors.primaryText,
        }}>
        Your Profile
      </Text>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{...styleSheet.container}}>
        {imageProfileUri.length > 2 ? (
          <Image
            style={{...styleSheet.profileIcon}}
            source={{uri: imageProfileUri}}
            resizeMode={'stretch'}
          />
        ) : (
          <Image
            style={{...styleSheet.profileIcon}}
            source={ImageUri.profileIcon}
            resizeMode={'contain'}
          />
        )}
        <Text
          style={{
            ...styleSheet.profileName,
            color: colors.secondaryOne,
          }}>
          Rahim
        </Text>
        <View
          style={{
            ...styleSheet.saveContainer,
            backgroundColor: colors.secondaryBackGround,
          }}>
          <Text
            onPress={() => {
              imageProfileUri.length > 2 ? setimageProfileUri('') : null;
            }}
            style={{
              ...globalStyleSheet.titleBold12,
              color: colors.primaryText,
            }}>
            {imageProfileUri.length > 2 ? 'EDIT PROFILE' : 'SAVE PROFILE'}
          </Text>
        </View>
        {imageProfileUri.length > 2 ? (
          <>
            <TouchableOpacity
              onPress={() => {}}
              style={{
                ...styleSheet.completedContainer,
                backgroundColor: colors.secondaryBackGround,
              }}>
              <Text
                style={{
                  ...globalStyleSheet.titleBold16,
                  color: colors.primaryText,
                }}>
                Completed Profile!
              </Text>
              <View
                style={{
                  ...styleSheet.completedView,
                }}>
                <Image
                  style={{...styleSheet.loadingIcon}}
                  source={ImageUri.loading}
                  resizeMode={'contain'}
                />
                <Text
                  style={{
                    ...globalStyleSheet.titleRegular12,
                    color: colors.primaryText,
                  }}>
                  100%
                </Text>
              </View>
            </TouchableOpacity>

            <View
              style={{
                ...styleSheet.nearByContainer,
              }}>
              <Text
                style={{
                  ...styleSheet.nearbyTxt,
                  color: colors.primaryText,
                }}>
                Nearby
              </Text>

              <Toggle
                trackBarStyle={{height: 25, width: 50}}
                trackBar={{
                  height: 25,
                  width: 80,
                  borderActiveColor: colors.tertiaryOne,
                  borderInActiveColor: colors.tertiaryOne,
                  borderWidth: 1,
                  activeBackgroundColor: colors.secondaryBackGround,
                  inActiveBackgroundColor: colors.secondaryBackGround,
                }}
                thumbStyle={{
                  height: 25,
                  width: 25,
                }}
                thumbActiveComponent={
                  <View
                    style={{
                      alignSelf: 'center',
                      alignItems: 'center',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      height: 25,
                      width: 30,
                      borderRadius: 25,
                      backgroundColor: colors.tertiaryOne,
                    }}>
                    <Text
                      style={{
                        ...globalStyleSheet.titleMedium10,
                      }}>
                      Off
                    </Text>
                  </View>
                }
                thumbInActiveComponent={
                  <View
                    style={{
                      alignSelf: 'center',
                      alignItems: 'center',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      height: 25,
                      width: 30,
                      borderRadius: 25,
                      backgroundColor: colors.tertiaryOne,
                    }}>
                    <Text
                      style={{
                        ...globalStyleSheet.titleMedium10,
                      }}>
                      On
                    </Text>
                  </View>
                }
                value={nearBy}
                onPress={() => {
                  setNearBy(!nearBy);
                }}
              />
            </View>
          </>
        ) : (
          <>
            <TouchableOpacity
              onPress={() => {
                selectProfile();
              }}
              activeOpacity={0.7}
              style={{
                ...styleSheet.uploadContainer,
                backgroundColor: colors.secondaryBackGround,
              }}>
              <Text
                style={{
                  ...globalStyleSheet.titleBold12,
                  color: colors.primaryText,
                }}>
                Upload Profile Image
              </Text>
              <Image
                style={{...styleSheet.uploadIcon}}
                source={ImageUri.uploadIcon}
                resizeMode={'contain'}
              />
            </TouchableOpacity>
            <Text
              style={{
                ...styleSheet.orText,
                color: colors.secondaryOne,
              }}>
              OR
            </Text>
            <TouchableOpacity
              onPress={() => {
                selectProfile();
              }}
              activeOpacity={0.7}
              style={{
                ...styleSheet.uploadContainer,
                backgroundColor: colors.secondaryBackGround,
              }}>
              <Text
                style={{
                  ...globalStyleSheet.titleBold12,
                  color: colors.primaryText,
                }}>
                Connect NFT Avatar
              </Text>
              <Image
                style={{...styleSheet.uploadIcon}}
                source={ImageUri.uploadIcon}
                resizeMode={'contain'}
              />
            </TouchableOpacity>
          </>
        )}
        <View style={{...styleSheet.dummySpace}} />
        <View
          style={{
            ...styleSheet.profileOptionContainer,
          }}>
          <View
            style={{
              ...styleSheet.profileOption,
              backgroundColor: colors.secondaryBackGround,
            }}>
            <Text
              style={{
                ...globalStyleSheet.titleRegular11,
                color: colors.primaryText,
              }}>
              Age
            </Text>

            <View
              style={{
                ...styleSheet.mainTitleOption,
              }}>
              <GRTextTitle
                viewStyle={{...styleSheet.gradientText}}
                textStyle={{...styleSheet.gradientTextStyle}}
                text={'30'}
                colorOne={colors.tertiaryOne}
                colorTwo={colors.secondaryOne}
              />
            </View>
          </View>

          <View
            style={{
              ...styleSheet.profileOption,
              backgroundColor: colors.secondaryBackGround,
            }}>
            <Text
              style={{
                ...globalStyleSheet.titleRegular11,
                color: colors.primaryText,
              }}>
              Gender
            </Text>
            <View
              style={{
                ...styleSheet.mainTitleOption,
              }}>
              <GRTextTitle
                viewStyle={{...styleSheet.gradientText}}
                textStyle={{...styleSheet.gradientTextStyle}}
                text={'M'}
                colorOne={colors.tertiaryOne}
                colorTwo={colors.secondaryOne}
              />
            </View>
          </View>
          <View
            style={{
              ...styleSheet.profileOption,
              backgroundColor: colors.secondaryBackGround,
            }}>
            <Text
              style={{
                ...globalStyleSheet.titleRegular11,
                color: colors.primaryText,
              }}>
              Location
            </Text>
            <View
              style={{
                ...styleSheet.mainTitleOption,
              }}>
              <Image
                style={{...styleSheet.flagIcon}}
                source={ImageUri.flagIcon}
                resizeMode={'contain'}
              />
              <Text
                style={{
                  ...globalStyleSheet.titleRegular10,
                  color: colors.tertiaryOne,
                }}>
                Costa Rica
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            ...styleSheet.profileOptionContainer,
          }}>
          <View
            style={{
              ...styleSheet.profileOption,
              backgroundColor: colors.secondaryBackGround,
            }}>
            <Text
              style={{
                ...globalStyleSheet.titleRegular11,
                color: colors.primaryText,
              }}>
              Sun
            </Text>
            <View
              style={{
                ...styleSheet.mainTitleOption,
              }}>
              <Text
                style={{
                  ...globalStyleSheet.titleMedium12,
                  color: colors.tertiaryOne,
                }}>
                Scorpio
              </Text>
            </View>
          </View>

          <View
            style={{
              ...styleSheet.profileOption,
              backgroundColor: colors.secondaryBackGround,
            }}>
            <Text
              style={{
                ...globalStyleSheet.titleRegular11,
                color: colors.primaryText,
              }}>
              Moon
            </Text>
            <View
              style={{
                ...styleSheet.mainTitleOption,
              }}>
              <Text
                style={{
                  ...globalStyleSheet.titleMedium12,
                  color: colors.tertiaryOne,
                }}>
                Cancer
              </Text>
            </View>
          </View>
          <View
            style={{
              ...styleSheet.profileOption,
              backgroundColor: colors.secondaryBackGround,
            }}>
            <Text
              style={{
                ...globalStyleSheet.titleRegular11,
                color: colors.primaryText,
              }}>
              Ascendant
            </Text>
            <View
              style={{
                ...styleSheet.mainTitleOption,
              }}>
              <Text
                style={{
                  ...globalStyleSheet.titleMedium12,
                  color: colors.tertiaryOne,
                }}>
                Saggitarius
              </Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={{
            ...styleSheet.bottomBtn,
            backgroundColor: colors.secondaryBackGround,
          }}
          onPress={() => {
            Navigation.goToAstrology(props.navigation);
          }}>
          <Text style={{...styleSheet.botomBtnText, color: colors.primaryText}}>
            View Full Astrology Chart
          </Text>
          <View
            style={{
              ...styleSheet.forwardView,
              backgroundColor: colors.tertiaryText,
            }}>
            <Image
              style={{...styleSheet.forwardIcon,tintColor:colors.primaryOne}}
              source={ImageUri.forwardIcon}
              resizeMode={'contain'}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {}}
          style={{
            ...styleSheet.bottomBtn,
            backgroundColor: colors.secondaryBackGround,
          }}>
          <Text style={{...styleSheet.botomBtnText, color: colors.primaryText}}>
            View Compatiable Matches
          </Text>
          <View
            style={{
              ...styleSheet.forwardView,
              backgroundColor: colors.secondaryOne,
            }}>
            <Image
              style={{...styleSheet.forwardIcon,tintColor:colors.primaryOne}}
              source={ImageUri.forwardIcon}
              resizeMode={'contain'}
            />
          </View>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </View>
  );
};
