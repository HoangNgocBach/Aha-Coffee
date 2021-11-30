import PropTypes from 'prop-types';
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  Platform,
} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {svgs} from '../../assets';
import {withNavigation} from '../../services/navigation-service/withNavigation';
import Sizes from '../../shared/themes/size';
import Colors from '../../shared/themes/colors';
import styles from './styles';
// import {Text, View, StyleSheet, StatusBar} from 'react-native';
import {
  // SafeAreaView,
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

const CustomStatusBar = ({
  backgroundColor,
  barStyle = 'dark-content',
  //add more props StatusBar
}) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={{height: insets.top, backgroundColor}}>
      <StatusBar
        animated={true}
        backgroundColor={backgroundColor}
        barStyle={barStyle}
      />
    </View>
  );
};
const Header = props => {
  const {
    navigation,
    onBackPress,
    backBtnEnable = true,
    textHeader = '',
    styleBody = null,
    headerType2 = false,
    buttonLeft,
    buttonRight,
    styleheader,
  } = props;

  const handleNavigationGoBack = () => {
    if (onBackPress) {
      onBackPress();
    } else {
      navigation.goBack();
    }
  };

  return (
    <View style={{backgroundColor: '#18BCC7'}}>
      {/* {Platform.OS === 'ios' ? (
        <CustomStatusBar backgroundColor="#18BCC7" />
      ) : (
        <StatusBar
          animated={true}
          backgroundColor="#18BCC7"
          barStyle={'light-content'}
          showHideTransition={'slide'}
          hidden={false}
        />
      )} */}
      <View style={styles.header}>
        <View style={[styles.leftH, {flex: headerType2 ? 1 : 1}]}>
          {buttonLeft ? (
            <View>{buttonLeft}</View>
          ) : backBtnEnable ? (
            <TouchableOpacity
              hitSlop={{top: 10, left: 10, right: 10, bottom: 10}}
              onPress={() => handleNavigationGoBack()}
              style={styles.buttonBack}>
              <SvgXml
                xml={svgs.IconGoBack}
                fill={'white'}
                width={Sizes.REAL_SIZE_20}
                height={Sizes.REAL_SIZE_20}
              />
            </TouchableOpacity>
          ) : null}
        </View>
        <View
          style={[
            {justifyContent: 'center', alignItems: 'center', flex: 8},
            styleBody,
            {flex: headerType2 ? 6 : 8},
          ]}>
          <Text style={styles.txtHeader}>{textHeader}</Text>
        </View>
        <View style={[{flex: 1, padding: 5}, {flex: headerType2 ? 3 : 1}]}>
          {buttonRight ? buttonRight : <View />}
        </View>
      </View>
    </View>
  );
};

Header.defaultProps = {
  backBtnEnable: true,
  textHeader: '',
  styleBody: null,
  headerType2: false,
  styleheader: null,
};

Header.propTypes = {
  navigation: PropTypes.any,
  onBackPress: PropTypes.func,
  backBtnEnable: PropTypes.bool,
  textHeader: PropTypes.string,
  styleBody: PropTypes.node,
  headerType2: PropTypes.bool,
  buttonLeft: PropTypes.any,
  buttonRight: PropTypes.any,
  styleheader: PropTypes.node,
};

const HeaderShowNavigation = withNavigation(Header);

export default HeaderShowNavigation;
