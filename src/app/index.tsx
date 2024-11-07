import {StyleSheet, View} from 'react-native';
import {memo, useCallback, useContext, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

import {AuthContext} from '../context/AuthContext';
import textStyles from '../styles/textStyles';
import Button from '../components/Button';
import RNText from '../components/RNText';
import Colors from '../styles/Colors';
import style from '../styles/style';

function Launcher() {
  const context = useContext(AuthContext);
  const navigation = useNavigation<any>();

  useEffect(() => {
    if (context?.authUser?.loginStatus) {
      navigation.replace('auth');
    }
  }, [context]);

  const handleClick = useCallback(() => {
    navigation.replace('login');
  }, []);

  return (
    <View style={[styles.container]}>
      <View style={styles.innerContainer}>
        <RNText
          text={'PGS'}
          type="light"
          size="large"
          style={{
            ...textStyles.shadowStyle,
            ...styles.logo,
            ...style.shadow,
          }}
        />
      </View>

      <Button onPress={handleClick}>
        <RNText
          text={'Get Started'}
          type="light"
          size="medium"
          style={textStyles.btnText}
        />
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    padding: 30,
    paddingVertical: 40,
    borderRadius: 100,
    backgroundColor: Colors.backGroundEnd,
  },
});

export default memo(Launcher);
