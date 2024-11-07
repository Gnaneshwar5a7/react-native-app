import {useRoute} from '@react-navigation/native';
import {useContext, useMemo} from 'react';
import {View} from 'react-native';

import {RoomContext, RoomType} from '../../../../../context/RoomContext';
import {UserContext, UserType} from '../../../../../context/UserContext';
import useOrientation from '../../../../../hooks/useOrientation';
import EmptyMemberCard from './components/EmptyMemberCard';
import List from '../../../../../components/List';
import MemberCard from './components/MemberCard';
import style from '../../../../../styles/style';
import Header from './components/Header';

function Members() {
  const route = useRoute();
  const params: any = route.params;
  const item: RoomType = useContext(RoomContext).getRoomByNumber(
    params.roomNumber,
  );
  const usersContext = useContext(UserContext);
  const orientation = useOrientation();

  const numColumns = useMemo(() => {
    return orientation === 'PORTRAIT' ? 2 : 4;
  }, [orientation]);

  const {usersList, occupency, revenue} = useMemo(() => {
    let revenue = 0;
    const list: (UserType | string)[] = usersContext
      ?.getUsersByRoomNumber(item.roomNumber)
      .map((user: UserType) => {
        revenue += user.price;
        return user;
      });

    const occupency = list.length;

    for (var i = list?.length || 0; i < item.capacity; i++) {
      list?.push('empty' + i);
    }

    return {usersList: list, occupency: occupency, revenue};
  }, [item, usersContext?.usersList]);

  function renderItem({item}: any) {
    if (typeof item === 'string') return <EmptyMemberCard />;
    return <MemberCard user={item} />;
  }

  return (
    item && (
      <View style={style.grow}>
        <Header item={item} occupency={occupency} revenue={revenue} />
        <List
          cols={numColumns}
          headerText="Users Details"
          list={usersList}
          renderItem={renderItem}
          key={numColumns}
        />
      </View>
    )
  );
}
export default Members;
