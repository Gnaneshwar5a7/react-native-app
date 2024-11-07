import React, {useCallback, useContext, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { StyleSheet, View } from 'react-native';

import ConfirmationDialog from '../../../../../../components/ConfirmationDialog';
import {UserContext} from '../../../../../../context/UserContext';
import RNModal from '../../../../../../components/RNModal';
import RNText from '../../../../../../components/RNText';
import Button from '../../../../../../components/Button';
import style from '../../../../../../styles/style';

function DeleteUserButton({userId}: {userId: number}) {
  const usersContext = useContext(UserContext);
  const [confirmationvisible, setConfirmationVisible] = useState(false);
  const handleDeleteClick = useCallback(() => {
    setConfirmationVisible(true);
  }, []);

  const handleDelete = useCallback(() => {
    console.log(userId);
    usersContext?.deleteUser(userId);
  }, [userId, usersContext]);

  const handleCancel = useCallback(() => {
    setConfirmationVisible(false);
  }, []);

  return (
    <View>
      <Button backgroundColor="none" onPress={handleDeleteClick}>
        <View style={[style.flexRow, styles.btnContainer]}>
          <Icon name="delete" color={'red'} size={30} />
          <RNText text={`Delete User`} type="red" size="medium" />
        </View>
      </Button>
      <RNModal
        visible={confirmationvisible}
        setVisible={setConfirmationVisible}
        style={style.popUp}>
        <ConfirmationDialog
          text={'Do you really Want to Delete this User Details'}
          onConfirm={handleDelete}
          onCancel={handleCancel}
        />
      </RNModal>
    </View>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    justifyContent: 'center',
  },
});
export default DeleteUserButton;
