import {StyleSheet, View} from 'react-native';
import Colors from '../../shared/themes/colors';

import React from 'react';
import {Palette} from '../../shared/themes/Palette';
import {colors, size} from '../../shared/themes';
import {HEIGHT, WIDTH} from '../../shared/themes/size';

const styles = StyleSheet.create({

  viewItemNear:{
    // height: (WIDTH *9) / 16,
    paddingBottom: 20,
    width: WIDTH - size.REAL_SIZE_10*2,
    borderRadius: 20,
    marginVertical:4,
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
