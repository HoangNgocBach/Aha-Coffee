import React from 'react';
import {StyleSheet} from 'react-native';
import {colors, size} from '../../../shared/themes';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  text: {
    fontSize: size.REM * 13,
    textAlign: 'center',
    marginTop: size.REM * 70,
    color: colors.BLACK,
  },
  textPhone: {
    fontSize: size.REM * 25,
    textAlign: 'center',
    color: colors.BLACK,
    marginTop: size.REAL_SIZE_15,
  },
  viewTextInput: {
    marginTop: size.REAL_SIZE_30,
    marginLeft: size.REM * 35,
  },
  textInput: {
    height: size.REM * 75,
    width: size.REAL_SIZE_50,
    borderWidth: size.REM * 0.75,
    borderRadius: size.REAL_SIZE_10,
    textAlign: 'center',
  },
  touch: {
    flexDirection: 'row',
    height: size.REAL_SIZE_60,
    width: size.REM * 120,
    // borderWidth: size.REM * 1,
    backgroundColor: colors.Grey300,
    borderRadius: size.REAL_SIZE_50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewTouch: {
    flexDirection: 'row',
    marginTop: size.REM * 70,
    justifyContent: 'space-between',
    marginHorizontal: size.REAL_SIZE_50,
  },
  textTouch: {
    fontSize: size.REAL_SIZE_15,
    color: colors.WHITE,
    textAlign: 'center',
    justifyContent: 'center',
  },
});
export default styles;
