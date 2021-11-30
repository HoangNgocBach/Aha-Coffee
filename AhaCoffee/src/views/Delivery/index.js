import { useState, useEffect } from 'react';
import React from 'react';
import {
    Button,
    ScrollView,
    TextInput,
    TouchableOpacity,
    Text,
    Alert,
} from 'react-native';
import { View } from 'react-native';

// import HeaderShowNavigation from '../../../components/Header'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import HeaderBottomTab from '../../components/HeaderBottomTab';
import colors from '../../shared/themes/colors';
import size, { WIDTH } from '../../shared/themes/size';
import { data } from '../../assets/data/dataMarker';
import { FlatList } from 'react-native-gesture-handler';
import styles from './styles';
import axios from 'axios';
import Geolocation from "@react-native-community/geolocation";
import Geocoder from 'react-native-geocoder';
const GOOGLE_API_KEY_LOCATION = "AIzaSyA66KwUrjxcFG5u0exynlJ45CrbrNe3hEc";
import { useDispatch, useSelector } from 'react-redux';
import DataActions from '../../core/redux/actions/DataActions';
const Delivery = ({ navigation }) => {
    const dispatch = useDispatch();
    const [address, setAddress] = useState([]);
    const searchDiaChi = async text => {
        if (text.length > 6) {
            // Geocoder.fallbackToGoogle(GOOGLE_API_KEY_LOCATION);
            const res = await Geocoder.geocodeAddress(text);
            if (res && res.length != 0) {
                console.log('res', res)
                setAddress(res);
            }
            else setAddress([])
        }
    };
    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity onPress={() => {
                dispatch(DataActions.updateDataAddressShop({
                    id: '1',
                    coordinate: {
                        latitude: 21.0629386,
                        longitude: 105.8319638,
                    },
                    title: '136 Vũ Phạm Hàm',
                    adreess: 'Cầu giấy, Hà Nội',
                    phone: '0387819900',}))
                dispatch(DataActions.updateAddressCur(item?.formattedAddress))
                navigation.navigate("OrderCoffee", { dataAddress: item?.formattedAddress})}}
             style={styles.buttonChooseAddress}>
                <FontAwesome
                    name={'map-marker'}
                    size={size.REAL_SIZE_20}
                    color={colors.BLUE_MAIN}
                    style={{marginRight: 12 }}
                />
                <Text style={styles.txtAddress} numberOfLines={2}>{item?.formattedAddress}</Text>
            </TouchableOpacity>
        );
    };
    return (
        <View style={{ flex: 1 }}>
            <HeaderBottomTab textHeader={"Đặt hàng online"} backBtnEnable={true}/>
            <View
                style={styles.viewSearch}>
                <FontAwesome
                    name={'search'}
                    size={size.REAL_SIZE_18}
                    color={colors.GRAY}
                    style={{ marginLeft: size.REAL_SIZE_20, marginTop: size.REAL_SIZE_14 }}
                />
                <TextInput
                    style={{ fontSize: size.REAL_SIZE_16, marginLeft: size.REAL_SIZE_10, width: WIDTH/2 }}
                    placeholder="Địa chỉ"
                    onChangeText={text => searchDiaChi(text)}
                />
            </View>
            {/* <TouchableOpacity
        style={{height:te 80, width: 80}}
        onPress={() => {
          searchDiaChi();
        }}>
        <Text>Tim kiem</Text>
      </TouchableOpacity> */}
      {address.length!=0?
            <FlatList data={address} renderItem={renderItem} style={{marginTop:6}} />:null}
        </View>
    );
};
export default Delivery;
