import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {View, StyleSheet} from 'react-native';
import {memo, useCallback} from 'react';

import {titleFontSize} from '../../../../../styles/textStyles';
import Button from '../../../../../components/Button';
import RNText from '../../../../../components/RNText';
import Colors from '../../../../../styles/Colors';
import style from '../../../../../styles/style';

interface SearchedRoomCardProps {
  item: string;
  reset(): void;
}

function SearchedRoomCard(props: SearchedRoomCardProps) {
  const navigation = useNavigation<any>();
  const handleClick = useCallback(() => {
    navigation.navigate('members', {
      roomNumber: props.item,
    });
    props.reset();
  }, [navigation, props]);

  return (
    <Button backgroundColor="none" opacity={0.9} onPress={handleClick}>
      <View style={[style.card, styles.bg]}>
        <Icon name="building-o" color={'white'} size={titleFontSize} />
        <RNText text={`${props.item}`} type="light" size="medium" />
      </View>
    </Button>
  );
}

const styles = StyleSheet.create({
  bg: {
    flexDirection: 'row',
    backgroundColor: Colors.backGroundEnd,
    marginHorizontal: 5,
    marginTop: 5,
    paddingHorizontal: 10,
  },
});
export default memo(SearchedRoomCard);
