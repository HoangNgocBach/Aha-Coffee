import React, {useState, useEffect, useCallback} from 'react';
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
import {useDispatch, useSelector} from 'react-redux';
import DataActions from '../../core/redux/actions/DataActions';
import {convertToNumberCommas} from '../../shared/utils/convertData';
import {useFocusEffect, useIsFocused} from '@react-navigation/native';
import moment from 'moment';
const DetailHistory = ({navigation, route}) => {
  const dispatch = useDispatch();
  const DataReducer = useSelector(state => state.DataReducer);
  const [dataProduct, setDataProduct] = useState([]);
  const [price, setPrice] = useState(0);
  const [total, setTotal] = useState(0);
  const isFocused = useIsFocused();

  useFocusEffect(
    useCallback(() => {
      if (isFocused) {
        if (
          route?.params?.data?.dataOrder &&
          route?.params?.data?.dataOrder.length != 0
        ) {
          const dataOrderHis = route?.params?.data?.dataOrder;
          setDataProduct(dataOrderHis);
          let price1 = 0;
          let total1 = 0;
          dataOrderHis.map(item => {
            total1 = total1 + Number(item?.quantity);
            price1 =
              price1 + Number(item?.dataProduct?.gia) * Number(item?.quantity);
          });
          setPrice(price1);
          setTotal(total1);
        } else {
          setDataProduct([]);
          setPrice(0);
          setTotal(0);
        }
      }
    }, [isFocused]),
  );
  const dataDetail = [
    {
      id: 1,
      title: 'Tên người nhận',
      des: route?.params?.data?.orderer,
    },
    {
      id: 2,
      title: 'Địa chỉ người nhận',
      des: route?.params?.data?.address,
    },
    {
      id: 3,
      title: 'Số điện thoại',
      des: route?.params?.data?.phoneNumberUser,
    },
    {
      id: 4,
      title: 'Địa điểm đặt hàng',
      des: route?.params?.data?.addressShop?.title,
    },
    {
      id: 6,
      title: 'Thời gian',
      des: route?.params?.data?.time
        ? moment(route?.params?.data?.time).format('DD-MM-YYYY hh:mm')
        : '',
    },
    {
      id: 6,
      title: 'Thánh toán bằng',
      des: route?.params?.data?.Receipt?.name,
    },
    {
      id: 5,
      title: 'Trạng thái',
      des: 'Thành công',
    },
  ];
  return (
    <View style={{flex: 1}}>
      <HeaderBottomTab textHeader={'Chi tiết đơn hàng'} backBtnEnable={true} />
      <ScrollView style={{flex: 1}}>
        <View
          style={{
            borderRadius: 10,
            backgroundColor: 'white',
            margin: 10,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
          }}>
          {dataDetail?.map(item => {
            return (
              <View style={{marginVertical: 8}}>
                <Text
                  style={{
                    fontSize: 16,
                    marginLeft: 10,
                    fontWeight: '600',
                    color: colors.BLUE_MAIN,
                  }}>
                  {item?.title}:{' '}
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: '900',
                      marginLeft: 0,
                      color: colors.TEXT_COLOR,
                    }}>
                    {item?.des}
                  </Text>
                </Text>
              </View>
            );
          })}
        </View>

        {dataProduct?.length != 0 &&
          dataProduct.map(item => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('ChooseMenu', {
                    data: item?.dataProduct,
                    quantity: item?.quantity,
                    del: true,
                  })
                }
                style={{
                  height: 70,
                  borderBottomWidth: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: WIDTH - 20,
                  alignItems: 'center',
                  marginHorizontal: 10,
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
                    }}>
                    <Text>{item?.quantity}</Text>
                  </View>
                  <Text
                    style={{fontSize: 16, fontWeight: '900', marginLeft: 10}}
                    numberOfLines={1}>
                    {item?.dataProduct?.name}
                  </Text>
                </View>
                <Text
                  style={{
                    fontWeight: '900',
                    color: colors.BLUE_MAIN,
                    fontSize: 18,
                  }}>
                  {convertToNumberCommas(item?.dataProduct?.gia)} đ
                </Text>
              </TouchableOpacity>
            );
          })}
        <View
          style={{
            height: 70,
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: WIDTH,
            alignItems: 'center',
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Text
              style={{fontSize: 16, fontWeight: '900', marginLeft: 10}}
              numberOfLines={1}>
              TỔNG HÓA ĐƠN
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
      </ScrollView>
    </View>
  );
};
export default DetailHistory;
