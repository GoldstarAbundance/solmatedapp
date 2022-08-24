import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as WP,
  heightPercentageToDP as HP,
} from 'react-native-responsive-screen';
import {CustomFont} from '../../config';

import {globalStyleSheet} from '../../style/style';

const styleSheet = StyleSheet.create({
  titleTxtGr: {
    width: WP('30%'),
    height: HP('4%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  titlemainGr: {
    width: WP('50%'),
    height: HP('7%'),
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    marginTop: HP('10%'),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    ...globalStyleSheet.titleBold24,
    textAlign: 'center',
  },
  connectAudius: {
    ...globalStyleSheet.titleMedium14,

    textAlign: 'center',
    marginTop: HP('1%'),
  },
  detailText: {
    ...globalStyleSheet.titleMedium14,
    textAlign: 'center',
  },
  detailMidText: {
    ...globalStyleSheet.titleMedium12,
    marginTop: HP('1%'),
  },
  container: {
    alignItems: 'center',
    marginTop: HP('3%'),
    justifyContent: 'center',
    alignContent: 'center',
    height: HP('44%'),
    width: WP('100%'),
  },
  flatlist: {
    height: HP('44%'),
    width: WP('100%'),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },

  sendVibeBtn: {
    width: HP('10%'),
    height: HP('10%'),
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  sendIcon: {
    marginTop: HP('1%'),
    alignSelf: 'center',
  },

  centerCircle: {
    height: HP('44%'),
    width: WP('100%'),
  },
  textView: {
    width: WP('70%'),
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
    paddingStart: WP('1%'),
    paddingEnd: WP('1%'),
    paddingTop: HP('2%'),
    paddingBottom: HP('2%'),
  },
  bottomContainer: {
    width: WP('100%'),
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: HP('10%'),
    justifyContent: 'space-around',
  },
  btnText: {
    ...globalStyleSheet.titleMedium14,
  },
});

export {styleSheet, globalStyleSheet};
