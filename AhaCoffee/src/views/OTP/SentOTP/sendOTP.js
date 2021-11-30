import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  TextInput,
  useWindowDimensions,
  Text,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import styles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {images} from '../../../assets';
import {colors, size} from '../../../shared/themes';

const sendOTP = ({navigation}) => {
  const checkNumber = value => {
    console.log('nuber', value);
    return (value.match(/\d/g) || []).length == 10;
  };
  const [text, setText] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.viewText}>
        <Text style={styles.text}>SỐ ĐIỆN THOẠI CỦA BẠN</Text>
      </View>

      <View style={styles.viewIcons}>
        <FontAwesome
          name={'mobile-phone'}
          size={size.REAL_SIZE_30}
          style={{marginLeft: size.REAL_SIZE_20, marginTop: size.REAL_SIZE_6}}
        />
        <TextInput
          style={[
            styles.textInput,
            {textAlign: 'left', paddingLeft: size.REAL_SIZE_10},
          ]}
          placeholder="Số điện thoại "
          onChangeText={txt => {
            setText(txt);
          }}
        />
      </View>
      <TouchableOpacity
        // disabled={text != '' && checkNumber(text) ? false : true}
        style={[
          styles.touch,
          {backgroundColor: text != '' ? colors.BLUE_MAIN : colors.GRAY},
        ]}
        onPress={() => {
          if (checkNumber(text)) {
            navigation.navigate('checkOTP', {text: text});
          } else {
            Alert.alert('Số điện thoại không hợp lệ');
          }
        }}>
        <Text
          style={{
            color: colors.WHITE,
            fontSize: size.REAL_SIZE_16,
          }}>
          TIẾP THEO
        </Text>
        <MaterialIcons
          name={'navigate-next'}
          size={size.REAL_SIZE_28}
          color={colors.WHITE}
        />
      </TouchableOpacity>
      <View style={styles.viewImage}>
        <Image source={images.logo} style={styles.image} />
      </View>
    </View>
  );
};

export default sendOTP;
