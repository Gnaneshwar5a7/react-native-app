import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {memo, useCallback, useContext} from 'react';
import {StyleSheet, View} from 'react-native';

import {mediumFontSize} from '../styles/textStyles';
import {AuthContext} from '../context/AuthContext';
import Button from '../components/Button';
import RNText from '../components/RNText';
import Colors from '../styles/Colors';
import style from '../styles/style';

function Profile({toggleProfileVisible}: {toggleProfileVisible: Function}) {
  const context = useContext(AuthContext);

  const handler = useCallback(() => {
    const logoutObject = {loginStatus: false, username: ''};
    context?.logoutAuthUser(logoutObject);
    toggleProfileVisible();
  }, [context, toggleProfileVisible]);

  return (
    <View style={[style.shadow, styles.container]}>
      <View style={styles.flexContainer}>
        <Icon name="user" color={Colors.secondery} size={mediumFontSize} />
        <RNText text={context?.authUser?.username} type="light" size="medium" />
      </View>
      <Button onPress={handler} backgroundColor="none">
        <View style={styles.flexContainer}>
          <Icon name="logout" color={Colors.secondery} size={mediumFontSize} />
          <RNText text={'Logout'} type="light" size="medium" />
        </View>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 5,
    bottom: -80,
    padding: 10,
    paddingEnd: 20,
    backgroundColor: Colors.backGroundEnd,
    zIndex: 1,
  },

  flexContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default memo(Profile);
