import React from 'react';
import {StyleSheet} from 'react-native';
import {size} from '../../../shared/themes';
import {colors} from '../../../shared/themes';
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.WHITE},
  text: {
    fontSize: size.REAL_SIZE_20,
    color: colors.BLACK,
    marginTop: size.REAL_SIZE_10,
  },
  viewText: {
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewIcons: {
    flexDirection: 'row',
    marginHorizontal: size.REAL_SIZE_40,
    marginTop: size.REAL_SIZE_50,
    backgroundColor: colors.Grey200,
    borderRadius: size.REAL_SIZE_10,
  },
  textInput: {
    fontSize: size.REAL_SIZE_18,
    marginLeft: size.REAL_SIZE_10,
  },
  touch: {
    marginHorizontal: size.REM * 120,
    backgroundColor: colors.BLUE_MAIN,
    marginTop: size.REAL_SIZE_50,
    flexDirection: 'row',
    height: size.REAL_SIZE_60,
    borderRadius: size.REAL_SIZE_50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewImage: {
    alignItems: 'center',
    height: size.REM * 300,
    width: size.REM * 300,
    marginTop: size.REM * 60,
    marginLeft: size.REAL_SIZE_20,
  },
  image: {
    alignContent: 'center',
    height: size.REM * 300,
    width: size.REM * 300,
  },
});
export default styles;
