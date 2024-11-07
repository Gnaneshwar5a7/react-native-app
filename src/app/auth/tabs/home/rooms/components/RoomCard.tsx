import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {memo, useCallback, useContext} from 'react';
import {View, StyleSheet} from 'react-native';

import {OrientationContext} from '../../../../../../context/OrientationContext';
import {mediumFontSize} from '../../../../../../styles/textStyles';
import {UserContext} from '../../../../../../context/UserContext';
import {RoomType} from '../../../../../../context/RoomContext';
import RNText from '../../../../../../components/RNText';
import Button from '../../../../../../components/Button';
import Colors from '../../../../../../styles/Colors';
import style from '../../../../../../styles/style';

function RoomCard({item}: {item: RoomType}) {
  const usersContext = useContext(UserContext);
  const navigation = useNavigation<any>();
  const usersCount = usersContext?.getUsersByRoomNumber(item.roomNumber).length;
  const orientation = useContext(OrientationContext);

  const handleCartclick = useCallback(() => {
    navigation.navigate(`members`, {roomNumber: item.roomNumber});
  }, [item.roomNumber, navigation]);

  return (
    <View
      style={
        orientation === 'LANDSCAPE' ? style.landScapeContainer : style.container
      }>
      <Button backgroundColor="none" opacity={0.9} onPress={handleCartclick}>
        <View style={[style.card, style.shadow, styles.bg]}>
          <View style={style.flexRow}>
            <Icon name="building-o" color={'white'} size={30} />
            <RNText text={`${item.roomNumber}`} type="light" size="medium" />
          </View>
          <View style={style.flexRow}>
            <RNText text={item.type} type="light" style={styles.typeWidth} />
            <View style={styles.typeWidth}>
              <Icon name="user" color={'white'} size={mediumFontSize} />
              <RNText text={`${usersCount}/${item.capacity}`} type="light" />
            </View>
          </View>
        </View>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: Colors.backGroundEnd,
  },
  typeWidth: {
    margin: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default memo(RoomCard);
