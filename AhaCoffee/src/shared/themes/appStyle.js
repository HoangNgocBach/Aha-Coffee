import metric from './metric';
import colors from './colors';
import spacing from './spacing';
import fonts from './fonts';

// This file is for a reusable grouping of Theme items.
// Similar to an XML fragment layout in Android

const appStyle = {
  screen: {
    mainContainer: {
      flex: 1,
      backgroundColor: colors.transparent,
    },
    backgroundImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
    container: {
      flex: 1,
      paddingTop: metric.baseMargin,
      backgroundColor: colors.transparent,
    },
    section: {
      margin: metric.section,
      padding: metric.baseMargin,
    },
    sectionText: {
      paddingVertical: metric.doubleBaseMargin,
      color: colors.snow,
      marginVertical: metric.smallMargin,
      textAlign: 'center',
    },
    subtitle: {
      color: colors.snow,
      padding: metric.smallMargin,
      marginBottom: metric.smallMargin,
      marginHorizontal: metric.smallMargin,
    },
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  item: {
    shadow: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,

      elevation: 4,
    },
    spacing: {
      paddingHorizontal: spacing[4],
      paddingVertical: spacing[2],
    },
  },
  text: {
    white: {
      color: colors.White,
    },
  },
  textWhite: {
    titleBtn: {
      color: colors.White,
      fontSize: 12,
    },
  },
  //flex
  flexRow: {
    flexDirection: 'row',
  },
  flexRowCenter: {
    flexDirection: 'row',
    aligItem: 'center',
  },
  flex: [{flex: 0}, {flex: 1}, {flex: 2}, {flex: 3}, {flex: 4}],
};

export default appStyle;
