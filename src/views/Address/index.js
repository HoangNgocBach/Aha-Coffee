import React, {useState, useEffect, useRef, useCallback} from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {
  TouchableOpacity,
  SafeAreaView,
  Text,
  Switch,
  ScrollView,
  Platform,
  View,
  Animated,
  Dimensions,
  TextInput,
} from 'react-native';
import styles from './styles';
import GetLocation from 'react-native-get-location';
import size, {WIDTH} from '../../shared/themes/size';
import Colors from '../../shared/themes/colors';

import {data} from '../../assets/data/dataMarker';
import {images} from '../../assets';
import {svgs} from '../../assets';
import {SvgXml} from 'react-native-svg';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch } from 'react-redux';
import DataActions from '../../core/redux/actions/DataActions';
const {width, height} = Dimensions.get('window');
const CARD_HEIGHT = 110;
const CARD_WIDTH = width * 0.8;
const SPACING_FOR_CARD_INSET = width * 0.1 - 10;
const dataTotal = [
  {id: 1, title: 'HÀ NỘI', isShow: false, data: data},
  {id: 2, title: 'HẢI PHÒNG', isShow: false, data: data},
  {id: 3, title: 'HẢI DƯƠNG', isShow: false, data: data},
];
const Address = ({navigation}) => {
  const dispatch = useDispatch();
  const [isScreen, setIsScreen] = useState('maps');
  const initialMapState = {
    markers: data,
  };
  const [state, setState] = React.useState(initialMapState);
  const [dataCity, setDataCity] = useState(dataTotal);
  const [isChooesCar, setIsChooseCar] = useState(true);

  let mapIndex = 0;
  let mapAnimation = new Animated.Value(0);

  const [regionCur, setRegionCur] = useState({
    latitude: 21.0629386,
    longitude: 105.8319638,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  });

  useEffect(() => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
      .then(location => {
        console.log(location);
        setRegionCur({
          ...regionCur,
          latitude: location?.latitude,
          longitude: location?.longitude,
        });
      })
      .catch(error => {
        const {code, message} = error;
        console.warn(code, message);
      });
  }, []);

  useEffect(() => {
    mapAnimation.addListener(({value}) => {
      let index = Math.floor(value / CARD_WIDTH + 0.3); // animate 30% away from landing on the next item
      if (index >= state.markers.length) {
        index = state.markers.length - 1;
      }
      if (index <= 0) {
        index = 0;
      }

      clearTimeout(regionTimeout);

      const regionTimeout = setTimeout(() => {
        if (mapIndex !== index) {
          mapIndex = index;
          const {coordinate} = state.markers[index];
          _map.current.animateToRegion(
            {
              ...coordinate,
              latitudeDelta: regionCur.latitudeDelta,
              longitudeDelta: regionCur.longitudeDelta,
            },
            350,
          );
        }
      }, 10);
    });
  });

  const interpolations = state.markers.map((marker, index) => {
    const inputRange = [
      (index - 1) * CARD_WIDTH,
      index * CARD_WIDTH,
      (index + 1) * CARD_WIDTH,
    ];

    const scale = mapAnimation.interpolate({
      inputRange,
      outputRange: [1, 1.5, 1],
      extrapolate: 'clamp',
    });

    return {scale};
  });

  const onMarkerPress = mapEventData => {
    const markerID = mapEventData._targetInst.return.key;

    let x = markerID * CARD_WIDTH + markerID * 20;
    if (Platform.OS === 'ios') {
      x = x - SPACING_FOR_CARD_INSET;
    }

    _scrollView.current.scrollTo({x: x, y: 0, animated: true});
  };

  const _map = React.useRef(null);
  const _scrollView = React.useRef(null);
  const onHandle = value => {
    setIsScreen(value);
  };
  const onHandleShow = (item, index) => {
    let data = [...dataCity];
    dataCity.map((item1, index1) => {
      if (index1 == index) data[index].isShow = !dataCity[index].isShow;
    });
    setDataCity(data);
  };
 const onHandleChooseShop =(item)=>{
   navigation.navigate('OrderCoffee', { dataAddress: item?.title });
   dispatch(DataActions.updateDataAddressShop(item))
 }
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'transparent'}}>
      {/* <Header textHeader={"Địa chỉ"} backBtnEnable={false} /> */}
      <View style={{height: 40, width: WIDTH, flexDirection:'row', justifyContent:'space-between'}}>

        <View
          style={{
            height: 35,
            width: WIDTH/2,
            flexDirection: 'row',
            marginLeft: 10,
          }}>
          <TouchableOpacity
            onPress={() => {
              onHandle('maps');
            }}
            style={[
              styles.buttonChooseMap,
              {
                borderColor:
                  isScreen == 'maps' ? Colors.BLUE_MAIN : Colors.GRAY_LIGHT,
              },
            ]}>
            <Text
              style={{
                fontSize: 16,
                color:
                  isScreen == 'maps' ? Colors.BLUE_MAIN : Colors.GRAY_LIGHT,
                fontWeight: 'bold',
              }}>
              Gần nhất
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              onHandle('all');
            }}
            style={[
              styles.buttonChooseMap,
              {
                borderColor:
                  isScreen == 'all' ? Colors.BLUE_MAIN : Colors.GRAY_LIGHT,
              },
            ]}>
            <Text
              style={{
                fontSize: 16,
                color: isScreen == 'all' ? Colors.BLUE_MAIN : Colors.GRAY_LIGHT,
                fontWeight: 'bold',
              }}>
              Tất cả
            </Text>
          </TouchableOpacity>
        </View>
        { isScreen =='maps'?
        <View style={{ borderRadius: 50, height: 36, width: 80, backgroundColor: Colors.WHITE, marginHorizontal: 10, flexDirection:'row', marginTop:2, borderWidth:1,borderColor:Colors.GRAY_LIGHT}}>
          <TouchableOpacity onPress={()=>{setIsChooseCar(true)}}
           style={{ height: 34, width: 39, backgroundColor: isChooesCar ? Colors.BLUE_MAIN : Colors.WHITE, borderTopLeftRadius: 50, borderBottomLeftRadius: 50, justifyContent: 'center', alignItems: 'center' }}>
            <FontAwesome
              name={'car'}
              size={size.REAL_SIZE_14}
            
            />
            </TouchableOpacity>
          <TouchableOpacity onPress={() => { setIsChooseCar(false) }}
          style={{ height: 34, width: 39, backgroundColor: !isChooesCar ? Colors.BLUE_MAIN : Colors.WHITE , borderBottomRightRadius: 50, borderTopRightRadius: 50, justifyContent:'center', alignItems:'center' }}>
            <MaterialCommunityIcons
              name={'bike'}
              size={size.REAL_SIZE_16}
            />
          </TouchableOpacity>
          <View>
          </View>
        </View>:null}
      </View>
      {isScreen == 'maps' ? (
        <View style={{flex: 1}}>
          <MapView
            ref={_map}
            initialRegion={regionCur}
            style={styles.containerMap}
            provider={PROVIDER_GOOGLE}>
            {state.markers.map((marker, index) => {
              const scaleStyle = {
                transform: [
                  {
                    scale: interpolations[index].scale,
                  },
                ],
              };
              return (
                <MapView.Marker
                  key={index}
                  coordinate={marker.coordinate}
                  onPress={e => onMarkerPress(e)}>
                  <Animated.View style={[styles.markerWrap]}>
                    <Animated.Image
                      source={images.marker}
                      style={[styles.marker, scaleStyle]}
                      resizeMode="cover"
                    />
                  </Animated.View>
                </MapView.Marker>
              );
            })}
          </MapView>
          <Animated.ScrollView
            ref={_scrollView}
            horizontal
            pagingEnabled
            scrollEventThrottle={1}
            showsHorizontalScrollIndicator={false}
            snapToInterval={CARD_WIDTH + 20}
            snapToAlignment="center"
            style={styles.scrollView}
            contentInset={{
              top: 0,
              left: SPACING_FOR_CARD_INSET,
              bottom: 0,
              right: SPACING_FOR_CARD_INSET,
            }}
            contentContainerStyle={{
              paddingHorizontal:
                Platform.OS === 'android' ? SPACING_FOR_CARD_INSET : 0,
            }}
            onScroll={Animated.event(
              [
                {
                  nativeEvent: {
                    contentOffset: {
                      x: mapAnimation,
                    },
                  },
                },
              ],
              {useNativeDriver: true},
            )}>
            {state.markers.map((marker, index) => (
              <View style={styles.card} key={index}>
                <View style={styles.textContent}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginRight: 20,
                    }}>
                    <TouchableOpacity onPress={() => { onHandleChooseShop(marker)}}>
                      <Text numberOfLines={1} style={styles.cardtitle}>
                        {marker?.title}
                      </Text>
                      <Text numberOfLines={1} style={styles.cardDescription}>
                        {marker?.adreess}
                      </Text>
                    </TouchableOpacity>
                    <View>
                      <Text style={{fontSize: 14, color: Colors.BLUE_MAIN}}>
                        500m
                      </Text>
                    </View>
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginTop: 5,
                      marginHorizontal: 20,
                    }}>
                    <View style={{alignItems: 'center'}}>
                      <SvgXml xml={svgs.IconPhone} width={25} height={25} />
                      <Text style={{fontSize: 10}}>Hotline</Text>
                    </View>
                    <View style={{alignItems: 'center'}}>
                      <SvgXml
                        xml={svgs.IconSend}
                        width={20}
                        height={20}
                        fill={Colors.BLUE_MAIN}
                      />
                      <Text style={{fontSize: 10}}>Chỉ đường</Text>
                    </View>
                  </View>
                </View>
              </View>
            ))}
          </Animated.ScrollView>
        </View>
      ) : (
        <View style={{flex: 1}}>
          <View style={styles.viewIcons}>
            <FontAwesome
              name={'search'}
              size={size.REAL_SIZE_24}
              style={{marginTop: size.REAL_SIZE_6, marginHorizontal: 12}}
            />
            <TextInput style={styles.textInput} placeholder="Tìm kiếm..." />
          </View>
          <ScrollView style={styles.viewBody}>
            {dataCity.map((item, index) => {
              return (
                <>
                  <TouchableOpacity
                    style={styles.ViewCity}
                    onPress={() => {
                      onHandleShow(item, index);
                    }}>
                    <Text style={styles.TextCity}>{item?.title}</Text>
                    <FontAwesome
                      name={!item?.isShow ? 'angle-down' : 'angle-up'}
                      size={size.REAL_SIZE_24}
                      style={{
                        marginTop: size.REAL_SIZE_6,
                        marginHorizontal: 12,
                      }}
                    />
                  </TouchableOpacity>
                  {item?.isShow
                    ? item?.data.map((item1, index1) => {
                        return (
                          <View style={[styles.textContent, {
                            borderBottomWidth: 1,
                            borderColor: Colors.BLUE_MAIN,}]}>
                            <View
                              style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginRight: 20,
                              }}>
                              <View>
                                <Text
                                  numberOfLines={1}
                                  style={styles.cardtitle}>
                                  {item1?.title}
                                </Text>
                                <Text
                                  numberOfLines={1}
                                  style={styles.cardDescription}>
                                  {item1?.adreess}
                                </Text>
                              </View>
                              <View>
                                <Text
                                  style={{
                                    fontSize: 14,
                                    color: Colors.BLUE_MAIN,
                                  }}>
                                  500m
                                </Text>
                              </View>
                            </View>

                            <View
                              style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                marginTop: 5,
                                marginHorizontal: 20,
                              }}>
                              <View style={{alignItems: 'center'}}>
                                <SvgXml
                                  xml={svgs.IconPhone}
                                  width={25}
                                  height={25}
                                />
                                <Text style={{fontSize: 10}}>Hotline</Text>
                              </View>
                              <View style={{alignItems: 'center'}}>
                                <SvgXml
                                  xml={svgs.IconSend}
                                  width={20}
                                  height={20}
                                  fill={Colors.BLUE_MAIN}
                                />
                                <Text style={{fontSize: 10}}>Chỉ đường</Text>
                              </View>
                            </View>
                          </View>
                        );
                      })
                    : null}
                </>
              );
            })}
          </ScrollView>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Address;
