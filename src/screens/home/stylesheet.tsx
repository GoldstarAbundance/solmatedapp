import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as WP,
  heightPercentageToDP as HP,
} from 'react-native-responsive-screen';
import {CustomFont} from '../../config';

import {globalStyleSheet} from '../../style/style';

const styleSheet = StyleSheet.create({
  header: {
    width: WP('90%'),
    height: HP('10%'),
    marginTop: HP('5'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleContainer: {
    width: WP('70%'),
    ...globalStyleSheet.titleMedium16,
  },

  recentlyMatchedColor: {
    width: WP('90%'),
    height: HP('8%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: HP('1%'),
  },
  containerDetail: {
    width: WP('90%'),
    marginTop: HP('0.5%'),
    marginBottom: HP('2%'),
  },
  containerDetailTop: {
    width: WP('90%'),
    marginTop: HP('5%'),
    marginBottom: HP('2%'),
  },
  
  containerBox: {
    width: WP('90%'),
    height: HP('9%'),
    marginTop: HP('1%'),
    borderRadius: 10,
  },
  exploreText: {
    ...globalStyleSheet.titleMedium16,
    marginBottom: HP('2%'),
  },
  containerStrip: {
    width: WP('90%'),
    height: HP('3%'),
    marginTop: HP('1%'),
    borderRadius: 20,
  },

  recentlyMatched: {
    width: WP('90%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: HP('8%'),
  },

  title: {
    ...globalStyleSheet.titleMedium26,
  },
  description: {
    ...globalStyleSheet.titleRegular14,
  },
  profile: {
    width: WP('20%'),
    height: HP('8%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:HP('2%')
  },
  scarpioIcon: {
    width: WP('8%'),
    height: HP('4%'),
  },
  multiColorIcon: {
    width: WP('30%'),
    height: HP('12%'),
  },

  container: {
    width: WP('100%'),
    height: HP('100%'),
    flexDirection: 'column',
    alignItems: 'center',
  },
  userDetial: {
    height: HP('6%'),
    width: WP('50%'),
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});

export {styleSheet, globalStyleSheet};
