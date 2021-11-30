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
import {images} from '../../assets';
import {Header} from '../../components';
import {colors, size} from '../../shared/themes';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Palette} from '../../shared/themes/Palette';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import dataImage from './dataImage';
import styles from '../Home/styles';
import {HEIGHT, WIDTH} from '../../shared/themes/size';
import Swiper from 'react-native-swiper';
import {APP_SCREEN_TYPES} from '../../routes/screenTypes';
import { useSelector } from 'react-redux';
import { convertToNumberCommas } from '../../shared/utils/convertData';
import moment from "moment";
const Home = ({navigation}) => {
  const HistoryReducer = useSelector(state => state.HistoryReducer);
  const UserReducer = useSelector(state => state.UserReducer);
  const [dataListHistory, setDataListHistory] = useState(HistoryReducer?.listDataHistory ? HistoryReducer?.listDataHistory:[]);
  useEffect(()=>{
    console.log(UserReducer)
    if (HistoryReducer?.listDataHistory){
      setDataListHistory(HistoryReducer?.listDataHistory)

    }
  }, [HistoryReducer?.listDataHistory])
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewImage}>
        <Image source={images.anh} style={styles.images} />
        <View style={{flexDirection: 'row'}}>
          <View style={styles.viewIconStaro}>
            <View style={{flexDirection: 'row'}}>
              <AntDesign
                name={'staro'}
                size={size.REAL_SIZE_12}
                style={styles.iconstaro}
                color={Palette.color_ffc}
              />
              <Text style={styles.text1}>MEMBER</Text>
            </View>

            <View>
              <Text style={styles.text2}>{`${UserReducer?.point}/5000`}</Text>
              <View style={{flexDirection: 'row'}}>
                <AntDesign
                  name={'staro'}
                  size={size.REAL_SIZE_12}
                  style={{marginTop: size.REM * 7}}
                  color={Palette.color_ffc}
                />
                <Text style={styles.text3}>VIP</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.viewPrice}>
        <TouchableOpacity style={styles.touch1}>
          <Text style={{fontSize: size.REAL_SIZE_12}}>Số dư ví</Text>
          <View style={{flexDirection: 'row'}}>
            <Ionicons
              name={'wallet-outline'}
              size={size.REAL_SIZE_20}
              color={colors.BLACK}
              style={{marginTop: size.REAL_SIZE_2}}
            />
            <Text style={styles.text4}>0</Text>
            <MaterialCommunityIcons
              name={'currency-usd-circle-outline'}
              size={size.REAL_SIZE_20}
              color={colors.BLUE_MAIN}
              style={{marginTop: size.REAL_SIZE_2}}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("Rechange")}
        style={styles.touch2}>
          <FontAwesome5 name={'hand-holding-usd'} size={size.REAL_SIZE_20} />
          <Text style={styles.text5}>NẠP ĐIỂM</Text>
          <AntDesign name={'right'} size={size.REAL_SIZE_14} />
        </TouchableOpacity>
      </View>
      <ScrollView style={{flex: 1}}>
        <TouchableOpacity
          style={styles.touch3}
          onPress={() => {
            navigation.navigate('QRcodeTab');
          }}>
          <Image source={images.image1} style={styles.im1} />
        </TouchableOpacity>
        <Text style={styles.text6}>Đặt hàng online</Text>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={styles.touch4}
            onPress={() => {
              navigation.navigate('Delivery');
            }}>
            <Image
              style={[styles.im2]}
              resizeMode={'cover'}
              source={images.imagBike}
            />
            <Text style={styles.TxtTitle} numberOfLines={1}>
              Delivery
            </Text>
            <Text style={styles.TxtDes} numberOfLines={2}>
              Giao hàng tận nơi
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touch5}
            onPress={() => {
              navigation.navigate('TakeAway');
            }}>
            <Image style={styles.im2} source={images.imageCoffee} />
            <Text style={styles.TxtTitle} numberOfLines={1}>
              Take away
            </Text>
            <Text style={styles.TxtDes} numberOfLines={2}>
              Đặt trước và nhận đồ cửa hàng bạn chọn
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 12,
          }}>
          <Text style={styles.text6}>Đừng bỏ lỡ</Text>
          <TouchableOpacity
            onPress={() => { navigation.navigate("News", { data: dataImage[0] }) }}>
            <Text style={styles.text7}>Xem tất cả</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            height: (WIDTH * 9) / 16 + 10,
            width: WIDTH,
            marginBottom: 40,
          }}>
          <Swiper
            style={{marginBottom: size.REM * 50}}
            showsButtons={false}
            dotColor={colors.GRAY}
            activeDotColor={colors.BLUE_MAIN}
            dotStyle={styles.swiper}
            activeDotStyle={styles.swiper}>
            {dataImage.map(function (num) {
              return (
                <View style={styles.viewItem}>
                  <TouchableOpacity onPress ={()=>{navigation.navigate("News", {data:num})}}>
                    <Image source={num.imagess} style={styles.imageItem} />
                  </TouchableOpacity>
                </View>
              );
            })}
          </Swiper>
        </View>
<View>


        <Text style={[styles.text6, {marginTop: size.REM * 1}]}>
          Giao dịch gần đây
        </Text>
        {dataListHistory.map(function (item, index) {

          if (index == dataListHistory.length-1){
          return (
            <View style={styles.viewItemNear}>
              <View style={{flexDirection:'row', marginHorizontal:12, alignItems:'center', marginTop:20}}>
                <AntDesign name={'clockcircleo'} size={size.REAL_SIZE_20} />
                <Text style={styles.txtHistory}>{`Bạn đã thanh toán thành công ${ convertToNumberCommas(item?.price)} Đ tại AHA Coffee ${item?.addressShop?.title}`}</Text>
              </View>
              <Text style={[styles.txtHistory, {alignSelf:'flex-end', marginTop:4, fontSize:14}]}> {moment(item?.time).format("DD-MM hh:mm")}</Text>
              <TouchableOpacity onPress={() => { navigation.navigate("HistoryOrder") }}>
                <Text style={styles.txtAll}> Xem tất cả</Text>
              </TouchableOpacity>
            </View>
        );}
        })} 
        </View>
        <View style={{height: 40}}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
