import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as HP,
  widthPercentageToDP as WP,
} from 'react-native-responsive-screen';
import {CustomFont} from '../config';
export const globalStyleSheet = StyleSheet.create({
  mainContainer: {
    flex: 1,
    height: HP('100%'),
  },

  titleBold12: {
    fontFamily: CustomFont.FONT_FAMILIES.FONT_BOLD,
    fontSize: CustomFont.FONT_SIZE.b_12,
  },
  titleBold14: {
    fontFamily: CustomFont.FONT_FAMILIES.FONT_BOLD,
    fontSize: CustomFont.FONT_SIZE.b_14,
  },
  titleBold16: {
    fontFamily: CustomFont.FONT_FAMILIES.FONT_BOLD,
    fontSize: CustomFont.FONT_SIZE.h_16,
  },

  titleBold11: {
    fontFamily: CustomFont.FONT_FAMILIES.FONT_BOLD,
    fontSize: CustomFont.FONT_SIZE.b_11,
  },

  titleBold18: {
    fontFamily: CustomFont.FONT_FAMILIES.FONT_BOLD,
    fontSize: CustomFont.FONT_SIZE.h_18,
  },
  titleBold10: {
    fontFamily: CustomFont.FONT_FAMILIES.FONT_BOLD,
    fontSize: CustomFont.FONT_SIZE.b_10,
  },
  titleBold24: {
    fontFamily: CustomFont.FONT_FAMILIES.FONT_BOLD,
    fontSize: CustomFont.FONT_SIZE.h_24,
  },
  titleBold28: {
    fontFamily: CustomFont.FONT_FAMILIES.FONT_BOLD,
    fontSize: CustomFont.FONT_SIZE.h_28,
  },

  titleBold32: {
    fontFamily: CustomFont.FONT_FAMILIES.FONT_BOLD,
    fontSize: CustomFont.FONT_SIZE.h_32,
  },
  titleBold35: {
    fontFamily: CustomFont.FONT_FAMILIES.FONT_BOLD,
    fontSize: CustomFont.FONT_SIZE.h_35,
  },
  titleBold38: {
    fontFamily: CustomFont.FONT_FAMILIES.FONT_BOLD,
    fontSize: CustomFont.FONT_SIZE.h_38,
  },

  titleMedium32: {
    fontFamily: CustomFont.FONT_FAMILIES.FONT_MEDIUM,
    fontSize: CustomFont.FONT_SIZE.h_32,
  },

  titleMedium10: {
    fontFamily: CustomFont.FONT_FAMILIES.FONT_MEDIUM,
    fontSize: CustomFont.FONT_SIZE.b_10,
  },

  titleMedium8: {
    fontFamily: CustomFont.FONT_FAMILIES.FONT_MEDIUM,
    fontSize: CustomFont.FONT_SIZE.b_8,
  },

  titleMedium14: {
    fontFamily: CustomFont.FONT_FAMILIES.FONT_MEDIUM,
    fontSize: CustomFont.FONT_SIZE.b_14,
  },
  titleMedium13: {
    fontFamily: CustomFont.FONT_FAMILIES.FONT_MEDIUM,
    fontSize: CustomFont.FONT_SIZE.b_13,
  },

  titleMedium16: {
    fontFamily: CustomFont.FONT_FAMILIES.FONT_MEDIUM,
    fontSize: CustomFont.FONT_SIZE.h_16,
  },
  titleMedium20: {
    fontFamily: CustomFont.FONT_FAMILIES.FONT_MEDIUM,
    fontSize: CustomFont.FONT_SIZE.h_20,
  },

  titleMedium26: {
    fontFamily: CustomFont.FONT_FAMILIES.FONT_MEDIUM,
    fontSize: CustomFont.FONT_SIZE.h_26,
  },

  titleRegular14: {
    fontFamily: CustomFont.FONT_FAMILIES.FONT_REGULAR,
    fontSize: CustomFont.FONT_SIZE.b_14,
  },

  titleMedium11: {
    fontFamily: CustomFont.FONT_FAMILIES.FONT_MEDIUM,
    fontSize: CustomFont.FONT_SIZE.b_11,
  },

  titleRegular12: {
    fontFamily: CustomFont.FONT_FAMILIES.FONT_REGULAR,
    fontSize: CustomFont.FONT_SIZE.b_12,
  },
  titleRegular16: {
    fontFamily: CustomFont.FONT_FAMILIES.FONT_REGULAR,
    fontSize: CustomFont.FONT_SIZE.h_16,
  },
  titleRegular18: {
    fontFamily: CustomFont.FONT_FAMILIES.FONT_REGULAR,
    fontSize: CustomFont.FONT_SIZE.h_18,
  },

  titleRegular11: {
    fontFamily: CustomFont.FONT_FAMILIES.FONT_REGULAR,
    fontSize: CustomFont.FONT_SIZE.b_11,
  },
  titleRegular10: {
    fontFamily: CustomFont.FONT_FAMILIES.FONT_REGULAR,
    fontSize: CustomFont.FONT_SIZE.b_10,
  },
  titleRegular8: {
    fontFamily: CustomFont.FONT_FAMILIES.FONT_REGULAR,
    fontSize: CustomFont.FONT_SIZE.b_8,
  },
  titleRegular9: {
    fontFamily: CustomFont.FONT_FAMILIES.FONT_REGULAR,
    fontSize: CustomFont.FONT_SIZE.b_9,
  },
  titleMedium12: {
    fontFamily: CustomFont.FONT_FAMILIES.FONT_MEDIUM,
    fontSize: CustomFont.FONT_SIZE.b_12,
  },
  smallIcon: {
    height: HP('3%'),
    width: WP('5%'),
  },
});
