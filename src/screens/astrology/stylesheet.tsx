import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as WP,
  heightPercentageToDP as HP,
} from 'react-native-responsive-screen';
import {CustomFont} from '../../config';

import {globalStyleSheet} from '../../style/style';

const styleSheet = StyleSheet.create({
  container: {
    height: '100%',
    width: WP('100%'),
    flexDirection: 'column',
    alignItems: 'center',
  },
  profileTitle: {
    width: WP('100%'),
    ...globalStyleSheet.titleBold18,
    marginTop: HP('2%'),
    textAlign: 'center',
  },
  secondTitle: {
    width: WP('100%'),
    ...globalStyleSheet.titleBold12,
    marginTop: HP('1%'),
    textAlign: 'center',
  },
  imageView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: HP('3%'),
  },
  imageStyle: {
    marginBottom: HP('3%'),
  },
  btn: {
    width: WP('40%'),
    height: HP('6%'),
    elevation: 2,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
});

export {styleSheet, globalStyleSheet};
