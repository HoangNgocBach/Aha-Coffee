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
import UserActions from '../../core/redux/actions/UserActions';
const Rechange = ({navigation, route}) => {
  const [count, setCount] = useState(-1);
  const dispatch = useDispatch();
  const DataReducer = useSelector(state => state.DataReducer);
  const UserReducer = useSelector(state => state.UserReducer);
  const HistoryReducer = useSelector(state => state.HistoryReducer);
  const [dataProduct, setDataProduct] = useState([]);
  const [price, setPrice] = useState(100);
  const onHanldePay = () => {
    messagesService.ConfirmService(
      'Thanh toán thành công',
      '',
      'ok',
      '',
      () => {
        dispatch(UserActions.updatePoint(UserReducer?.point+ price));
        navigation.goBack();
      },
    );
  };

  return (
    <View style={{flex: 1}}>
      <HeaderBottomTab textHeader={'Nạp điểm'} backBtnEnable={true} />
      <ScrollView showsVerticalScrollIndicator={false}>
        
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
              marginBottom:10
            }}>
            SỐ TIỀN NẠP
          </Text>
          <View style={{flexDirection:'row', justifyContent:'space-around'}}>
            <Text onPress={() => setPrice(100)}
              style={{
                fontSize: 18,
                fontWeight: '900',
                color:price ==100? colors.BLUE_MAIN:colors.GRAY,
                alignSelf: 'center',
                lineHeight: 30,
              }}>
              {convertToNumberCommas(100000)} Đ
            </Text>
   
            <Text onPress={() => setPrice(200)}
            style={{
              fontSize: 18,
              fontWeight: '900',
              color: price == 200 ? colors.BLUE_MAIN : colors.GRAY,
              alignSelf: 'center',
              lineHeight: 30,
            }}>
              {convertToNumberCommas(200000)} Đ
          </Text> 
            <Text onPress={() => setPrice(500)}
            style={{
              fontSize: 18,
              fontWeight: '900',
              color: price == 500 ? colors.BLUE_MAIN : colors.GRAY,
              alignSelf: 'center',
              lineHeight: 30,
            }}>
              {convertToNumberCommas(500000)} Đ
          </Text>
          </View>
        </View>
        <Text
          style={{
            fontSize: 16,
            color: colors.TEXT_COLOR,
            fontWeight: '900',
            margin: 10,
          }}>
          Thanh toán bằng
        </Text>
        {dataCard.map((item, index) => {
          return (
            <TouchableOpacity
              onPress={() => { 
                setCount(index);
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
            Bạn cần chọn hình thức thanh toán
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
         Nạp tiền
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default Rechange;
