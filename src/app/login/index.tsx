import {StyleSheet, View} from 'react-native';
import {memo} from 'react';

import textStyles from '../../styles/textStyles';
import RNText from '../../components/RNText';
import Form from './components/Form';

function Login() {
  return (
    <View style={[styles.container, {position: 'relative'}]}>
      <View style={styles.headerContainer}>
        <RNText
          text={'Sign In'}
          type="light"
          size="large"
          style={{...textStyles.borderBottum, ...textStyles.shadowStyle}}
        />
      </View>
      <Form />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  headerContainer: {
    alignItems: 'center',
  },
});

export default memo(Login);
