import {View} from 'react-native';
import style from '../../../../styles/style';
import RNText from '../../../../components/RNText';

function Settings() {
  return (
    <View style={style.background}>
      <RNText text={'Search'} type="light" />
    </View>
  );
}
export default Settings;
