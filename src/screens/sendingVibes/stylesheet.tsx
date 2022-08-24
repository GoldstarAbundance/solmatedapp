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
    width: WP('100%'),
    height: HP('7%'),
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    marginTop: HP('12%'),
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
  },
  flatlist: {
    height: HP('30%'),
    width: WP('100%'),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  sendVibeBtn: {
    width: WP('50%'),
    height: HP('9%'),
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: HP('2%'),
  },

  sendIcon: {
    marginTop: HP('1%'),
    alignSelf: 'center',
  },

  centerCircle: {
    width: WP('60%'),
    height: HP('35%'),
  },
  textView: {
    width: WP('70%'),
    // height: HP('6%'),
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: HP('15%'),
    left: WP('15%'),
    right: WP('15%'),
    zIndex: 2,
    paddingStart: WP('4%'),
    paddingEnd: WP('4%'),
    paddingTop: HP('2%'),
    paddingBottom: HP('2%'),
    opacity: 0.5,
  },
  bottomContainer: {
    width: WP('100%'),
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: HP('10%'),
  },
});

export {styleSheet, globalStyleSheet};
