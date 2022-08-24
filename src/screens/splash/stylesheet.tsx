import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as WP,
  heightPercentageToDP as HP,
} from 'react-native-responsive-screen';

import {globalStyleSheet} from '../../style/style';

const styleSheet = StyleSheet.create({
  container: {
    width: WP('100%'),
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoIcon: {
    width: HP('25%'),
    height: HP('25%'),
  },
  solMateIcon: {
    height: HP('7%'),
    width: WP('40%'),
    marginTop: HP('1%'),
    marginBottom: HP('10%'),
  },
  title: {
    ...globalStyleSheet.titleBold24,
    marginTop: HP('2%'),
    marginBottom: HP('10%'),
  },
});

export {styleSheet, globalStyleSheet};
