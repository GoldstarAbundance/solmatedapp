import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as WP,
  heightPercentageToDP as HP,
} from 'react-native-responsive-screen';
import {CustomFont} from '../../config';
import {globalStyleSheet} from '../../style/style';
const styleSheet = StyleSheet.create({
  detailContainer: {
    height: HP('100%'),
    width: WP('100%'),
  },
  container: {
    alignContent: 'center',
    alignItems: 'center',
  },
  header: {
    marginLeft: WP('6%'),
    marginTop: HP('5%'),
  },
  title: {
    ...globalStyleSheet.titleBold32,
  },
  description: {
    ...globalStyleSheet.titleRegular16,
  },
  basicInformation: {
    height: HP('35%'),
  },
  inputContainer: {
    height: HP('7%'),
  },
  astrologyForm: {
    height: HP('35%'),
  },
  buttonView: {
    height: HP('6%'),
    width: WP('90%'),
    borderRadius: 50,
    marginTop: HP('3%'),
    marginBottom: HP('3%'),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  upperButton: {
    width: WP('30%'),
    height: HP('6%'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    alignContent: 'center',
  },

  btn: {
    width: WP('40%'),
    height: HP('6%'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: HP('3%'),
  },

  buttonText: {
    ...globalStyleSheet.titleRegular9,
   
  },
  
  buttonTextEarn: {
    ...globalStyleSheet.titleRegular9,
  
  },
  earnSol: {
    height: HP('35%'),
  },
  connectButton: {
    height: HP('7%'),
    width: WP('90%'),
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: HP('1.5%'),
    marginTop: HP('1.5%'),
    flexDirection: 'row',
  },
  nextButton: {
    width: WP('90%'),
    height: HP('6%'),
    borderRadius: HP('3%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  connectButtonText: {
    ...globalStyleSheet.titleMedium14,
    // marginRight: WP('20%'),
    marginStart: WP('10%'),
  },
  bottomContainer: {
    flexDirection: 'row',
    width: WP('100%'),
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: HP('2%'),
  },
  bottomline: {
    ...globalStyleSheet.titleMedium11,
    textAlign: 'center',
    marginTop: HP('12%'),
  },
  buttonIcon: {
    width: WP('7%'),
    height: HP('4%'),
    marginEnd: WP('2%'),
    marginLeft: WP('12%'),
  },
});
export {styleSheet, globalStyleSheet};
