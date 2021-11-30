import React, {useState, useEffect, useRef, useCallback} from 'react';
import {
  SafeAreaView,
  Animated,
  NativeModules,
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import {colors, size} from '../../shared/themes';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import { useSelector } from 'react-redux';
import { convertToNumberCommas } from '../../shared/utils/convertData';
import moment from "moment";
import HeaderBottomTab from '../../components/HeaderBottomTab';
const Receipt = ({navigation}) => {
  const HistoryReducer = useSelector(state => state.HistoryReducer);
  const [dataListHistory, setDataListHistory] = useState(HistoryReducer?.listDataHistory ? HistoryReducer?.listDataHistory:[]);
  useEffect(()=>{
    console.log(HistoryReducer?.listDataHistory)
    if (HistoryReducer?.listDataHistory){
      setDataListHistory(HistoryReducer?.listDataHistory)
    }
  }, [HistoryReducer?.listDataHistory])
  return (
    <SafeAreaView style={{flex:1}}>
      <HeaderBottomTab textHeader={"Hóa đơn"} backBtnEnable={true} />
      <ScrollView style={{flex:1}}>
        {dataListHistory.map(function (item, index) {
          return (
            <View style={styles.viewItemNear}>
              <View style={{flexDirection:'row', marginHorizontal:12, alignItems:'center', marginTop:20}}>
                <MaterialIcons name={'payment'} size={size.REAL_SIZE_20} />
                <Text style={styles.txtHistory}>{`Bạn đã thanh toán thành công ${convertToNumberCommas(item?.price)} Đ bằng ${item?.Receipt?.name ? item?.Receipt?.name:'Điểm'}`}</Text>
              </View>
              <Text style={[styles.txtHistory, {alignSelf:'flex-end', marginTop:4, fontSize:14}]}> {moment(item?.time).format("DD-MM hh:mm")}</Text>
            </View>
        )
        })} 
      </ScrollView>
    </SafeAreaView>
  );
};

export default Receipt;
