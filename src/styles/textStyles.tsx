import {StyleSheet} from 'react-native';

import Colors from './Colors';

const font = {
  fontFamily: 'arial',
};
export const contentFontSize = 15;
export const mediumFontSize = 20;
export const titleFontSize = 30;

export default StyleSheet.create({
  darkText: {
    color: 'rgba(0,0,0,0.6)',
    ...font,
  },
  dangerText: {
    color: 'red',
    ...font,
  },
  primaryText: {
    color: Colors.backGroundEnd,
    ...font,
  },
  warnText: {
    color: 'orange',
    ...font,
  },
  greenText: {
    color: 'green',
    ...font,
  },
  lightText: {
    color: 'white',
    ...font,
  },
  headerText: {
    fontSize: titleFontSize,
    fontWeight: 'bold',
    ...font,
  },
  subHeaderText: {
    fontSize: mediumFontSize,
    fontWeight: 'bold',
    ...font,
  },
  smallText: {
    fontSize: contentFontSize,
  },
  borderBottum: {
    borderBottomWidth: 3,
    borderColor: 'orange',
  },
  shadowStyle: {
    textShadowColor: Colors.primary,
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 5,
  },

  btnText: {
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 15,
  },
});
