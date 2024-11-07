import {useContext, useMemo, useState} from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import {StyleSheet, View} from 'react-native';

import FloatingButton from '../../../../../components/FloatingButton';
import useOrientation from '../../../../../hooks/useOrientation';
import {RoomContext} from '../../../../../context/RoomContext';
import BuildingHeader from './components/BuildingHeader';
import RNModal from '../../../../../components/RNModal';
import Colors from '../../../../../styles/Colors';
import List from '../../../../../components/List';
import style from '../../../../../styles/style';
import RoomCard from './components/RoomCard';
import Form from './components/Form';

function Rooms() {
  const roomsContext = useContext(RoomContext);
  const [roomFormVisible, setRoomFormVisible] = useState(false);
  const orientation = useOrientation();
  const numColumns = useMemo(() => {
    return orientation === 'PORTRAIT' ? 2 : 4;
  }, [orientation]);

  function renderItem({index, item}: any) {
    return <RoomCard item={item} />;
  }
  function toggleRoomFormVisible() {
    setRoomFormVisible(!roomFormVisible);
  }
  const sortedList = roomsContext.roomsList.sort(
    (a, b) => a.roomNumber - b.roomNumber,
  );

  return (
    <View style={style.grow}>
      <BuildingHeader
        roomCount={roomsContext.roomsList.length}
        userCount={30}
        ac
      />

      <List
        key={numColumns}
        list={sortedList}
        cols={numColumns}
        headerText="Rooms Details"
        renderItem={renderItem}
      />

      <FloatingButton onPress={toggleRoomFormVisible} right={20} bottom={50}>
        <View style={styles.btn}>
          <Icon name="plus" size={50} color={Colors.backGroundEnd}></Icon>
        </View>
      </FloatingButton>
      <RNModal visible={roomFormVisible} setVisible={setRoomFormVisible}>
        <Form setVisible={setRoomFormVisible} />
      </RNModal>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    borderRadius: 100,
    backgroundColor: 'white',
    padding: 10,
  },
});
export default Rooms;
