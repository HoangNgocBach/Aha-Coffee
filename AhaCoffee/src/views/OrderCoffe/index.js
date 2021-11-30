import React, { useState, useEffect} from 'react';
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
import {WIDTH} from '../../shared/themes/size';
import {ListMenu, dataNews, dataCafe} from './data';
import styles from './styles';
import HeaderBottomTab from '../../components/HeaderBottomTab';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { convertToNumberCommas } from '../../shared/utils/convertData';
import { useDispatch, useSelector } from 'react-redux';
import DataActions from '../../core/redux/actions/DataActions';
const OrderCoffee = ({navigation, route}) => {
  const [status, setStatus] = useState('Tất cả');
  const setStatusFilter = status => {
    setStatus(status);
  };
  const dispatch = useDispatch();
  const DataReducer = useSelector(state => state.DataReducer);
  const [dataProduct, setDataProduct] = useState([]);
  const [price, setPrice] = useState(0);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    if (DataReducer?.dataCoffee && DataReducer?.dataCoffee.length!=0){
      setDataProduct(DataReducer?.dataCoffee);
      let price1 =0;
      let total1= 0;
      DataReducer?.dataCoffee.map(item =>{
        total1 = total1 + Number(item?.quantity);
        price1 = price1 + Number(item?.dataProduct?.gia) * Number(item?.quantity);
      })
      setPrice(price1);
      setTotal(total1);
    }
    else {
      setDataProduct([]);
      setPrice(0);
      setTotal(0);
  }
  }, [DataReducer?.dataCoffee])

  const renderItem = ({item, index}) => {
    return (
      <View style={styles.containerItem}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ChooseMenu', {data: item});
          }}
          style={styles.buttonItem}>
          <Image source={item.image1} style={styles.imageItem} />
          <Text style={styles.txtName}>{item.name}</Text>
          <View style={styles.viewIconItem}>
            <View>
              <Text style={styles.txtPrice}>{convertToNumberCommas(item?.gia)} đ</Text>
            </View>
            <AntDesign
              name={'plussquareo'}
              color={colors.BLUE_MAIN}
              size={size.REAL_SIZE_24}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  const renderItems = ({item, index}) => {
    return (
      <View style={[styles.containerItem, {backgroundColor: 'transparent'}]}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ChooseMenu', {data: item});
          }}
          style={[
            styles.buttonItem,
            {width: WIDTH / 2 - 20, marginBottom: 10},
          ]}>
          <Image
            source={item.image1}
            style={[
              styles.imageItem,
              {width: WIDTH / 2 - 20, height: WIDTH / 2 - 40},
            ]}
          />
          <Text style={styles.txtName}>{item?.name}</Text>
          <View style={styles.viewIconItem}>
            <View>
              <Text style={styles.txtPrice}>{convertToNumberCommas(item?.gia)} đ</Text>
            </View>
            <AntDesign
              name={'plussquareo'}
              color={colors.BLUE_MAIN}
              size={size.REAL_SIZE_24}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  const renderItemSectionList = e => {
    if (e.status != 'Tất cả') {
      return (
        <View>
          <Text style={styles.textstyles}>{e.status} </Text>
          <FlatList
            data={dataCafe}
            renderItem={renderItems}
            numColumns={2}
            horizontal={false}
          />
        </View>
      );
    }
  };

  return (
    <View style={{flex: 1}}>
      <View style={styles.containerSearch}>
        <HeaderBottomTab
          textHeader={'Chọn món'}
          backBtnEnable={true}
          buttonRight={
            <View
              style={{
                width: WIDTH / 2,
                height: 50,
                marginLeft: -WIDTH / 2,
                justifyContent: 'center',
              }}>
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{
                  height: 30,
                  borderRadius: 30,
                  backgroundColor: 'white',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <FontAwesome
                  name={'map-marker'}
                  size={size.REAL_SIZE_20}
                  color={colors.BLUE_MAIN}
                  style={{marginRight: 3, marginLeft: 12}}
                />
                <Text
                  style={{marginRight: 20, color: 'black'}}
                  numberOfLines={1}>
                  {route?.params?.dataAddress ? route?.params?.dataAddress : ''}
                </Text>
              </TouchableOpacity>
            </View>
          }
        />
        <View style={styles.viewSearch}>
          <TextInput placeholder="Tìm kiếm" style={{}} />
          <AntDesign
            name="search1"
            size={size.REAL_SIZE_16}
            style={{marginTop: size.REAL_SIZE_2}}
          />
        </View>
        <ScrollView
          horizontal
          style={{marginTop: size.REAL_SIZE_14}}
          showsHorizontalScrollIndicator={false}>
          {ListMenu.map(e => {
            return (
              <TouchableOpacity
                style={{
                  marginHorizontal: size.REAL_SIZE_15,
                  borderBottomColor: colors.MAIN_COLOR,
                  borderBottomWidth: status === e.status ? 3 : 0,
                }}
                onPress={() => setStatusFilter(e.status)}>
                <Text
                  style={{
                    fontSize: size.REAL_SIZE_16,
                    color: status === e.status ? colors.WHITE : colors.Grey200,
                  }}>
                  {e.status}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
      {status !== 'Tất cả' ? (
        renderItemSectionList({status: status})
      ) : (
          <ScrollView showsVerticalScrollIndicator={false} style={{ marginBottom: dataProduct?.length > 0 && total > 0? 50:0}}>
          <View>
            <View
              style={{
                backgroundColor: colors.WHITE,
              }}>
              <Text style={styles.textstyles}>Món mới</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <FlatList
                showsHorizontalScrollIndicator={false}
                data={dataNews}
                horizontal
                renderItem={renderItem}
              />
            </View>
            <View style={styles.viewNews}>
              <Text style={styles.txtNewsN}>N</Text>
            </View>
          </View>
          {ListMenu.map(e => renderItemSectionList(e))}
        </ScrollView>
      )}
      {dataProduct?.length > 0 && total>0?
        <TouchableOpacity onPress={() => navigation.navigate("Cart")}
       style={{height: 50, width: WIDTH, position:'absolute', bottom:0, backgroundColor:colors.BLUE_MAIN, flexDirection:"row", justifyContent:'space-between', alignItems:'center', paddingHorizontal:20}}>
<View>
            <AntDesign
              name={'shoppingcart'}
              color={colors.WHITE}
              size={size.REAL_SIZE_30}
            />
            <View style={{position:'absolute', top:-5, right: -5, width: 20, height: 20, borderRadius: 20, backgroundColor: colors.RED, justifyContent:'center', alignItems:'center'}}>
<Text style={{color:colors.WHITE, fontSize:12}}>{`${total}`}</Text>
            </View>

</View>
          <Text style={{ color: colors.WHITE, fontSize: 24, fontWeight:'800' }}>{`${convertToNumberCommas(price)}`} đ</Text>
      </TouchableOpacity>:null}
    </View>
  );
};
export default OrderCoffee;
