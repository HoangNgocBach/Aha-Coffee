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
  Alert,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Header} from '../../components';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {colors, size} from '../../shared/themes';
import {images} from '../../assets';
import {FlatList} from 'react-native-gesture-handler';
import Swiper from 'react-native-swiper';
import {HEIGHT, WIDTH} from '../../shared/themes/size';
import Feather from 'react-native-vector-icons/Feather';
import styles from './styles';
import HeaderBottomTab from '../../components/HeaderBottomTab';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {dataCard} from './dataCard';
import {useDispatch, useSelector} from 'react-redux';
import DataActions from '../../core/redux/actions/DataActions';
import {convertToNumberCommas} from '../../shared/utils/convertData';
import {messagesService} from '../../services/message-service';
import HistoryActions from '../../core/redux/actions/HistoryActions';
import UserActions from '../../core/redux/actions/UserActions';
const EndOrder = ({navigation, route}) => {
  const [count, setCount] = useState(-1);
  const dispatch = useDispatch();
  const DataReducer = useSelector(state => state.DataReducer);
  const UserReducer = useSelector(state => state.UserReducer);
  const HistoryReducer = useSelector(state => state.HistoryReducer);
  const [dataProduct, setDataProduct] = useState([]);
  const [price, setPrice] = useState(0);
  const [total, setTotal] = useState(0);
  const [phone, setPhone] = useState(DataReducer?.phone);
  const [name, setName] = useState(UserReducer?.userName ? UserReducer?.userName:'');
  const [address, setAddress] = useState(DataReducer?.addressCur ? DataReducer?.addressCur : UserReducer?.addressCurText ? UserReducer?.addressCurText : '')
  const [receipt, setReceipt] = useState('')
  useEffect(() => {
    console.log(DataReducer?.addressCur, UserReducer?.addressCurText )
    if (DataReducer?.dataCoffee.length &&DataReducer?.dataCoffee.length != 0) {
      setDataProduct(DataReducer?.dataCoffee);
      let price1 = 0;
      let total1 = 0;
      DataReducer?.dataCoffee.map(item => {
        total1 = total1 + Number(item?.quantity);
        price1 =
          price1 + Number(item?.dataProduct?.gia) * Number(item?.quantity);
      });
      setPrice(price1);
      setTotal(total1);
    }
  }, [DataReducer?.dataCoffee]);
  const onHanldePay = () => {
    if (name && phone && address){
    var dataHistory =[];
    if (HistoryReducer?.listDataHistory && HistoryReducer?.listDataHistory.length!=0){
      HistoryReducer?.listDataHistory.map(item => dataHistory.push(item))
    }
    const body={
      price: price,
      addressShop: DataReducer?.addressShop,
      time:new Date().toISOString(),
      Receipt:receipt,
      phoneNumberUser: phone,
      orderer:name,
      address:address,
      dataOrder: DataReducer?.dataCoffee
    }
    dataHistory.push(body)
    messagesService.ConfirmService(
      'Thanh to??n th??nh c??ng',
      '',
      'ok',
      '',
      () => {
        dispatch(DataActions.updateAddressCur(''));
        dispatch(HistoryActions.updateHistory(dataHistory));
        dispatch(DataActions.cleanData());
        dispatch(DataActions.updateDataCoffe([]));

        if(count ==0){
          dispatch(UserActions.updatePoint(UserReducer?.point - price / 1000))
        }
        navigation.navigate('Home');
      },
    );
    }else messagesService.NoticeService("T??n, s??? ??i???n tho???i ho???c ?????a ch??? kh??ng ???????c ????? tr???ng", "","ok")
  };

 const onHanldePayPoint =()=>{
   if (UserReducer?.point < price/1000){
     messagesService.ConfirmService(
       'B???n kh??ng ????? ??i???m ????? thanh to??n',
       '',
       'N???p ti???n',
       'Tho??t',
       () => {
         setCount(-1);
         navigation.navigate("Rechange")
       },
     );
   }
 }
  return (
    <View style={{flex: 1}}>
      <HeaderBottomTab textHeader={'Th??ng tin ?????t h??ng'} backBtnEnable={true} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text
          style={{
            fontSize: 16,
            color: colors.TEXT_COLOR,
            fontWeight: '900',
            margin: 10,
          }}>
          Ng?????i nh???n
        </Text>

        <View
          style={{
            height: 50,
            paddingHorizontal: 10,
            borderBottomWidth: 1,
            backgroundColor: colors.WHITE,
            flexDirection: 'row',
            borderColor: colors.GRAY,
            alignItems: 'center',
          }}>
          <Feather name={'user'} color={colors.GRAY} size={size.REAL_SIZE_20} />
          <TextInput
            style={{height: 50, marginHorizontal: 10}}
            placeholder={'T??n ng?????i nh???n...'}
            placeholderTextColor={colors.GRAY}
            value={name}
            onChangeText={(text)=>setName(text)}
          />
        </View>

        <View
          style={{
            height: 50,
            paddingHorizontal: 10,
            backgroundColor: colors.WHITE,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Feather
            name={'phone'}
            color={colors.GRAY}
            size={size.REAL_SIZE_20}
          />
          <TextInput
            style={{height: 50, marginHorizontal: 10}}
            placeholder={'S??? ??i???n tho???i...'}
            placeholderTextColor={colors.GRAY}
            onChangeText={text => setPhone(text)}
            value={phone}
          />
        </View>
        <View
          style={{
            height: 50,
            paddingHorizontal: 10,
            borderTopWidth: 1,
            backgroundColor: colors.WHITE,
            flexDirection: 'row',
            borderColor: colors.GRAY,
            alignItems: 'center',
          }}>
          <FontAwesome name={'map-marker'} color={colors.GRAY} size={size.REAL_SIZE_20} />
          <TextInput
            style={{ height: 50, marginHorizontal: 10 }}
            placeholder={'?????a ch??? nh???n...'}
            placeholderTextColor={colors.GRAY}
            value={address}
            onChangeText={(text) => setAddress(text)}
          />
        </View>
        <Text
          style={{
            fontSize: 16,
            color: colors.TEXT_COLOR,
            fontWeight: '900',
            margin: 10,
          }}>
          C???a h??ng
        </Text>

        <View
          style={{
            height: 80,
            paddingHorizontal: 10,
            backgroundColor: colors.WHITE,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Entypo name={'shop'} color={colors.GRAY} size={size.REAL_SIZE_20} />
          <View style={{marginHorizontal: 10}}>
            <Text style={styles.txtNameShop} numberOfLines={1}>
              {DataReducer?.addressShop?.title}
            </Text>
            <Text style={styles.textAddress}>
              {DataReducer?.addressShop?.adreess}
            </Text>
          </View>
        </View>
        <View
          style={{
            marginHorizontal: 20,
            borderRadius: 20,
            height: 80,
            borderColor: colors.BLUE_MAIN,
            borderWidth: 1,
            marginVertical: 20,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '600',
              alignSelf: 'center',
              lineHeight: 20,
            }}>
            S??? TI???N THANH TO??N
          </Text>
          <Text
            style={{
              fontSize: 24,
              fontWeight: '900',
              color: colors.BLUE_MAIN,
              alignSelf: 'center',
              lineHeight: 30,
            }}>
            {convertToNumberCommas(price)} ??
          </Text>
        </View>
        <Text
          style={{
            fontSize: 16,
            color: colors.TEXT_COLOR,
            fontWeight: '900',
            margin: 10,
          }}>
          Thanh to??n b???ng
        </Text>
        {dataCard.map((item, index) => {
          return (
            <TouchableOpacity
              onPress={() => { 
                setCount(index); setReceipt(item);
                if(index==0) onHanldePayPoint();
              }}
              style={{
                height: 70,
                paddingHorizontal: 10,
                backgroundColor: colors.WHITE,
                flexDirection: 'row',
                alignItems: 'center',
                borderBottomWidth: 0.5,
              }}>
              <Ionicons
                name={'ios-pricetags-sharp'}
                color={colors.BLUE_MAIN}
                size={size.REAL_SIZE_20}
              />
              <View style={{marginHorizontal: 10}}>
                <Text style={styles.txtNameShop} numberOfLines={1}>
                  {item?.name}
                </Text>
                <Text style={[styles.textAddress, {color: colors.GRAY}]}>
                  {item?.des}
                </Text>
              </View>
              {index == count ? (
                <AntDesign
                  name={'checkcircleo'}
                  color={colors.BLUE_MAIN}
                  size={size.REAL_SIZE_24}
                  style={{position: 'absolute', right: 10, top: 30}}
                />
              ) : null}
            </TouchableOpacity>
          );
        })}
        {count == -1 && (
          <Text
            style={{
              fontSize: 14,
              color: colors.RED,
              fontWeight: '900',
              margin: 10,
            }}>
            B???n c???n ch???n h??nh th???c thanh to??n
          </Text>
        )}
      </ScrollView>
      <TouchableOpacity
        onPress={() => onHanldePay()}
        disabled={count == -1 ? true : false}
        style={{
          height: 50,
          backgroundColor: count == -1 ? colors.GRAY : colors.BLUE_MAIN,
          width: WIDTH,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: 'white', fontSize: 18, fontWeight: '900'}}>
          Thanh to??n
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default EndOrder;
