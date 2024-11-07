import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {StyleSheet, View} from 'react-native';
import {memo} from 'react';

import {mediumFontSize} from '../../../../../../styles/textStyles';
import {RoomType} from '../../../../../../context/RoomContext';
import RNText from '../../../../../../components/RNText';
import Colors from '../../../../../../styles/Colors';
import style from '../../../../../../styles/style';
import Buttons from './Buttons';

interface BuildingHeaderProps {
  item: RoomType;
  occupency: number;
  revenue: number;
}

function Header({item, occupency, revenue}: BuildingHeaderProps) {
  return (
    <View style={styles.header}>
      <View style={[styles.topContainer, style.shadow]}>
        <RNText type="light" size="large" text={`Room No ${item.roomNumber}`} />
      </View>

      <View style={[styles.bottomContainer, style.shadow]}>
        <View style={styles.container}>
          <View style={styles.innerContainer}>
            <View style={styles.item}>
              <RNText text={`Total Capacity : ${item.capacity}`} />
            </View>
            <View style={styles.item}>
              <RNText text={`Occupied : ${occupency}`} />
            </View>
            {item.type === 'AC' && (
              <View style={styles.item}>
                <MIcon
                  name="air-conditioner"
                  size={mediumFontSize}
                  color={'green'}
                />
                <RNText text={'Available'} type="success" />
              </View>
            )}
          </View>

          <View style={styles.innerContainer}>
            <View style={styles.item}>
              <RNText text={`Price/User : ${item.pricePerHead}`} />
            </View>
            <View style={styles.item}>
              <RNText text={`Total Revenue : ${revenue}`} />
            </View>
          </View>
        </View>
        <Buttons item={item} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginHorizontal: 10,
    marginBottom: 5,
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: Colors.backGroundEnd,
  },
  bottomContainer: {
    backgroundColor: Colors.secondery,
    marginTop: 5,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  container: {
    flexDirection: 'row',
    padding: 10,
  },
  innerContainer: {
    flex: 1,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default memo(Header);
