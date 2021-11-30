import {StyleSheet} from 'react-native';
import Colors from '../../shared/themes/colors';
import Sizes, {WIDTH, HEIGHT} from '../../shared/themes/size';

export default StyleSheet.create({
  scanQR: {
    width: WIDTH - 64,
    height: HEIGHT / 1.5,

    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
  },
  viewBtnScanQR: {
    position: 'absolute',
    bottom: Sizes.REAL_SIZE_24,
    alignSelf: 'center',
    zIndex: 2,
  },
  btnScanQR: {
    width: WIDTH - Sizes.REAL_SIZE_32,
  },
  buttonTextQR: {
    color: 'red',
  },
  viewCloses: {
    position: 'absolute',
    top: Sizes.REAL_SIZE_40,
    right: Sizes.REAL_SIZE_16,
    zIndex: 2,
  },
  viewTopScanQR: {
    position: 'absolute',
    top: Sizes.calculationRealSize(90),
    alignSelf: 'center',
    zIndex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtTitleTop: {
    fontWeight: '800',
    fontSize: Sizes.REAL_SIZE_20,
    color: Colors.WHITE,
  },
  txtTop: {
    fontSize: Sizes.REAL_SIZE_14,
    color: Colors.WHITE,
    fontWeight: 'normal',
  },
  // QR styles
  containerStyle: {
    width: WIDTH,
    height: HEIGHT,
  },
  cameraStyle: {
    width: WIDTH,
    height: HEIGHT,
  },
  // Marker styles
  viewCustomMarker: {
    width: Sizes.calculationRealSize(279),
    height: Sizes.calculationRealSize(279),
    borderRadius: Sizes.REAL_SIZE_12,
  },
  textStyle: {
    padding: Sizes.REAL_SIZE_10,
    color: '#fff',
    fontSize: Sizes.REAL_SIZE_20,
  },
  buttonStyle: {
    // height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: Sizes.REAL_SIZE_16,
    marginBottom: Sizes.REAL_SIZE_20,
    borderRadius: Sizes.REAL_SIZE_10,
  },

});
