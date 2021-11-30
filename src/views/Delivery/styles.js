import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Palette } from '../../shared/themes/Palette';
import { colors, size } from '../../shared/themes';
import { HEIGHT, WIDTH } from '../../shared/themes/size';

const styles = StyleSheet.create({
viewSearch:{
                flexDirection: 'row',
                borderBottomWidth: size.REM * 0.5,
                marginHorizontal: size.REAL_SIZE_20,
}, 
    buttonChooseAddress:{
        borderBottomWidth: 0.5, borderTopWidth:0.5,paddingHorizontal:12, flexDirection:'row',
        paddingVertical: 10,
        alignItems:'center'
    },
    txtAddress:{fontSize: 16, color:colors.BLUE_MAIN, fontWeight:"900", lineHeight:24, marginRight: 12}
});
export default styles;
