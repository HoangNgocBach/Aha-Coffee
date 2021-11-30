import {StyleSheet} from 'react-native';
import Sizes from '../../shared/themes/size';

const SIZE_TXT_HEADER = Sizes.REAL_SIZE_18;

export default StyleSheet.create({
  header: {
    height: 50,

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
