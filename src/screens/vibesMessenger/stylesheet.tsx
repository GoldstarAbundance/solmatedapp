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
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
  },

  sendNftContainer: {
    width: WP('90%'),
    ...globalStyleSheet.titleMedium12,
  },
  sendBtn: {
    width: WP('18%'),
    height: '100%',
    position: 'absolute',
    right: 0,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  inputMsg: {
    width: WP('90%'),
    height: '100%',
    borderRadius: 10,
    paddingStart: WP('3%'),
    paddingEnd: WP('18%'),
    ...globalStyleSheet.titleRegular12,
  },
  inputMsgContainer: {
    width: WP('90%'),
    height: HP('6%'),
    borderRadius: 10,
    marginBottom: '5%',
  },

  chatContainer: {
    width: WP('100%'),
    height: '70%',
    marginTop: '15%',
    // paddingTop: HP('10%'),
  },
  sendContainer: {
    width: WP('100%'),
    height: HP('12%'),
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export {styleSheet, globalStyleSheet};
