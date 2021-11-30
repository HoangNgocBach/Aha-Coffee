import React, { useState, useEffect, useRef, useCallback } from 'react';
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
import styles from './styles';
import { svgs } from '../../assets';
import { SvgXml } from 'react-native-svg';
import { colors, size } from '../../shared/themes';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useSelector } from 'react-redux';
import { convertToNumberCommas } from '../../shared/utils/convertData';
import moment from "moment";
import HeaderBottomTab from '../../components/HeaderBottomTab';

const HistoryOrder = ({ navigation }) => {
  const HistoryReducer = useSelector(state => state.HistoryReducer);
  const [dataListHistory, setDataListHistory] = useState(HistoryReducer?.listDataHistory ? HistoryReducer?.listDataHistory : []);
  useEffect(() => {
    console.log(HistoryReducer?.listDataHistory)
    if (HistoryReducer?.listDataHistory) {
      setDataListHistory(HistoryReducer?.listDataHistory)
    }
  }, [HistoryReducer?.listDataHistory])
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HeaderBottomTab textHeader={"Lịch sử giao dịch"} backBtnEnable={true} />
      <ScrollView style={{ flex: 1 }}>
        {dataListHistory.length == 0 ? <View style={styles.ViewNoMessage}>
          <SvgXml xml={svgs.IconMessage} stroke={colors.GRAY_LIGHT} width={150} height={150} />
          <Text style={styles.TxtDes}>Danh sách rỗng</Text>
        </View> :
          dataListHistory.map(function (item, index) {
            return (
              <TouchableOpacity onPress={()=>navigation.navigate("DetailHistory", {data:item})}
               style={styles.viewItemNear}>
                <View style={{ flexDirection: 'row', marginHorizontal: 12, alignItems: 'center', marginTop: 20 }}>
                  <AntDesign name={'clockcircleo'} size={size.REAL_SIZE_20} />
                  <Text style={styles.txtHistory}>{`Bạn đã thanh toán thành công ${convertToNumberCommas(item?.price)} Đ tại AHA Coffee ${item?.addressShop?.title}`}</Text>
                </View>
                <Text style={[styles.txtHistory, { alignSelf: 'flex-end', marginTop: 4, fontSize: 14 }]}> {moment(item?.time).format("DD-MM hh:mm")}</Text>
              </TouchableOpacity>
            )
          })}
      </ScrollView>
    </SafeAreaView>
  );
};





export default HistoryOrder;
