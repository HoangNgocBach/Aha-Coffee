import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { svgs } from '../assets';
import { colors, metric, spacing } from '../shared/themes';
import { WIDTH } from '../shared/themes/size';

const TabBarApp = ({ state, descriptors, navigation }) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={styles.ctn}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };
        const tabBarBadge = () => {
          const iconBadge = (
            <View />
            // <View style={styles.badge}>
            //   <Text style={styles.txtBadge}></Text>
            // </View>
          );
          // switch (route.name) {
          //   case 'Notification':
          //     return iconBadge;
          //   default:
          //     break;
          // }
        };

        return (
          <>
            {index !== 2 ? (
              <TouchableOpacity
                activeOpacity={1}
                key={index}
                onPress={onPress}
                style={[
                  styles.tabItem,
                ]}>
                <View>
                  <SvgXml
                    xml={
                      isFocused ? options.tabBarIconfocus : options.tabBarIcon
                    }
                    height={22}
                    width={22}
                    fill={
                      index !== 3 ? (isFocused ? '#00a053' : '#505759') : 'none'
                    }
                    style={{
                      margin: 1,
                    }}
                  />
                </View>
                <Text
                  style={{
                    color: isFocused ? '#00a053' : '#505759',
                    fontSize: 12,
                    marginHorizontal: 6,
                  }}>
                  {label}
                </Text>
                {tabBarBadge()}
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                activeOpacity={1}
                key={index}
                onPress={onPress}
                style={[
                  styles.tabItemQrCode,
                  { borderBottomWidth: 2 },
                ]}>
                <View>
                  <SvgXml
                    xml={
                      isFocused ? options.tabBarIconfocus : options.tabBarIcon
                    }
                    height={35}
                    width={35}
                    fill={
                      index !== 3 ? (isFocused ? '#00a053' : '#505759') : 'none'
                    }
                    style={{
                      margin: 1,
                    }}
                  />
                </View>
                <Text
                  style={{
                    color: isFocused ? '#00a053' : '#505759',
                    fontSize: 12,
                    marginHorizontal: 6,
                    marginTop: 4
                  }}>
                  {label}
                </Text>
                {tabBarBadge()}
              </TouchableOpacity>
            )}
          </>
        );
      })}
    </View>
  );
};
const styles = StyleSheet.create({
  ctn: {
    flexDirection: 'row',
    height: metric.bottomTabHeight,
    justifyContent: 'space-around',
    // paddingHorizontal: spacing[7],
    backgroundColor: colors.WHITE,
    paddingBottom: metric.paddingBottomScreen,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
    borderTopWidth: 0.2
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#00a053',

    // flexDirection: 'row',
    width: WIDTH / 5,
  },
  tabItemQrCode: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#00a053',
    top: -30,
    backgroundColor: colors.WHITE,
    borderTopRightRadius: 70,
    borderTopLeftRadius: 70,
    height: metric.bottomTabHeight + 30,
    width: WIDTH / 5,
    // flexDirection: 'row',
    // width: 100,
  },
  badge: {
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: '#EE161F',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 5,
    right: 5,
  },
  txtBadge: {
    color: 'white',
    fontSize: 11,
  },
});
export default TabBarApp;
