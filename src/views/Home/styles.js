import {StyleSheet, View} from 'react-native';
import Colors from '../../shared/themes/colors';

import React from 'react';
import {Palette} from '../../shared/themes/Palette';
import {colors, size} from '../../shared/themes';
import {HEIGHT, WIDTH} from '../../shared/themes/size';

const styles = StyleSheet.create({
  images: {
    height: size.REAL_SIZE_40,
    width: size.REAL_SIZE_40,
    alignContent: 'center',
    marginTop: size.REM * 20,
    marginLeft: size.REAL_SIZE_10,
    borderRadius: 5,
    marginBottom: size.REAL_SIZE_15,
  },
  text2: {
    fontSize: size.REAL_SIZE_16,
    color: colors.WHITE,
    marginTop: size.REAL_SIZE_12,
  },
  viewImage: {
    flexDirection: 'row',
    backgroundColor: colors.BLUE_MAIN,
    height: size.REM * 70,
  },
  iconstaro: {
    // marginLeft: size.REAL_SIZE_10,
    marginTop: size.REM * 40,
  },
  viewIconStaro: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    width: size.REM * 280,
    marginLeft: size.REAL_SIZE_20,
    marginBottom: size.REAL_SIZE_15,
    borderBottomColor: colors.Grey300,
    justifyContent: 'space-between',
  },
  text1: {
    fontSize: size.REAL_SIZE_15,
    color: colors.WHITE,
    marginTop: size.REM * 35,
    marginLeft: size.REAL_SIZE_10,
  },
  viewItem: {
    height: (WIDTH * 9) / 8,
    width: WIDTH,
    borderRadius: size.REAL_SIZE_50,
    marginBottom: size.REAL_SIZE_50,
    marginLeft: size.REAL_SIZE_10,
  },
  touch3: {
    // height: size.REAL_SIZE_60,
    // marginHorizontal: size.REAL_SIZE_20,
    alignItems: 'center',
    margin: size.REAL_SIZE_14,
    shadowColor: colors.Grey50,
    shadowRadius: size.REM * 2,

    height: size.REM * 184 * 0.5,
    width: size.REM * 662 * 0.5,
  },
  imageItem: {
    height: (WIDTH * 9) / 20,
    width: WIDTH - 20,
    borderRadius: size.REAL_SIZE_20,
    marginBottom: size.REAL_SIZE_20,
  },
  text3: {
    marginTop: size.REAL_SIZE_4,
    color: colors.WHITE,
    marginLeft: size.REAL_SIZE_5,
  },
  container: {flex: 1},
  touch1: {
    flex: 1,
    alignItems: 'center',
    borderBottomWidth: size.REM * 0.5,
    justifyContent: 'center',
    borderRightWidth: size.REM * 0.5,
    borderColor: Colors.GRAY_LIGHT,
  },
  text4: {
    marginHorizontal: size.REAL_SIZE_10,
    color: colors.BLACK,
    fontSize: size.REAL_SIZE_18,
    fontWeight: 'bold',
  },
  touch2: {
    flex: 1,

    borderBottomWidth: size.REM * 0.5,
    borderLeftWidth: size.REM * 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Colors.GRAY_LIGHT,
  },
  touch4: {
    alignItems: 'center',
    margin: size.REAL_SIZE_10,
    borderColor: colors.BLACK,
    shadowColor: colors.Grey50,
    shadowRadius: size.REM * 2,
    borderRadius: size.REAL_SIZE_20,
    height: WIDTH / 2 - 20,
    width: WIDTH / 2 - 20,
    backgroundColor: 'rgba(0, 160, 83,0.2)',
    paddingHorizontal: 12,
  },
  touch5: {
    alignItems: 'center',
    marginTop: size.REAL_SIZE_10,
    borderColor: colors.BLACK,
    shadowColor: colors.Grey50,
    shadowRadius: size.REM * 2,
    backgroundColor: 'rgba(0, 160, 83,0.2)',
    borderRadius: size.REAL_SIZE_20,
    height: WIDTH / 2 - 20,
    width: WIDTH / 2 - 20,
    paddingHorizontal: 12,
  },
  text5: {
    fontSize: size.REAL_SIZE_16,
    color: Palette.green,
    marginHorizontal: size.REAL_SIZE_10,
  },
  text6: {
    fontWeight: 'bold',
    fontSize: size.REAL_SIZE_16,
    color: colors.BLACK,
    marginLeft: size.REAL_SIZE_16,
    marginTop: size.REAL_SIZE_10,
  },
  text7: {
    fontSize: size.REAL_SIZE_12,
    color: colors.BLUE_MAIN,
    marginRight: size.REAL_SIZE_16,
    marginTop: size.REAL_SIZE_10,
  },
  im1: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    // resizeMode: 'center',
    height: size.REM * 184 * 0.5,
    width: size.REM * 662 * 0.5,
  },
  im2: {
    alignItems: 'center',
    height: WIDTH / 2 - 20 - 70,
    width: WIDTH / 2 - 20 - 70,
    // borderRadius: size.REAL_SIZE_20,
  },
  TxtTitle: {
    fontSize: 18,
    color: Colors.BLUE_MAIN,
    alignSelf: 'flex-start',
    fontWeight: '700',
    lineHeight: 30,
  },
  TxtDes: {
    alignSelf: 'flex-start',
    color: Colors.TEXT_COLOR,
    fontWeight: '500',
  },
  viewPrice: {
    backgroundColor: colors.WHITE,
    flexDirection: 'row',
    height: size.REM * 50,
    shadowColor: '#000',
  },
  shadowOffset: {
    width: 0.5,
    height: 5,
  },

  swiper: {
    height: size.REAL_SIZE_4,
    width: size.REAL_SIZE_20,
    borderRadius: 10,
    color: colors.DARK,
  },
  viewItemNear:{
    // height: (WIDTH *9) / 16,
    paddingBottom: 20,
    width: WIDTH - size.REAL_SIZE_10*2,
    borderRadius: 20,
    marginVertical:10,
    marginLeft: size.REAL_SIZE_10,
    backgroundColor:colors.WHITE,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  }, txtHistory:{
    fontSize:16, color:colors.TEXT_COLOR, fontWeight:'700',
    marginHorizontal:12
  }
  ,txtAll:{
    color: colors.BLUE_MAIN, fontSize: 18, alignSelf: 'center', marginTop: 12, fontWeight: "800"
  }
});
export default styles;
