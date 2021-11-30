import {StyleSheet} from 'react-native';
import colors from '../../shared/themes/colors';

import size, {WIDTH} from '../../shared/themes/size';

export default StyleSheet.create({
  ViewNoMessage: {
    alignSelf: 'center',
    marginTop: size.REAL_SIZE_30,
  },
  TxtDes: {
    color: colors.TEXT_COLOR,
    fontSize: 16,
    alignSelf: 'center',
  },

  viewItemNear: {
    // height: (WIDTH *9) / 16,
    paddingBottom: 20,
    width: WIDTH - size.REAL_SIZE_10 * 2,
    borderRadius: 20,
    marginVertical: 4,
    marginLeft: size.REAL_SIZE_10,
    backgroundColor: colors.WHITE,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  }, txtHistory: {
    fontSize: 16, color: colors.TEXT_COLOR, fontWeight: '700',
    marginHorizontal: 12
  }
  , txtAll: {
    color: colors.BLUE_MAIN, fontSize: 18, alignSelf: 'center', marginTop: 12, fontWeight: "800"
  },
});
