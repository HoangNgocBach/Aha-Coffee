import route from 'color-convert/route';

import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo';
import {colors, size} from '../../../shared/themes';
import styles from '../CheckOTP/styles';
import { useDispatch, useSelector } from 'react-redux';
import  DataActions from '../../../core/redux/actions/DataActions';
import UserActions from '../../../core/redux/actions/UserActions';
import HistoryActions from '../../../core/redux/actions/HistoryActions';
import LocationShopActions from '../../../core/redux/actions/LocationShopActions';
const checkOTP = ({navigation, route}) => {
 const dispatch = useDispatch();
  const UserReducer = useSelector(state => state.UserReducer);
  // function generateOTP() {
  //   // Khai báo một biến chữ số
  //   // nơi lưu trữ tất cả các chữ số
  //   var digits = '0123456789';
  //   let OTP = '';
  //   for (let i = 0; i < 4; i++) {
  //     OTP += digits[Math.floor(Math.random() * 10)];
  //   }
  //   return OTP;
  // }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Nhâp mã xác thực được gửi tới số thuê bao</Text>
      <Text style={styles.textPhone}>{route?.params?.text}</Text>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.viewTextInput}>
          <TextInput
            style={styles.textInput}
            keyboardType="number-pad"
            maxLength={1}
          />
        </View>
        <View style={styles.viewTextInput}>
          <TextInput
            style={styles.textInput}
            keyboardType="number-pad"
            maxLength={1}
          />
        </View>
        <View style={styles.viewTextInput}>
          <TextInput
            style={styles.textInput}
            keyboardType="number-pad"
            maxLength={1}
          />
        </View>
        <View style={styles.viewTextInput}>
          <TextInput
            style={styles.textInput}
            keyboardType="number-pad"
            maxLength={1}
          />
        </View>
      </View>
      <View style={styles.viewTouch}>
        <TouchableOpacity
          style={styles.touch}
          onPress={() => navigation.goBack()}>
          <Entypo
            name={'chevron-left'}
            size={size.REAL_SIZE_30}
            color={colors.WHITE}
          />
          <Text style={styles.textTouch}>QUAY LẠI</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.touch, {backgroundColor: colors.BLUE_MAIN}]}
          onPress={() => {
            navigation.navigate('Home');
            dispatch(DataActions.updatePhone(route?.params?.text))
            dispatch(UserActions.updatePhone(route?.params?.text))
            if (route?.params?.text!=UserReducer?.phone){
              dispatch(HistoryActions.updateHistory([]));
              dispatch(UserActions.updateUserName(''));
              dispatch(UserActions.updateAddressText(''));
              dispatch(LocationShopActions.updateListDataShop([]));
            }
          }}>
          <Text
            style={{
              fontSize: size.REAL_SIZE_15,
              color: colors.WHITE,
              textAlign: 'center',
              justifyContent: 'center',
            }}>
            XÁC NHẬN
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default checkOTP;
