import useTheme from '../../hooks/useTheme';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Modal from 'react-native-modal';
import {
  heightPercentageToDP as HP,
  widthPercentageToDP as WP,
} from 'react-native-responsive-screen';
import {Enum, ImageUri} from '../../config';
import {globalStyleSheet} from '../../style/style';

export interface ConnectAudiusProp {
  isVisible: boolean;
  onClose: Function;
}

const SelectedSong = (props: ConnectAudiusProp) => {
  const {colors} = useTheme();

  return (
    <Modal
      isVisible={props.isVisible}
      animationInTiming={1}
      animationOutTiming={1}>
      <View
        style={{
          ...styles.modalconatainer,
        }}>
        <ImageBackground
          source={ImageUri.selectedSongBg}
          style={{
            ...styles.bckImage,
          }}
          resizeMode={'stretch'}>
          <Text
            style={{
              ...globalStyleSheet.titleMedium16,
              color: colors.primaryText,
            }}>
            Selected Song
          </Text>

          <View style={{...styles.selectedSongContainer}}>
            <Image
              source={ImageUri.songSS}
              style={{...styles.selectedSongContainer}}
              resizeMode={'contain'}
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              props.onClose();
            }}
            style={{...styles.confirmBtnContainer}}>
            <Text
              style={{
                ...globalStyleSheet.titleRegular12,
                color: colors.primaryText,
              }}>
              {`Confirmed `}
            </Text>
            <Image
              source={ImageUri.confirmIcon}
              style={{...globalStyleSheet.smallIcon}}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  modalconatainer: {
    width: WP('90%'),
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,

    //
  },
  bckImage: {
    width: WP('90%'),
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: HP('2%'),
    paddingBottom: HP('2%'),
    borderRadius: 20,
  },
  confirmBtnContainer: {
    width: WP('80%'),
    height: HP('3%'),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedSongContainer: {
    width: WP('90%'),
    height: HP('10%'),
  },
});
export default SelectedSong;
