import React, { useEffect, useRef} from 'react';
import {View, Animated, Text} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import {SvgXml} from 'react-native-svg';
import {svgs} from '../../assets';
import styles from './styles';
import { colors } from '../../shared/themes';

const QRcodeView = ({
  onHandleQRSuccess,
  refScanner,
  reScanner,
  isShowCam,
}) => {
  const zoomAnimate = useRef(new Animated.Value(0)).current;
  // const refScanner = useRef();

  useEffect(() => {
    Animated.loop(zoomIn(), {
      // useNativeDriver: false
    });
  }, []);
 

  function zoomIn() {
    Animated.timing(zoomAnimate, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: false,
    }).start(() => zoomOut());
  }

  function zoomOut() {
    Animated.timing(zoomAnimate, {
      toValue: 0,
      duration: 2000,
      useNativeDriver: false,
    }).start(() => zoomIn());
  }
  //
  function onSuccess(e) {
    if (e.data != '') {
      onHandleQRSuccess(e.data);
    } else {
      reScanner();
    }
  }

  const zooms = zoomAnimate.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.9],
  });

  return (
    <>
      {isShowCam && (
        <QRCodeScanner
          ref={refScanner}
          onRead={onSuccess}
          flashMode={RNCamera.Constants.FlashMode.on}
          containerStyle={styles.containerStyle}
          cameraStyle={styles.cameraStyle}
          // cameraProps={{use: true}}
          showMarker={true}
          checkAndroid6Permissions={true}
          notAuthorizedView={<Text>{"Không hộ trợ camera"}</Text>}
          reactivateTimeout={5000}
          fadeIn={true}
          customMarker={
            <Animated.View
              style={[
                styles.viewCustomMarker,
                {
                  transform: [{scale: zooms}],
                },
              ]}>
              <View style={{position: 'absolute', top: 0, left: 0}}>
                <SvgXml xml={svgs.IconQRcode} stroke={colors.BLUE_MAIN} />
              </View>
              <View
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  transform: [{rotate: '90deg'}],
                }}>
                <SvgXml xml={svgs.IconQRcode} stroke={colors.BLUE_MAIN} />
              </View>
              <View
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  transform: [{rotate: '-90deg'}],
                }}>
                <SvgXml xml={svgs.IconQRcode} stroke={colors.BLUE_MAIN} />
              </View>
              <View
                style={{
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                  transform: [{rotate: '180deg'}],
                }}>
                <SvgXml xml={svgs.IconQRcode} stroke={colors.BLUE_MAIN} />
              </View>
            </Animated.View>
          }
        />
      )}
      {isShowCam && (
        <>
          <View style={styles.viewTopScanQR}>
            <Text style={styles.txtTitleTop}>
              Quét mã qr code
            </Text>
          </View>
        </>
      )}
      <View style={styles.viewBtnScanQR}></View>
    </>
  );
};

export default QRcodeView;
