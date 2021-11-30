import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Palette} from '../../shared/themes/Palette';
import {colors, size} from '../../shared/themes';
import {HEIGHT, WIDTH} from '../../shared/themes/size';

const styles = StyleSheet.create({
  viewContainerItem: {
    marginHorizontal: size.REAL_SIZE_20,
    marginTop: size.REAL_SIZE_14,
    borderBottomWidth: size.REM * 0.5,
    justifyContent: 'center',
    paddingBottom: size.REAL_SIZE_14,
  },
  txtNameShop: {
    fontWeight: 'bold',
    fontSize: size.REAL_SIZE_16,
    justifyContent: 'center',
    color: colors.BLUE_MAIN,
    lineHeight: size.REAL_SIZE_24,
  },
  textAddress: {
    fontSize: size.REAL_SIZE_14,
    justifyContent: 'center',
    color: colors.TEXT_COLOR,
    lineHeight: size.REAL_SIZE_20,
  },
});
export default styles;
