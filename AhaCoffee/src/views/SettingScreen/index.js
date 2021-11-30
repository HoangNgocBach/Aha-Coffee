import React, {useState, useEffect, useRef, useCallback} from 'react';
import {
  TouchableOpacity,
  SafeAreaView,
  Text,
  Switch,
  ScrollView,
  Platform,
  Image,
  View,
  TextInput,
} from 'react-native';
import styles from './styles';
import Header from '../../components/Header';
import {images} from '../../assets';
import Colors from '../../shared/themes/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import SIZES, {WIDTH} from '../../shared/themes/size';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LocationShopActions from '../../core/redux/actions/LocationShopActions';
import DataActions from '../../core/redux/actions/DataActions';
import { useDispatch, useSelector } from 'react-redux';
import UserActions from '../../core/redux/actions/UserActions';
import { messagesService } from '../../services/message-service';
const SettingScreen = ({navigation}) => {
  const LocationShopReducer = useSelector(state => state.LocationShopReducer);
  const DataReducer = useSelector(state => state.DataReducer);
  const UserReducer = useSelector(state => state.UserReducer)
  const dispatch = useDispatch();
  const [listDataShop, setListDataShop] = useState(LocationShopReducer?.dataShop);
  const [count, setCount] = useState(0);
  const [phone, setPhone] = useState(UserReducer?.phone ? UserReducer?.phone:'')
  const [name, setName] = useState(UserReducer?.userName ? UserReducer?.userName : '')
  const [address, setAddress] = useState(UserReducer?.addressCurText ? UserReducer?.addressCurText : '')
  useEffect(() => {
    setListDataShop(LocationShopReducer?.dataShop);
  }, [LocationShopReducer?.dataShop]);

  const DeleteShop =(value)=>{
    const dataList = listDataShop.filter(item=>item?.id!=value?.id)
    dispatch(LocationShopActions.updateListDataShop(dataList))
  }

  const onHanldChooseShopOrder =(value)=>{
    navigation.navigate('OrderCoffee', { dataAddress: value?.title });
    dispatch(DataActions.updateDataAddressShop(value))
  }
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.WHITE}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={styles.viewAvatar}>
            <Image
              source={images?.logo}
              style={{height: 49, width: 49, borderRadius: 4}}
            />
            <TouchableOpacity style={styles.editAvatar}>
              <Entypo
                name={'pencil'}
                size={SIZES.REAL_SIZE_12}
                color={Colors.LIGHT_PLACEHOLDER}
              />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={{color: 'yellow', fontSize: 16}}>
              {UserReducer?.point} <Text style={{fontSize: 16, color: Colors.GRAY}}>/5000</Text>
            </Text>
          </View>
        </View>
        <View style={styles.viewMember}>
          <View style={styles.startMember}>
            <AntDesign
              name={'star'}
              size={SIZES.REAL_SIZE_14}
              color={Colors.LIGHT_PLACEHOLDER}
            />
            <Text style={{marginHorizontal: 3}}>Member</Text>
          </View>
          <View style={styles.startMember}>
            <AntDesign
              name={'star'}
              size={SIZES.REAL_SIZE_14}
              color={'yellow'}
            />
            <Text style={{marginHorizontal: 3}}>VIP</Text>
          </View>
          <View style={styles.startMember}>
            <FontAwesome5
              name={'chess-king'}
              size={SIZES.REAL_SIZE_14}
              color={'yellow'}
            />
            <Text style={{marginHorizontal: 3}}>VVIP</Text>
          </View>
        </View>
        <View style={styles.viewPoint}>
          <View style={styles.viewBuyPoint}>
            <Text style={styles.TxtBuyPoint}>{ UserReducer?.point}</Text>
            <Text style={styles.TxtDesPoint}>ĐIỂM MUA</Text>
          </View>
          <View style={styles.viewBuyPoint}>
            <Text style={styles.TxtBuyPoint}>0</Text>
            <Text style={styles.TxtDesPoint}>ĐIỂM TẶNG</Text>
          </View>
        </View>
        <View style={styles.viewLine} />
        <View style={styles.viewWrapProfile}>
          <Text
            style={[
              styles.txtTitleProfile,
              {fontSize: 16, color: Colors.BLUE_MAIN},
            ]}>
            Thông tin tài khoản
          </Text>
          <View style={styles.viewIcons}>
            <AntDesign
              name={'user'}
              size={SIZES.REAL_SIZE_20}
              style={{marginLeft: SIZES.REAL_SIZE_12}}
            />
            <TextInput style={styles.textInput} placeholder="Tên của ban... "
             onChangeText={(text) => {
              setName(text);
              dispatch(UserActions.updateUserName(text))
            }}
              value={name}/>
          </View>
          <View style={[styles.viewIcons, {marginTop: 12}]}>
            <FontAwesome
              name={'mobile-phone'}
              size={SIZES.REAL_SIZE_30}
              style={{marginLeft: SIZES.REAL_SIZE_12, marginRight: 6}}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Số điện thoại... "
              onChangeText={(text)=>{setPhone(text);
                dispatch(UserActions.updatePhone(text))
              }}
              value={phone}
            />
          </View>
          <View style={[styles.viewIcons, {marginTop: 12}]}>
            <FontAwesome
              name={'map-marker'}
              size={SIZES.REAL_SIZE_28}
              style={{marginLeft: SIZES.REAL_SIZE_12, marginRight: 4}}
            />
            <TextInput style={styles.textInput} placeholder="Địa chỉ... " 
              value={address}
              onChangeText={(text) => {
                setAddress(text);
                dispatch(UserActions.updateAddressText(text));
              }}/>
          </View>
          {/* <TouchableOpacity style={[styles.viewIcons, { marginTop: 12, backgroundColor:Colors.BLUE_MAIN,justifyContent:'center', borderRadius: 20 }]}>
          <Text style={{ color: Colors.WHITE, fontSize: 16, lineHeight: 30 }}>LƯU</Text>
        </TouchableOpacity> */}
        </View>
        <View style={styles.viewLine} />
        <View style={styles.viewAddress}>
          <Text
            style={{color: Colors.TEXT_COLOR, fontSize: 14, fontWeight: '700'}}>
            Địa điểm thân quen
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("LocationShop")}>
            <Entypo
              name={'plus'}
              size={SIZES.REAL_SIZE_28}
              style={styles.iconAddress}
            />
          </TouchableOpacity>
        </View>
        {listDataShop.map((item, index)=>{
          return(
            <TouchableOpacity onPress={() => onHanldChooseShopOrder(item)}
              style={[
                styles.viewIcons,
                styles.buttonChange,
                { borderBottomWidth: 0.25, height: 70 },
              ]}>
              <View
                style={{ flexDirection: 'row', alignItems: 'center' }}>
                <FontAwesome
                  name={'map-marker'}
                  size={SIZES.REAL_SIZE_20}
                  style={{ marginRight: SIZES.REAL_SIZE_8, color: Colors.GRAY }}
                />
                <View>
                  <Text
                    style={{
                      color: Colors.BLUE_MAIN,
                      fontSize: 16,
                      fontWeight: 'bold'
                    }}>
                    {item?.title}
                  </Text>
                  <Text style={[styles.txtTitleProfile, { marginBottom: 0 }]}>
                    {item?.adreess}
                  </Text>
                </View>
              </View>
              <TouchableOpacity onPress={() => { DeleteShop(item) }} >
                <AntDesign
                  name={'delete'}
                  size={SIZES.REAL_SIZE_18}
                  style={{ color: Colors.GRAY, marginRight: 10 }}
                />
              </TouchableOpacity>

            </TouchableOpacity>
          )
        })
         
        }

        <View style={styles.viewLine} />
        <View style={styles.viewWrapProfile}>
          <Text
            style={[
              styles.txtTitleProfile,
              {fontSize: 16, color: Colors.BLUE_MAIN},
            ]}>
            Lịch sử
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("HistoryOrder")}
            style={[
              styles.viewIcons,
              styles.buttonChange,
              {borderTopWidth: 0},
            ]}>
            <View style={{flexDirection: 'row'}}>
              <Feather
                name={'rotate-ccw'}
                size={SIZES.REAL_SIZE_20}
                style={{marginRight: SIZES.REAL_SIZE_8, color: Colors.GRAY}}
              />
              <Text style={[styles.txtTitleProfile, { marginBottom: 0 }]} >
                Giao dịch
              </Text>
            </View>
            <AntDesign
              name={'right'}
              size={SIZES.REAL_SIZE_18}
              style={{marginLeft: SIZES.REAL_SIZE_12, color: Colors.BLUE_MAIN}}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Receipt")}
            style={[
              styles.viewIcons,
              styles.buttonChange,
              {borderBottomWidth: 0},
            ]}>
            <View style={{ flexDirection: 'row' }}>
              <MaterialIcons
                name={'list-alt'}
                size={SIZES.REAL_SIZE_20}
                style={{marginRight: SIZES.REAL_SIZE_8, color: Colors.GRAY}}
              />
              <Text style={[styles.txtTitleProfile, {marginBottom: 0}]}>
                Hóa đơn
              </Text>
            </View>
            <AntDesign
              name={'right'}
              size={SIZES.REAL_SIZE_18}
              style={{marginLeft: SIZES.REAL_SIZE_12, color: Colors.BLUE_MAIN}}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.viewLine} />
        <View style={styles.viewWrapProfile}>
          <TouchableOpacity onPress={() => {
            messagesService.NoticeService(
              'Thay đổi mã PIN thành công',
              '',
              '', "ok"
            );
          }}
            style={[
              styles.viewIcons,
              styles.buttonChange,
              {borderTopWidth: 0},
            ]}>
            <View 
            style={{flexDirection: 'row'}}>
              <AntDesign
                name={'Safety'}
                size={SIZES.REAL_SIZE_20}
                style={{marginRight: SIZES.REAL_SIZE_8, color: Colors.GRAY}}
              />
              <Text style={[styles.txtTitleProfile, {marginBottom: 0}]}>
                Thiết lập PIN
              </Text>
            </View>
            <AntDesign
              name={'right'}
              size={SIZES.REAL_SIZE_18}
              style={{marginLeft: SIZES.REAL_SIZE_12, color: Colors.BLUE_MAIN}}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            messagesService.NoticeService(
              'Thay đổi ngôn ngữ thành công',
              '',
              '', "ok"
            );
          }}
            style={[
              styles.viewIcons,
              styles.buttonChange,
              {borderBottomWidth: 0},
            ]}>
            <View 
              style={{flexDirection: 'row', alignItems: 'center'}}>
              <AntDesign
                name={'earth'}
                size={SIZES.REAL_SIZE_20}
                style={{marginRight: SIZES.REAL_SIZE_8, color: Colors.GRAY}}
              />
              <View>
                <Text
                  style={{
                    color: Colors.GRAY,
                    fontSize: 12,
                  }}>
                  Đổi ngôn ngữ
                </Text>
                <Text style={[styles.txtTitleProfile, {marginBottom: 0}]}>
                  Tiếng việt
                </Text>
              </View>
            </View>

            <Feather
              name={'rotate-ccw'}
              size={SIZES.REAL_SIZE_18}
              style={{marginLeft: SIZES.REAL_SIZE_12, color: Colors.BLUE_MAIN}}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.viewLine} />
        <View style={styles.viewWrapProfile}>
          <TouchableOpacity
            style={[
              styles.viewIcons,
              styles.buttonChange,
              {borderTopWidth: 0},
            ]}>
            <TouchableOpacity
              style={{flexDirection: 'row', alignItems: 'center'}}>
              <Entypo
                name={'users'}
                size={SIZES.REAL_SIZE_20}
                style={{marginRight: SIZES.REAL_SIZE_8, color: Colors.GRAY}}
              />

              <View>
                <Text
                  style={{
                    color: Colors.GRAY,
                    fontSize: 12,
                  }}>
                  Số tài khoản
                </Text>
                <Text style={[styles.txtTitleProfile, {marginBottom: 0}]}>
                  12345
                </Text>
              </View>
            </TouchableOpacity>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.viewIcons,
              styles.buttonChange,
              {borderBottomWidth: 0},
            ]}>
            <TouchableOpacity
              style={{flexDirection: 'row', alignItems: 'center'}}>
              <Entypo
                name={'tools'}
                size={SIZES.REAL_SIZE_20}
                style={{marginRight: SIZES.REAL_SIZE_8, color: Colors.GRAY}}
              />
              <View>
                <Text
                  style={{
                    color: Colors.GRAY,
                    fontSize: 12,
                  }}>
                  Phiên bản ứng dụng
                </Text>
                <Text style={[styles.txtTitleProfile, {marginBottom: 0}]}>
                  1.0.0
                </Text>
              </View>
            </TouchableOpacity>
            <AntDesign
              name={'android'}
              size={SIZES.REAL_SIZE_18}
              style={{marginLeft: SIZES.REAL_SIZE_12, color: Colors.BLUE_MAIN}}
            />
          </TouchableOpacity>
        </View>
        <View style={[styles.viewLine, {height: 150, paddingHorizontal: 30}]}>
          <TouchableOpacity style={[styles.viewIcons, styles.buttonCall]}>
            <Feather
              name={'phone'}
              size={SIZES.REAL_SIZE_18}
              style={{
                marginLeft: SIZES.REAL_SIZE_12,
                color: Colors.WHITE,
                marginRight: 6,
              }}
            />
            <Text style={{color: Colors.WHITE, fontSize: 12, lineHeight: 30}}>
              TỔNG ĐÀI CHĂM SÓC KHÁCH HÀNG
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SettingScreen;
