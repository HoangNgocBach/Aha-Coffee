import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Palette} from '../../shared/themes/Palette';
import {colors, size} from '../../shared/themes';
import {HEIGHT, WIDTH} from '../../shared/themes/size';

const styles = StyleSheet.create({
  imageItem: {
    height: WIDTH / 2.5 * 6 / 7,
    width: WIDTH / 2.5,
    // marginHorizontal: size.REAL_SIZE_20,
    borderRadius: size.REAL_SIZE_10,
  },
  txtNameShop: {
    fontWeight: '800',
    fontSize: size.REAL_SIZE_18,
    justifyContent: 'center',
    color: colors.TEXT_COLOR,
    lineHeight: size.REAL_SIZE_28,
  },
  textAddress: {
    fontSize: size.REAL_SIZE_14,
    justifyContent: 'center',
    color: colors.TEXT_COLOR,
    lineHeight: size.REAL_SIZE_20,
  },
});
export default styles;
