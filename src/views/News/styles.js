import {StyleSheet} from 'react-native';
import Colors from '../../shared/themes/colors';

import SIZES, {WIDTH} from '../../shared/themes/size';

export default StyleSheet.create({
  ViewNoMessage: {
    alignSelf: 'center',
    marginTop: SIZES.REAL_SIZE_10,
  },
  TxtDes: {
    color: Colors.TEXT_COLOR,
    fontSize: 16,
  },
  imageItem: {
    height: (WIDTH * 9) / 16,
    width: WIDTH - 10,
    borderRadius: SIZES.REAL_SIZE_10,
    marginBottom: SIZES.REAL_SIZE_10,
  },
  buttonChoose:{
    height:SIZES.REAL_SIZE_50,
    marginHorizontal: SIZES.REAL_SIZE_20,
    backgroundColor:Colors.BLUE_MAIN,
    borderRadius:SIZES.REAL_SIZE_8,
    marginVertical:SIZES.REAL_SIZE_10,
    justifyContent:'center',
    alignItems:'center'
  },
  txtButton:{
    fontSize: 18, color: Colors.WHITE,
    fontWeight:'900',
  },
  TextTitle:{
    fontSize: 16, color: Colors.TEXT_COLOR,
    fontWeight: '500',
    marginLeft: SIZES.REAL_SIZE_20,
    lineHeight:24
  }
});
