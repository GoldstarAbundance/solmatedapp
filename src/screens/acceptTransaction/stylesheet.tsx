import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as WP,
  heightPercentageToDP as HP,
} from 'react-native-responsive-screen';
import {CustomFont} from '../../config';

import {globalStyleSheet} from '../../style/style';

const styleSheet = StyleSheet.create({
  container: {
    height: HP('100%'),
    width: WP('100%'),
    flexDirection: 'column',
    alignItems: 'center',
  },
  appDetailLogo: {
    width: WP('100%'),
    textAlign: 'center',
    marginTop: HP('1.5%'),
  },
  signMsgSol: {
    width: WP('90%'),
    height: HP('4%'),
    flexDirection: 'row',
    alignItems: 'center',
    paddingStart: WP('5%'),
    paddingEnd: WP('5%'),
  },
  signMsgDetail: {
    width: WP('90%'),
    flexDirection: 'row',
    alignItems: 'center',
    paddingStart: WP('5%'),
    paddingEnd: WP('4%'),
    marginTop: HP('2%'),
  },

  signMsg: {
    width: WP('90%'),
    height: HP('5%'),
    flexDirection: 'row',
    alignItems: 'center',
    paddingStart: WP('5%'),
    borderBottomWidth: 0.5,
  },
  appDetailId: {
    width: WP('100%'),
    textAlign: 'center',
    marginTop: HP('0.5%'),
  },

  iconApp: {
    height: HP('10%'),
    width: WP('20%'),
  },
  appDetail: {
    width: WP('100%'),
    height: HP('20%'),
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: HP('5%'),
  },
  containerDetail: {
    width: WP('90%'),
    height: HP('40%'),
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'yellow',
    marginTop: HP('3%'),
    borderRadius: 10,
  },
  btnContainer: {
    width: WP('90%'),
    height: HP('10%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: HP('3%'),
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
