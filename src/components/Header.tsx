import Icon from 'react-native-vector-icons/Feather';
import {StyleSheet, View} from 'react-native';
import {useCallback, useState} from 'react';

import textStyles, {titleFontSize} from '../styles/textStyles';
import Button from '../components/Button';
import RNText from '../components/RNText';
import Colors from '../styles/Colors';
import style from '../styles/style';
import Profile from './Profile';

function Header(props: any) {
  const navigation = props.navigation;
  const [profileVisible, setProfileVisible] = useState(false);

  const toggleProfileVisible = useCallback(() => {
    setProfileVisible(!profileVisible);
  }, [profileVisible]);

  const handleBackButton = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <View>
      <View style={[styles.headerContainer]}>
        <View style={style.flexRow}>
          {!props.options.headerTitle && navigation.canGoBack() && (
            <Button onPress={handleBackButton} backgroundColor="none">
              <Icon name="arrow-left" size={30} color={Colors.secondery} />
            </Button>
          )}
          <RNText
            text={props.options.headerTitle || 'DashBoard'}
            type="light"
            size="large"
            style={textStyles.shadowStyle}
          />
        </View>
        <Button onPress={toggleProfileVisible} backgroundColor="none">
          <Icon name="user" size={titleFontSize} color={Colors.secondery} />
        </Button>
      </View>

      {profileVisible && (
        <Profile toggleProfileVisible={toggleProfileVisible} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: Colors.backgroundStart,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
export default Header;
