import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import useTheme from '../../hooks/useTheme';

import {globalStyleSheet, styleSheet} from './stylesheet';
import {useState} from 'react';
import {Enum, ImageUri} from '../../config';
import {SimpleInput} from '../../components/InputFields';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Navigation} from '../../navigation';
import {
  widthPercentageToDP as WP,
  heightPercentageToDP as HP,
} from 'react-native-responsive-screen';
export const Register = (props: any) => {
  const {colors} = useTheme();
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [confrimEmail, setConfrimEmail] = useState('');
  const [DOB, setDOB] = useState('');
  const [timeOfBirth, setTimeOfBirth] = useState('');
  const [birthLocation, setBirthLocation] = useState('');
  const [currentStep, setCurrentStep] = useState(
    Enum.RegisterStep.BasicInformation,
  );
  const moveToNext = () => {
    switch (currentStep) {
      case Enum.RegisterStep.BasicInformation:
        setCurrentStep(Enum.RegisterStep.AstrologyForm);
        break;
      case Enum.RegisterStep.AstrologyForm:
        setCurrentStep(Enum.RegisterStep.EarnSOL);
        break;
      case Enum.RegisterStep.EarnSOL:
        Navigation.goToMain(props.navigation);
        break;
    }
  };
  const moveToBackStep = () => {
    switch (currentStep) {
      case Enum.RegisterStep.AstrologyForm:
        setCurrentStep(Enum.RegisterStep.BasicInformation);
        break;
      case Enum.RegisterStep.EarnSOL:
        setCurrentStep(Enum.RegisterStep.AstrologyForm);
        break;
    }
  };
  return (
    <>
      <View
        style={{
          ...globalStyleSheet.mainContainer,
          backgroundColor: colors.primaryBackground,
        }}>
        <KeyboardAwareScrollView
          contentContainerStyle={{...styleSheet.detailContainer}}>
          <View style={{...styleSheet.header}}>
            {currentStep == Enum.RegisterStep.BasicInformation ? (
              <Text style={{...styleSheet.title, color: colors.primaryText}}>
                Hello SolMate!
              </Text>
            ) : (
              <Text style={{...styleSheet.title, color: colors.primaryText}}>
                Hey SolMate!
              </Text>
            )}

            {currentStep == Enum.RegisterStep.EarnSOL ? (
              <Text
                style={{...styleSheet.description, color: colors.primaryText}}>
                Connect your accounts
              </Text>
            ) : (
              <Text
                style={{...styleSheet.description, color: colors.primaryText}}>
                Register to get started
              </Text>
            )}
          </View>
          <View style={{...styleSheet.container}}>
            <View
              style={{
                ...styleSheet.buttonView,
                backgroundColor: colors.allTabsBackground,
              }}>
              <TouchableOpacity
                onPress={() => {
                  setCurrentStep(Enum.RegisterStep.BasicInformation);
                }}
                activeOpacity={1}
                style={{
                  ...styleSheet.upperButton,
                  width: WP('35%'),
                  borderBottomRightRadius:
                    currentStep == Enum.RegisterStep.AstrologyForm
                      ? 0
                      : currentStep == Enum.RegisterStep.EarnSOL
                      ? 0
                      : 50,
                  borderTopRightRadius:
                    currentStep == Enum.RegisterStep.AstrologyForm
                      ? 0
                      : currentStep == Enum.RegisterStep.EarnSOL
                      ? 0
                      : 50,
                  backgroundColor:
                    currentStep == Enum.RegisterStep.BasicInformation
                      ? colors.secondaryOne
                      : colors.secondaryOne,
                }}>
                <Text
                  style={{...styleSheet.buttonText, color: colors.primaryText}}>
                  Basic Information
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => {
                  setCurrentStep(Enum.RegisterStep.AstrologyForm);
                }}
                style={{
                  ...styleSheet.upperButton,
                  width: WP('30%'),
                  borderBottomLeftRadius:
                    currentStep == Enum.RegisterStep.AstrologyForm
                      ? 0
                      : currentStep == Enum.RegisterStep.EarnSOL
                      ? 0
                      : 50,
                  borderTopLeftRadius:
                    currentStep == Enum.RegisterStep.AstrologyForm
                      ? 0
                      : currentStep == Enum.RegisterStep.EarnSOL
                      ? 0
                      : 50,
                  borderBottomRightRadius:
                    currentStep == Enum.RegisterStep.EarnSOL ? 0 : 50,
                  borderTopRightRadius:
                    currentStep == Enum.RegisterStep.EarnSOL ? 0 : 50,
                  backgroundColor:
                    currentStep == Enum.RegisterStep.AstrologyForm
                      ? colors.secondaryOne
                      : currentStep == Enum.RegisterStep.EarnSOL
                      ? colors.secondaryOne
                      : currentStep == Enum.RegisterStep.BasicInformation
                      ? colors.allTabsBackground
                      : colors.allTabsBackground,
                }}>
                <Text
                  style={{...styleSheet.buttonText, color: colors.primaryText}}>
                  Astrology Form
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => {
                  setCurrentStep(Enum.RegisterStep.EarnSOL);
                }}
                style={{
                  ...styleSheet.upperButton,
                  width: WP('25%'),
                  borderBottomLeftRadius:
                    currentStep == Enum.RegisterStep.EarnSOL ? 0 : 20,
                  borderTopLeftRadius:
                    currentStep == Enum.RegisterStep.EarnSOL ? 0 : 20,
                  backgroundColor:
                    currentStep == Enum.RegisterStep.EarnSOL
                      ? colors.secondaryOne
                      : colors.allTabsBackground,
                }}>
                <Text
                  style={{...styleSheet.buttonText, color: colors.primaryText}}>
                  Earn SOL
                </Text>
              </TouchableOpacity>
            </View>
            {currentStep == Enum.RegisterStep.BasicInformation ? (
              <View style={{...styleSheet.basicInformation}}>
                <SimpleInput
                  onChangeText={(text: string) => {
                    setName(text);
                  }}
                  value={name}
                  keyboardType="default"
                  style={{...styleSheet.inputContainer}}
                  placeholderText="Name"
                />
                <SimpleInput
                  onChangeText={(text: string) => {
                    setGender(text);
                  }}
                  value={gender}
                  keyboardType="default"
                  style={{...styleSheet.inputContainer}}
                  placeholderText="Gender"
                />
                <SimpleInput
                  onChangeText={(text: string) => {
                    setEmail(text);
                  }}
                  value={email}
                  keyboardType="default"
                  style={{...styleSheet.inputContainer}}
                  placeholderText="Email"
                />
                <SimpleInput
                  onChangeText={(text: string) => {
                    setConfrimEmail(text);
                  }}
                  value={confrimEmail}
                  keyboardType="default"
                  style={{...styleSheet.inputContainer}}
                  placeholderText="Confirm Email"
                />
              </View>
            ) : null}
            {currentStep == Enum.RegisterStep.AstrologyForm ? (
              <View style={{...styleSheet.astrologyForm}}>
                <SimpleInput
                  onChangeText={(text: string) => {
                    setDOB(text);
                  }}
                  value={DOB}
                  keyboardType="default"
                  style={{...styleSheet.inputContainer}}
                  placeholderText="D.O.B"
                />
                <SimpleInput
                  onChangeText={(text: string) => {
                    setTimeOfBirth(text);
                  }}
                  value={timeOfBirth}
                  keyboardType="default"
                  style={{...styleSheet.inputContainer}}
                  placeholderText="Time of Birth"
                />
                <SimpleInput
                  onChangeText={(text: string) => {
                    setBirthLocation(text);
                  }}
                  value={birthLocation}
                  keyboardType="default"
                  style={{...styleSheet.inputContainer}}
                  placeholderText="Birth Location"
                />
              </View>
            ) : null}
            {currentStep == Enum.RegisterStep.EarnSOL ? (
              <View style={{...styleSheet.earnSol}}>
                <TouchableOpacity
                  onPress={() => {
                    Navigation.goToMain(props.navigation);
                  }}
                  style={{
                    ...styleSheet.connectButton,
                    backgroundColor: colors.primaryText,
                  }}>
                  <Image
                    source={ImageUri.discordIcon}
                    resizeMode="contain"
                    style={{...styleSheet.buttonIcon}}
                  />
                  <Text
                    style={{
                      ...styleSheet.connectButtonText,
                      color: colors.primaryOne,
                    }}>
                    Connect Discord
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    Navigation.goToMain(props.navigation);
                  }}
                  style={{
                    ...styleSheet.connectButton,
                    backgroundColor: colors.primaryText,
                  }}>
                  <Image
                    source={ImageUri.twitterIcon}
                    resizeMode="contain"
                    style={{...styleSheet.buttonIcon}}
                  />
                  <Text
                    style={{
                      ...styleSheet.connectButtonText,
                      color: colors.primaryOne,
                    }}>
                    Connect Twitter
                  </Text>
                </TouchableOpacity>
              </View>
            ) : null}
          </View>
          <View style={{...styleSheet.bottomContainer}}>
            {currentStep == Enum.RegisterStep.BasicInformation ? (
              <TouchableOpacity
                onPress={() => {
                  moveToNext();
                }}
                style={{
                  ...styleSheet.nextButton,
                  backgroundColor: colors.secondaryOne,
                }}>
                <Text
                  style={{...styleSheet.buttonText, color: colors.primaryText}}>
                  Next Step
                </Text>
              </TouchableOpacity>
            ) : (
              <>
                <TouchableOpacity
                  onPress={() => {
                    moveToBackStep();
                  }}
                  style={{
                    ...styleSheet.btn,
                    backgroundColor: colors.allTabsBackground,
                  }}>
                  <Text
                    style={{
                      ...styleSheet.buttonText,
                      color: colors.primaryText,
                    }}>
                    Back
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    moveToNext();
                  }}
                  style={{
                    ...styleSheet.btn,
                    backgroundColor: colors.secondaryOne,
                  }}>
                  <Text
                    style={{
                      ...styleSheet.buttonText,
                      color: colors.primaryText,
                    }}>
                    Next
                  </Text>
                </TouchableOpacity>
              </>
            )}
          </View>
          <Text style={{...styleSheet.bottomline, color: colors.secondaryText}}>
            Already have an account?
            <Text style={{color: colors.secondaryOne}}>{` Login Now`}</Text>
          </Text>
        </KeyboardAwareScrollView>
      </View>
    </>
  );
};
