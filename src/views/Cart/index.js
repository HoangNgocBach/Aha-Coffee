import React, { useState, useEffect, useCallback} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useWindowDimensions,
  Image,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {Header} from '../../components';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {colors, size} from '../../shared/themes';
import {images} from '../../assets';
import {FlatList} from 'react-native-gesture-handler';
import Swiper from 'react-native-swiper';
import {HEIGHT, WIDTH} from '../../shared/themes/size';
import styles from './styles';
import HeaderBottomTab from '../../components/HeaderBottomTab';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import DataActions from '../../core/redux/actions/DataActions';
import { convertToNumberCommas } from '../../shared/utils/convertData';
import { useFocusEffect, useIsFocused } from '@react-navigation/native';
const Cart = ({navigation, route}) => {
  const dispatch = useDispatch();
  const DataReducer = useSelector(state => state.DataReducer);
  const [dataProduct, setDataProduct] = useState([]);
  const [price, setPrice] = useState(0);
  const [total, setTotal] = useState(0);
  const isFocused = useIsFocused();

  useFocusEffect(
    useCallback(() => {
      if (isFocused) {
        if (DataReducer?.dataCoffee&&DataReducer?.dataCoffee.length != 0) {
      setDataProduct(DataReducer?.dataCoffee);
      let price1 = 0;
      let total1 = 0;
      DataReducer?.dataCoffee.map(item => {
        total1 = total1 + Number(item?.quantity);
        price1 = price1 + Number(item?.dataProduct?.gia) * Number(item?.quantity);
      })
      setPrice(price1);
      setTotal(total1);
    }
    else {
      setDataProduct([]);
       setPrice(0);
      setTotal(0);}
      }
    }, [isFocused, DataReducer?.dataCoffee, DataReducer?.dataCoffee?.dataProduct, DataReducer?.dataCoffee?.quantity]),
  );

  return (
    <View style={{flex: 1}}>
      <HeaderBottomTab textHeader={'Giỏ hàng'} backBtnEnable={true} />
      <View style={{flex: 1, backgroundColor: 'white'}}>
        {dataProduct?.length!=0 &&dataProduct.map(item=>
        {return(
          <TouchableOpacity onPress={() => navigation.navigate("ChooseMenu", { data: item?.dataProduct, quantity: item?.quantity, del:true})}
          style={{
            height: 70,
            borderBottomWidth: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: WIDTH,
            alignItems: 'center',
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <View
              style={{
                height: 26,
                width: 26,
                borderRadius: 6,
                borderWidth: 1,
                alignItems: 'center',
                justifyContent: 'center',
                marginHorizontal: 10,
              }}>
                <Text>{item?.quantity}</Text>
            </View>
            <Text style={{fontSize: 16, fontWeight: '900'}} numberOfLines={1}>
             {item?.dataProduct?.name}
            </Text>
          </View>
          <Text
            style={{
              marginRight: 10,
              fontWeight: '900',
              color: colors.BLUE_MAIN,
              fontSize: 18,
            }}>
            {convertToNumberCommas(item?.dataProduct?.gia)} đ
          </Text>
        </TouchableOpacity>
        )})}
        <View
          style={{
            height: 70,
            borderBottomWidth: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: WIDTH,
            alignItems: 'center',
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Text
              style={{fontSize: 16, fontWeight: '900', marginLeft: 10}}
              numberOfLines={1}>
              Tổng hóa đơn
            </Text>
          </View>
          <Text
            style={{
              marginRight: 10,
              fontWeight: '900',
              color: colors.BLUE_MAIN,
              fontSize: 18,
            }}>
            {convertToNumberCommas(price)} đ
          </Text>
        </View>
      </View>
      <View
        style={{
          height: 80,
          backgroundColor: colors.WHITE,
          width: WIDTH,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <TouchableOpacity onPress={() => navigation.navigate("OrderCoffee")}
          style={{
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
            height: 50,
            backgroundColor: colors.BLUE_MAIN,
            width: WIDTH / 2 - 32,
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 6,
            borderRadius: 16,
            flexDirection: 'row',
          }}>
          <AntDesign
            name={'plus'}
            color={colors.WHITE}
            size={size.REAL_SIZE_20}
          />
          <Text
            style={{
              color: 'white',
              fontSize: 16,
              fontWeight: '900',
              marginLeft: 5,
            }}>
            Thêm món
          </Text>
        </TouchableOpacity>
        <TouchableOpacity disabled={total==0? true: false}
        onPress={()=>navigation.navigate("EndOrder")}
          style={{
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
            height: 50,
            backgroundColor: colors.BLUE_MAIN,
            width: WIDTH / 2 - 32,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 16,
            flexDirection: 'row',
          }}>
          <AntDesign
            name={'check'}
            color={colors.MAIN_COLOR}
            size={size.REAL_SIZE_20}
          />
          <Text
            style={{
              color: colors.MAIN_COLOR,
              fontSize: 16,
              fontWeight: '900',
              marginLeft: 5,
            }}>
            Đặt Hàng
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Cart;
