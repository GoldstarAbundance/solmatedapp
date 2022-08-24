import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as WP,
  heightPercentageToDP as HP,
} from 'react-native-responsive-screen';
import {CustomFont} from '../../config';

import {globalStyleSheet} from '../../style/style';

const styleSheet = StyleSheet.create({
  container: {
    width: WP('100%'),
    height: HP('100%'),
    flexDirection: 'column',
    alignItems: 'center',
  },
  nearByContainer: {
    width: WP('90%'),
    height: HP('4%'),
    marginEnd: WP('5%'),
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  dummySpace: {
    marginTop: HP('2%'),
  },
  flagIcon: {
    width: WP('15%'),
    height: HP('5%'),
  },
  profileOptionContainer: {
    width: WP('90%'),
    height: HP('14%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  mainTitleOption: {
    height: HP('8%'),
    width: WP('27%'),
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradientText: {
    width: WP('27%'),
    height: HP('7%'),
  },
  gradientTextStyle: {
    textAlign: 'center',
    ...globalStyleSheet.titleBold38,
  },

  profileOption: {
    width: WP('27%'),
    height: HP('12%'),
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },

  orText: {
    ...globalStyleSheet.titleBold14,
    marginTop: HP('1%'),
  },
  uploadIcon: {
    width: WP('7%'),
    height: HP('2.5%'),
  },
  uploadContainer: {
    width: WP('90%'),
    height: HP('5%'),
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: HP('2%'),
    paddingStart: WP('5%'),
    paddingEnd: WP('5%'),
  },
  profileTitle: {
    width: WP('100%'),
    ...globalStyleSheet.titleBold18,
    marginTop: HP('2%'),
    textAlign: 'center',
  },
  profileName: {
    ...globalStyleSheet.titleBold12,
    marginTop: HP('1%'),
  },

  profileIcon: {
    width: HP('10%'),
    height: HP('10%'),
    marginTop: HP('2%'),
    borderRadius: HP('10%'),
  },
  saveContainer: {
    width: WP('40%'),
    height: HP('4%'),
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: HP('2%'),
  },
  nearbyTxt: {
    ...globalStyleSheet.titleRegular12,
    marginEnd: WP('3%'),
  },
  botomBtnText: {
    ...globalStyleSheet.titleMedium12,
    marginStart: WP('5%'),
  },
  bottomBtn: {
    width: WP('90%'),
    flexDirection: 'row',
    height: HP('6%'),
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: HP('2%'),
  },
  completedContainer: {
    width: WP('90%'),
    flexDirection: 'column',
    height: HP('8%'),
    borderRadius: 20,
    justifyContent: 'center',
    paddingStart: WP('5%'),
    marginTop: HP('2%'),
    marginBottom: HP('2%'),
  },
  forwardIcon: {
    width: WP('4%'),
    height: HP('2%'),
  },
  loadingIcon: {
    width: WP('65%'),
    height: HP('2%'),
  },

  forwardView: {
    width: HP('4%'),
    height: HP('4%'),
    borderRadius: 50,
    marginEnd: WP('5%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  completedView: {
    width: WP('80%'),
    height: HP('3%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export {styleSheet, globalStyleSheet};
