import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Palette} from '../../shared/themes/Palette';
import {colors, size} from '../../shared/themes';
import {HEIGHT, WIDTH} from '../../shared/themes/size';

const styles = StyleSheet.create({
  containerSearch: {
    height: size.REM * 135,
    backgroundColor: colors.BLUE_MAIN,
  },
  text: {
    fontSize: size.REAL_SIZE_18,
    // color: (colorr = true ? colors.GRAY : colors.WHITE),
    color: colors.WHITE,
  },
  swiper: {
    height: size.REAL_SIZE_4,
    width: size.REAL_SIZE_20,
    borderRadius: 10,
    color: colors.DARK,
    // marginTop: 10,
  },
  touch: {
    marginHorizontal: size.REAL_SIZE_10,
  },

  textstyles: {
    fontWeight: 'bold',
    fontSize: size.REAL_SIZE_18,
    color: colors.BLACK,
    margin: size.REAL_SIZE_10,
  },
  viewSearch: {
    flexDirection: 'row',
    paddingHorizontal: size.REAL_SIZE_20,
    height: size.REAL_SIZE_40,
    backgroundColor: colors.Grey50,
    marginHorizontal: size.REAL_SIZE_20,
    borderRadius: size.REAL_SIZE_20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  containerItem: {
    marginBottom: size.REAL_SIZE_10,
    backgroundColor: colors.WHITE,
  },
  buttonItem: {
    height: size.REM * 200,
    width: WIDTH/2.5,
    marginHorizontal: size.REAL_SIZE_10,
  },
  imageItem: {
    height: WIDTH / 2.5*6/7,
    width: WIDTH / 2.5,
    // marginHorizontal: size.REAL_SIZE_20,
    borderRadius: size.REAL_SIZE_10,
  },
  viewIconItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  txtName: {
    marginTop: size.REAL_SIZE_4,
    fontWeight: 'bold',
    fontSize: size.REAL_SIZE_16,
    marginLeft: size.REAL_SIZE_2,
    color: colors.TEXT_COLOR,
  },
  txtPrice: {
    // marginT: size.REAL_SIZE_10,
    fontWeight: 'bold',
    fontSize: size.REAL_SIZE_14,
    marginLeft: size.REAL_SIZE_2,
    lineHeight: size.REAL_SIZE_24,
    color: colors.BLUE_MAIN,
  },
  viewNews: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 30,
    borderLeftWidth: 30,
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: colors.MAIN_COLOR,
    borderLeftColor: 'transparent',
    position: 'absolute',
    top: 0,
    right: 0,
  },
  txtNewsN: {
    position: 'absolute',
    bottom: 12,
    left: -12,
    color: colors.WHITE,
    fontWeight: '900',
  },
});
export default styles;
