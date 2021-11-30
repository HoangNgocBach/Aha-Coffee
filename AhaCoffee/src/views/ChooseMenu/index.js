import React, {useState, useEffect} from 'react';
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
import {convertToNumberCommas} from '../../shared/utils/convertData';
import {useDispatch, useSelector} from 'react-redux';
import DataActions from '../../core/redux/actions/DataActions';
const ChooseMenu = ({navigation, route}) => {
  const dispatch = useDispatch();
  const DataReducer = useSelector(state => state.DataReducer);
  const UserReducer = useSelector(state => state.UserReducer);
  const [data1, setData1] = useState(
    DataReducer?.dataCoffee ? DataReducer?.dataCoffee : [],
  );
  const [count, setCount] = useState(
    route?.params?.quantity ? route?.params?.quantity : 0,
  );

  const onHanldeAdd = () => {
    let data = [];
    const body = {
      quantity: count,
      dataProduct: route?.params?.data,
    };
    let countProduct = 0;
    if (data1.length != 0) {
      console.log("data1", data1)
      data1.map((item, index) => {
        console.log("data1", data1)
        console.log(route?.params?.data?.id);
        if (item?.dataProduct?.id == route?.params?.data?.id) {
          console.log("data1", data1)
          const body1 = {
            quantity: route?.params?.del
              ? Number(count)
              : Number(item?.quantity) + Number(count),
            dataProduct: item?.dataProduct,
          };
          if (count != 0) {
            data.push(body1);
          }
        } else {
          countProduct++;
          if (item?.quantity != 0) { data.push(item);}
           
        }
      });
    }
    if (data1.length != 0 && route?.params?.del&&countProduct == data1.length){
      data.push(body);
    }
    if (!route?.params?.del && countProduct == data1.length){
      data.push(body);
    }
    console.log(data)
    dispatch(DataActions.updateDataCoffe(data));
    navigation.goBack();
  };
  return (
    <View style={{flex: 1}}>
      <HeaderBottomTab textHeader={'Thêm món'} backBtnEnable={true} />
      <View
        style={{
          width: WIDTH,
          height: WIDTH / 2.5,
          padding: 10,
          backgroundColor: colors.WHITE,
          flexDirection: 'row',
        }}>
        <Image source={route?.params?.data?.image1} style={styles.imageItem} />
        <View style={{justifyContent: 'space-between'}}>
          <Text
            style={{fontSize: 18, color: colors.BLUE_MAIN, fontWeight: '900'}}>
            {route?.params?.data?.name}{' '}
          </Text>
          <Text style={{fontSize: 14, color: colors.Text, fontWeight: '900'}}>
            {convertToNumberCommas(route?.params?.data?.gia)} đ
          </Text>
        </View>
      </View>
      <View style={{marginTop: 12, flex: 1, backgroundColor: 'white'}}>
        <Text
          style={{
            fontSize: 16,
            color: colors.TEXT_COLOR,
            fontWeight: '900',
            margin: 10,
          }}>
          Ghi chú
        </Text>
        <View style={{height: 50, marginHorizontal: 10, borderBottomWidth: 1}}>
          <TextInput
            style={{height: 50, marginHorizontal: 10, borderBottomWidth: 1}}
            placeholder={'Ghi chú...'}
            placeholderTextColor={colors.GRAY}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            margin: 60,
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              if (count > 0) setCount(count - 1);
            }}>
            <AntDesign
              name={'minussquareo'}
              color={colors.BLUE_MAIN}
              size={size.REAL_SIZE_30}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 24,
              color: colors.TEXT_COLOR,
              fontWeight: '900',
              margin: 10,
            }}>
            {count}
          </Text>
          <TouchableOpacity
            onPress={() => {
              setCount(count + 1);
            }}>
            <AntDesign
              name={'plussquareo'}
              color={colors.BLUE_MAIN}
              size={size.REAL_SIZE_30}
            />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => onHanldeAdd()}
        style={{
          height: 50,
          backgroundColor: colors.BLUE_MAIN,
          width: WIDTH,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: 'white', fontSize: 18, fontWeight: '900'}}>
          THÊM
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default ChooseMenu;
