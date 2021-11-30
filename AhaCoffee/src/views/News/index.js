import React, {useState, useEffect, useRef, useCallback} from 'react';
import {
  SafeAreaView,
  Text,
  View, Image
} from 'react-native';
import styles from './styles';
import HeaderBottomTab from '../../components/HeaderBottomTab';
import { svgs } from '../../assets';
import { colors, size } from '../../shared/themes';
import { SvgXml} from 'react-native-svg'
import { TouchableOpacity } from 'react-native-gesture-handler';
const News = ({navigation, route}) => {
const {data}= route?.params;
 
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'transparent'}}>
      <HeaderBottomTab textHeader={"Tin Tức"} backBtnEnable={true} />
      <View style={styles.ViewNoMessage}>
        <Image source={data.imagess} style={styles.imageItem} />
      </View>
      <Text style={[styles.TextTitle, {marginTop:size.REAL_SIZE_14}]}>Order online trên App AHA Cafe</Text>
      <Text style={styles.TextTitle}>Hotline: <Text style={[styles.TextTitle, {fontWeight:"900"}]}>0987819900</Text></Text>
      <TouchableOpacity onPress={() => {
        navigation.navigate('Delivery');
      }}
 style={[styles.buttonChoose, {marginTop:size.REAL_SIZE_20}]}>
<Text style={styles.txtButton}>ĐẶT MUA DELIVERY</Text>
</TouchableOpacity>
      <TouchableOpacity style={styles.buttonChoose} onPress={() => {
        navigation.navigate('TakeAway');
      }}>
        <Text style={styles.txtButton}>ĐẶT MUA TAKEWAY</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default News;
