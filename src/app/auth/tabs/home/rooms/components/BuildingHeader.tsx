import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import FIcon from 'react-native-vector-icons/Feather';
import {Linking, StyleSheet, View} from 'react-native';
import {memo, useContext} from 'react';

import textStyles, {mediumFontSize} from '../../../../../../styles/textStyles';
import {UserContext} from '../../../../../../context/UserContext';
import RNText from '../../../../../../components/RNText';
import Button from '../../../../../../components/Button';
import Colors from '../../../../../../styles/Colors';
import style from '../../../../../../styles/style';

interface BuildingHeaderProps {
  roomCount: number;
  userCount: number;
  ac?: boolean;
}

function Header({roomCount, ac}: BuildingHeaderProps) {
  const usersContext = useContext(UserContext);
  const totalUsersCount = usersContext?.usersList.length;
  return (
    <View style={styles.header}>
      <View style={[styles.rightContainer, style.shadow]}>
        <RNText
          type={'light'}
          size={'large'}
          style={[textStyles.shadowStyle]}
          text={'PGS'}
        />
      </View>
      <View style={[styles.container, style.shadow]}>
        <View style={styles.innerContainer}>
          <View style={styles.item}>
            <MIcon name="office-building-outline" size={mediumFontSize}></MIcon>
            <RNText text={'PG'} />
          </View>

          <Button
            onPress={() => {
              Linking.openURL(
                'https://www.google.co.in/maps/place/N-Heights,+Siddiq+Nagar,+HITEC+City,+Hyderabad,+Telangana+500081/@17.4521206,78.3715251,18.57z/data=!4m6!3m5!1s0x3bcb93c48ffb8743:0x5aa4aa0466861cc1!8m2!3d17.4512805!4d78.37089!16s%2Fg%2F11n6sq8c13?entry=ttu',
              );
            }}
            backgroundColor="none">
            <View style={styles.item}>
              <Icon name="location-outline" size={mediumFontSize} />
              <RNText text={'Hyderabad'} />
            </View>
          </Button>

          <View style={styles.item}>
            <Icon name="bed-outline" size={mediumFontSize} />
            <RNText text={`${roomCount}`} />
          </View>
        </View>
        <View style={styles.innerContainer}>
          <View style={styles.item}>
            <FIcon name="users" size={mediumFontSize} />
            <RNText text={`${totalUsersCount}`} />
          </View>

          {ac && (
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
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginBottom: 5,
  },
  rightContainer: {
    paddingHorizontal: 20,
    paddingVertical: 40,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    backgroundColor: Colors.backGroundEnd,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: Colors.secondery,
    marginLeft: 5,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
  },
  innerContainer: {
    padding: 10,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default memo(Header);
