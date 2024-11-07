import Icon from 'react-native-vector-icons/FontAwesome';
import {Image, StyleSheet, View} from 'react-native';
import {memo} from 'react';

import {titleFontSize} from '../styles/textStyles';
import Colors from '../styles/Colors';

interface ImageProps {
  base64?: string;
  style: any;
}

function RNImage({base64, style}: ImageProps) {
  const imageSource = {uri: `data:image/png;base64,${base64}`};
  return base64 ? (
    <Image style={style} source={imageSource} />
  ) : (
    <View style={styles.iconView}>
      <Icon name="user" color={Colors.primary} size={titleFontSize * 2} />
    </View>
  );
}

const styles = StyleSheet.create({
  iconView: {
    borderWidth: 1,
    borderRadius: 50,
    padding: 20,
    paddingVertical: 10,
    opacity: 0.7,
  },
});

export default memo(RNImage);
