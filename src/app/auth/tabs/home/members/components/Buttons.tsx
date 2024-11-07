import {memo, useCallback, useContext, useState} from 'react';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {View, StyleSheet} from 'react-native';

import ConfirmationDialog from '../../../../../../components/ConfirmationDialog';
import {RoomContext, RoomType} from '../../../../../../context/RoomContext';
import {UserContext} from '../../../../../../context/UserContext';
import RNModal from '../../../../../../components/RNModal';
import Button from '../../../../../../components/Button';
import RNText from '../../../../../../components/RNText';
import RoomEditForm from '../../rooms/components/Form';
import style from '../../../../../../styles/style';

interface ButtonProps {
  item: RoomType;
}

function Buttons({item}: ButtonProps) {
  const navigation = useNavigation<any>();
  const roomContext = useContext(RoomContext);
  const usersContext = useContext(UserContext);

  const [confirmationModalVisible, setConfirmationModalVisible] =
    useState(false);

  const [editFormvisible, setEditFormVisible] = useState(false);

  const onConfirmDelete = useCallback(() => {
    roomContext?.deleteRoom(item.roomNumber);
    navigation.navigate('rooms');
    usersContext?.deleteUsersByRoomNumber(item.roomNumber);
  }, [item.roomNumber, navigation, roomContext]);

  const setConfirmationVisible = useCallback(() => {
    setConfirmationModalVisible(true);
  }, []);
  const onCancel = useCallback(() => {
    setConfirmationModalVisible(false);
  }, []);
  const setVisibleEditForm = useCallback(() => {
    setEditFormVisible(true);
  }, []);

  return (
    <View style={styles.icons}>
      <View style={style.grow}>
        <Button backgroundColor="none" onPress={setVisibleEditForm}>
          <View style={styles.item}>
            <Icon name="edit" color={'orange'} size={20} />
            <RNText text={'Edit'} type="dark" />
          </View>
        </Button>
      </View>

      <View style={style.grow}>
        <Button backgroundColor="none" onPress={setConfirmationVisible}>
          <View style={styles.item}>
            <MIcon name="delete" color={'red'} size={20} />
            <RNText text={'Delete'} type="dark" />
          </View>
        </Button>
      </View>

      <RNModal
        visible={confirmationModalVisible}
        setVisible={setConfirmationModalVisible}
        style={style.popUp}>
        <ConfirmationDialog
          text={'Do you really Want to Delete this Room Details'}
          onConfirm={onConfirmDelete}
          onCancel={onCancel}
        />
      </RNModal>

      <RNModal visible={editFormvisible} setVisible={setEditFormVisible}>
        <RoomEditForm setVisible={setEditFormVisible} roomData={item} />
      </RNModal>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 2,
    margin: 2,
    borderRadius: 10,
  },
  icons: {
    flexDirection: 'row',
  },
});

export default memo(Buttons);
