import {StyleSheet} from 'react-native';
import Colors from '../../shared/themes/colors';

import SIZES, {WIDTH} from '../../shared/themes/size';

export default StyleSheet.create({
  viewAvatar: {
    height: 50,
    width: 50,
    borderRadius: 6,
    margin: 3,
    marginRight: 12,
    borderWidth: 0.5,
    margin: 12,
  },
  editAvatar: {
    position: 'absolute',
    bottom: -10,
    right: -10,
    padding: 3,
    borderRadius: 200,
    backgroundColor: Colors.WHITE,
    borderWidth: 0.5,
    borderColor: Colors.LIGHT_PLACEHOLDER,
  },
  viewMember: {
    marginHorizontal: 12,
    borderBottomWidth: 2,
    borderColor: Colors.GRAY,
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 4,
  },
  startMember: {
    flexDirection: 'row',
    marginHorizontal: 3,
    alignItems: 'center',
  },
  viewPoint: {
    borderTopWidth: 0.25,
    marginTop: 3,
    borderColor: Colors.LIGHT_PLACEHOLDER,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  viewBuyPoint: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
  },
  TxtBuyPoint: {
    color: Colors.BLUE_MAIN,
    fontSize: 18,
    lineHeight: 30,
  },
  TxtDesPoint: {
    color: Colors.TEXT_COLOR,
    fontSize: 14,
  },
  viewLine: {
    height: 30,
    width: WIDTH,
    backgroundColor: 'rgba(52, 52, 52, 0.06)',
  },
  viewWrapProfile: {
    backgroundColor: Colors.WHITE,
    paddingVertical: 12,
    paddingHorizontal: 12,
  },
  txtTitleProfile: {
    color: Colors.TEXT_COLOR,
    fontWeight: '700',
    fontSize: 14,
    marginBottom: 12,
  },
  viewAddress: {
    marginTop: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 12,
    alignItems: 'center',
    height: 55,
  },
  iconAddress: {
    marginLeft: SIZES.REAL_SIZE_12,
    marginRight: 4,
    color: Colors.BLUE_MAIN,
  },
  buttonChange: {
    backgroundColor: Colors.WHITE,
    borderBottomWidth: 0.25,
    borderTopWidth: 0.5,
    justifyContent: 'space-between',
    alignItems:'center',
    paddingHorizontal: 12,
    height: 50,
  },
  buttonCall: {
    marginTop: 20,
    backgroundColor: Colors.BLUE_MAIN,
    justifyContent: 'center',
    borderRadius: 20,
    height: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  viewIcons: {
    flexDirection: 'row',
    // marginHorizontal: SIZES.REAL_SIZE_12,
    backgroundColor: 'rgba(52, 52, 52, 0.06)',
    borderRadius: SIZES.REAL_SIZE_10,
    alignItems: 'center',
    height: 50,
  },
  textInput: {
    fontSize: SIZES.REAL_SIZE_14,
    marginLeft: SIZES.REAL_SIZE_10,
    textAlign: 'center',
    height: 50,
  },
});
