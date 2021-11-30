import {StyleSheet} from 'react-native';
import {color} from 'react-native-reanimated';
import {colors, size} from '../../shared/themes';
import Sizes from '../../shared/themes/size';

const BG_COLOR_HEADER = colors.BLUE_MAIN;
const SIZE_TXT_HEADER = Sizes.REAL_SIZE_18;

export default StyleSheet.create({
  header: {
    height: size.REAL_SIZE_60,
    backgroundColor: BG_COLOR_HEADER,
    flexDirection: 'row',
    alignItems: 'center',
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
  },
  txtHeader: {
    fontSize: SIZE_TXT_HEADER,
    color: 'white',
    fontWeight: '800',
  },
  leftH: {
    flex: 1,
  },
  buttonBack: {
    padding: Sizes.REAL_SIZE_10,
  },
});
