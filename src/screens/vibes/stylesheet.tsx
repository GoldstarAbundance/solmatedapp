import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as WP,
  heightPercentageToDP as HP,
} from 'react-native-responsive-screen';
import {CustomFont} from '../../config';

import {globalStyleSheet} from '../../style/style';

const styleSheet = StyleSheet.create({
  titleTxtGr: {
    width: WP('35%'),
    height: HP('4%'),
    alignItems: 'center',
    justifyContent: 'center',
  },

  tabContainer: {
    width: WP('36%'),
    height: 20,
    borderRadius: 20,
    marginTop: HP('1.5%'),
    borderWidth: 0.5,
    flexDirection: 'row',
  },
  tab: {
    width: WP('12%'),
    height: 20,
    borderRadius: 20,
  },

  removeSongContainer: {
    ...globalStyleSheet.titleMedium10,
    alignSelf: 'flex-end',
  },
  containerOnSelection: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: WP('90%'),
    marginTop: HP('0.5%'),
  },

  selectedSong: {
    width: WP('88%'),
    height: HP('8%'),
    justifyContent: 'center',
    alignItems: 'center',
  },

  selectedSongContainer: {
    width: WP('90%'),
    height: HP('9%'),
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: HP('0.5%'),
    marginTop: HP('1%'),
  },
  titlemainGr: {
    width: WP('100%'),
    height: HP('6%'),
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    marginTop: HP('4%'),
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
    ...globalStyleSheet.titleRegular12,
    marginTop: HP('0.5%'),
  },
  container: {
    alignItems: 'center',
    marginTop: HP('3%'),
    justifyContent: 'center',
    alignContent: 'center',
    paddingBottom: HP('5%'),
  },
  flatlist: {
    height: HP('28%'),
    width: WP('90%'),
  },
  flatlistPager: {
    height: HP('28%'),
    width: WP('50%'),
  },

  flatlistContainer: {
    width: WP('90%'),
    height: HP('20%'),
    marginStart: WP('5%'),
    alignItems: 'center',
    marginBottom: HP('3%'),
  },
  midImage: {
    width: WP('90%'),
    height: HP('20%'),
  },
  inputText: {
    marginTop: HP('2%'),
    width: WP('70%'),
    height: HP('14%'),
    borderRadius: 15,
    paddingTop: WP('4%'),
    padding: WP('4%'),
    textAlignVertical: 'top',
  },
  sendVibeBtn: {
    width: WP('55%'),
    height: HP('7%'),
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: HP('2%'),
  },
  sendText: {
    ...globalStyleSheet.titleMedium11,
    marginRight: WP('3%'),
  },

  sendIcon: {
    width: HP('5%'),
    height: HP('5%'),
    marginTop: HP('1%'),
    alignSelf: 'center',
  },
});

export {styleSheet, globalStyleSheet};
