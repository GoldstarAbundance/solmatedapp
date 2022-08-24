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
  txtContainer: {
    width: WP('70%'),
  },
  btnContainer: {
    width: WP('50%'),
    height: HP('6%'),
    marginTop: HP('5%'),
    elevation: 2,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  appDetailContainer: {
    height: HP('30%'),
    width: WP('100%'),
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  connectWalletBtn: {
    height: HP('30%'),
    width: WP('100%'),
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomVibeHalf: {
    height: HP('50%'),
    width: WP('100%'),
    flexDirection: 'column',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  solMateIcon: {
    // height: HP('10%'),
    width: WP('70%'),
  },
  halfIcon: {
    height: HP('27%'),
    width: WP('100%'),
    position: 'absolute',
    bottom: HP('0%'),
  },
});

export {styleSheet, globalStyleSheet};
