import React, {useState, useRef} from 'react';
import {SafeAreaView, Alert} from 'react-native';
import QRcodeView from './QRcodeView';

const QRcode = ({navigation}) => {
  const refScanner = useRef();
  const [isShowCam, setIsShowCam] = useState(true);
  const onHandleSuccess = data => {
    Alert.alert(data);
  };

  //ReScanner QRcode
  const reScanner = () => {
    setIsShowCam(true);
    refScanner.current.reactivate();
    console.log('reScanner');
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* screen QRCode */}
      <QRcodeView
        refScanner={refScanner}
        onHandleQRSuccess={data => onHandleSuccess(data)}
        reScanner={reScanner}
        isShowCam={isShowCam}
      />
    </SafeAreaView>
  );
};

export default QRcode;
