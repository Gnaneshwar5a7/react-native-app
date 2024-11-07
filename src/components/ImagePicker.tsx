import {launchImageLibrary} from 'react-native-image-picker';
import {View, StyleSheet} from 'react-native';
import {memo, useCallback} from 'react';

import style from '../styles/style';
import RNImage from './RNImage';
import Button from './Button';

interface ImagePickerProps {
  image: string | undefined;
  setImage: Function;
}

function ImagePickerComponent({image, setImage}: ImagePickerProps) {
  const onSuccessfulImageSelection = useCallback(
    (response: any) => {
      const assets = response.assets;
      if (assets) setImage(assets[0].base64);
    },
    [setImage],
  );

  const handleSelectImage = useCallback(() => {
    launchImageLibrary({
      mediaType: 'photo',
      includeBase64: true,
    }).then(onSuccessfulImageSelection);
  }, [onSuccessfulImageSelection]);

  return (
    <View style={[style.flexRow, styles.imageConatiner]}>
      <Button onPress={handleSelectImage} backgroundColor="none">
        {image === undefined ? (
          <RNImage style={styles.image} />
        ) : (
          <RNImage style={styles.image} base64={image} />
        )}
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  imageConatiner: {
    margin: 5,
    justifyContent: 'center',
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
});
export default memo(ImagePickerComponent);
