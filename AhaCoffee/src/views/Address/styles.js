import {StyleSheet, Dimensions} from 'react-native';
import Colors from '../../shared/themes/colors';

import SIZES, {WIDTH, HEIGHT} from '../../shared/themes/size';
const {width, height} = Dimensions.get('window');
const CARD_HEIGHT = 110;
const CARD_WIDTH = width * 0.8;
const SPACING_FOR_CARD_INSET = width * 0.1 - 10;
export default StyleSheet.create({
  container: {
    // ...StyleSheet.absoluteFillObject,
    height: (HEIGHT * 2) / 3 - 40,
    width: WIDTH,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  buttonChooseMap: {
    borderBottomWidth: 2,
    borderColor: Colors.BLUE_MAIN,
    justifyContent: 'center',
    alignItems: 'center',
    width: 75,
    marginRight: 5,
  },
  containerMap: {
    // ...StyleSheet.absoluteFillObject,
    height: (HEIGHT * 2) / 3 - 40,
    width: WIDTH,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  scrollView: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    paddingVertical: 10,
  },
  endPadding: {
    paddingRight: width - CARD_WIDTH,
  },
  card: {
    // padding: 10,
    elevation: 2,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderRadius: 5,
    marginHorizontal: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: {x: 2, y: -2},
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    overflow: 'hidden',
  },
  cardImage: {
    flex: 3,
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
  textContent: {
    flex: 2,
    padding: 10,

  },
  cardtitle: {
    fontSize: 16,
    // marginTop: 5,
    fontWeight: 'bold',
    color: Colors.BLUE_MAIN,
  },
  cardDescription: {
    fontSize: 14,
    color: '#444',
    lineHeight: 20,
  },
  markerWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
  },
  marker: {
    width: 30,
    height: 30,
  },
  button: {
    alignItems: 'center',
    marginTop: 5,
  },
  signIn: {
    width: '100%',
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
  },
  textSign: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  viewIcons: {
    height: SIZES.REAL_SIZE_48,
    width: WIDTH,
    borderBottomWidth: 1,
    borderColor: Colors.GRAY_LIGHT,
    flexDirection: 'row',
    borderTopWidth: 1,
    alignItems: 'center',
  },
  textInput: {
    height: SIZES.REAL_SIZE_48,
    width: WIDTH - 100,
  },
  viewBody: {
    marginTop: 3,
    paddingBottom: 40,
    marginBottom:40,
    flex: 1,
  },
  ViewCity: {
    height: SIZES.REAL_SIZE_48,
    width: WIDTH,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: Colors.GRAY_LIGHT,
  },
  TextCity: {fontSize: 16, fontWeight: 'bold', color: Colors.TEXT_COLOR},
});
