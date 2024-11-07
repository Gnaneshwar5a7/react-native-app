import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import {View, StyleSheet} from 'react-native';
import { memo, useCallback } from 'react';

import {titleFontSize} from '../../../../../styles/textStyles';
import {UserType} from '../../../../../context/UserContext';
import RNImage from '../../../../../components/RNImage';
import Button from '../../../../../components/Button';
import RNText from '../../../../../components/RNText';
import Colors from '../../../../../styles/Colors';
import style from '../../../../../styles/style';

interface SearchedMemberCardProps {
  user: UserType;
  reset(): void;
}

function SearchedMemberCard({user, reset}: SearchedMemberCardProps) {
  const navigation = useNavigation<any>();

  const handleClick = useCallback(() => {
    navigation.navigate('home', {
      screen: 'members',
      params: {roomNumber: user.roomNumber, userID: user.id},
    });
    reset();
  }, [navigation, user.roomNumber, user.id, reset]);

  return (
    <View style={style.grow}>
      <Button onPress={handleClick} opacity={0.9} backgroundColor="none">
        <View style={[style.card, styles.bg]}>
          {user.image ? (
            <RNImage base64={user.image} style={styles.image} />
          ) : (
            <Icon
              name="user"
              size={titleFontSize * 2}
              color={Colors.backgroundStart}
              style={styles.iconStyle}
            />
          )}
          <RNText text={user.name} type="dark" size="medium" />
          <RNText text={`Room No : ${user.roomNumber}`} type="primary" />
        </View>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  bg: {
    flexDirection: 'row',
    backgroundColor: Colors.secondery,
    marginHorizontal: 5,
    marginTop: 5,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    height: titleFontSize * 2,
    width: titleFontSize * 2,
    borderRadius: 50,
  },
  iconStyle: {
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: Colors.backgroundStart,
  },
});
export default memo(SearchedMemberCard);
