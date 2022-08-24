import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Button,
  Image,
} from 'react-native';
import {
  heightPercentageToDP as HP,
  widthPercentageToDP as WP,
} from 'react-native-responsive-screen';
import {useFocus, useIndex} from '@crowdlinker/react-native-pager';
import Animated from 'react-native-reanimated';
import {ImageUri} from '../../config';

const vibes = [ImageUri.vibe1st, ImageUri.logo, ImageUri.vibe3rd];

interface SlideProps {
  onPressActive: Function;
}

const Slide = (props: SlideProps) => {
  const focused = useFocus();
  const index = useIndex();

  useEffect(() => {
    focused ? props.onPressActive(index) : null;
  }, [focused]);

  return (
    <Animated.View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
      }}>
      <Image
        source={vibes[index]}
        resizeMode={'contain'}
        style={{...styleSheet.vibeImage}}
      />
    </Animated.View>
  );
};
const styleSheet = StyleSheet.create({
  vibeImage: {
    height: HP('25%'),
    width: WP('50%'),
  },
});

export default Slide;
