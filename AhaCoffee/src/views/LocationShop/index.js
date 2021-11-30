import React, {useState, useEffect} from 'react';
import {FlatList, View, Text, TouchableOpacity} from 'react-native';
import {data} from '../../assets/data/dataMarker';
import {Header} from '../../components';
import {colors, size} from '../../shared/themes';
import HeaderBottomTab from '../../components/HeaderBottomTab';
import {WIDTH} from '../../shared/themes/size';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import LocationShopActions from '../../core/redux/actions/LocationShopActions';
import AntDesign from 'react-native-vector-icons/AntDesign';
const LocationShop = ({navigation}) => {
  const LocationShopReducer = useSelector(state => state.LocationShopReducer);
  const dispatch = useDispatch();
  const [listData, setListData] = useState(data);
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('LocationShopReducer', LocationShopReducer);
    var list = listData;
    var dataListArray = [];
    list.map(item => {
      let object = {
        ...item,
        check: false,
      };
      dataListArray.push(object);
    });
    dataListArray.map((item, index) => {
      LocationShopReducer?.dataShop?.map(item1 => {
        if (item1?.id == item?.id) dataListArray[index].check = true;
      });
    });
    setListData(dataListArray);
  }, [LocationShopReducer?.dataShop]);
  const onHandleChooseItem = value => {
    var dataListArray = [];
    listData.map((item, index) => {
      if (value?.id == item?.id) {
        let object = {
          ...item,
          check: !item?.check,
        };
        dataListArray.push(object);
      } else dataListArray.push(item);
    });
    setListData(dataListArray);
    setCount(count + 1);
  };
  const onHanldeAdd = () => {
    var dataListArray = [];
    listData.map((item, index) => {
      if (item?.check) {
        dataListArray.push(item);
      }
    });
    dispatch(LocationShopActions.updateListDataShop(dataListArray));
    navigation.goBack();
  };
  const renderItem = ({item, index}) => {
    return (
      <View style={styles.viewContainerItem}>
        <TouchableOpacity
          onPress={() => {
            onHandleChooseItem(item);
          }}>
          <Text style={styles.txtNameShop}>{item?.title}</Text>
          <Text style={styles.textAddress}>{item?.adreess}</Text>
          {item?.check && (
            <View style={{position: 'absolute', right: 10, top: 10}}>
              <AntDesign
                name={'checkcircleo'}
                color={colors.BLUE_MAIN}
                size={size.REAL_SIZE_20}
              />
            </View>
          )}
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={{flex: 1}}>
      <HeaderBottomTab
        textHeader={'Chọn cửa hàng thân quen'}
        backBtnEnable={true}
      />
      <FlatList
        data={listData}
        renderItem={renderItem}
        style={{marginBottom: 50}}
        extraData={listData}
      />
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
export default LocationShop;
