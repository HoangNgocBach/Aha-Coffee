import React from 'react';
import { FlatList, View, Text, TouchableOpacity } from 'react-native';
import { data } from '../../assets/data/dataMarker';
import { Header } from '../../components';
import { colors, size } from '../../shared/themes';
import HeaderBottomTab from '../../components/HeaderBottomTab';
import styles from './styles';
import { useDispatch } from 'react-redux';
import DataActions from '../../core/redux/actions/DataActions';
const TakeAway = ({ navigation }) => {
  const dispatch = useDispatch();
    const renderItem = ({ item, index }) => {
        return (
            <View
                style={styles.viewContainerItem}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('OrderCoffee', { dataAddress: item?.title});
                        dispatch(DataActions.updateDataAddressShop(item))
                    }}>
                    <Text
                        style={styles.txtNameShop}>
                        {item?.title}
                    </Text>
                    <Text
                        style={styles.textAddress}>
                        {item?.adreess}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    };
    return (
        <View>
            <HeaderBottomTab textHeader={"Chọn cửa hàng"} backBtnEnable={true} />
            <FlatList data={data} renderItem={renderItem} />
        </View>
    );
};
export default TakeAway;
