import {StyleSheet, View} from 'react-native';
import {memo} from 'react';

import textStyles from '../styles/textStyles';
import style from '../styles/style';
import RNText from './RNText';
import Button from './Button';

interface ConfirmationDialogProps {
  text: string;
  onConfirm(event: any): void;
  onCancel(event: any): void;
}

function ConfirmationDialog({
  text,
  onConfirm,
  onCancel,
}: ConfirmationDialogProps) {
  return (
    <View>
      <RNText text={text} size="medium" />
      <View style={style.flexRow}>
        <View style={[style.grow, styles.btn]}>
          <Button onPress={onCancel} backgroundColor={'none'}>
            <RNText text="Cancel" size="medium" style={textStyles.btnText} />
          </Button>
        </View>
        <View style={[style.grow, styles.btn, style.shadow]}>
          <Button onPress={onConfirm} backgroundColor={'none'}>
            <RNText
              text="OK"
              size="medium"
              type="red"
              style={textStyles.btnText}
            />
          </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    margin: 5,
  },
});

export default memo(ConfirmationDialog);