import {memo, useCallback, useContext, useState} from 'react';
import {ScrollView} from 'react-native';
import { useForm } from 'react-hook-form';

import {RoomContext, RoomType} from '../../../../../../context/RoomContext';
import {UserContext} from '../../../../../../context/UserContext';
import textStyles from '../../../../../../styles/textStyles';
import Button from '../../../../../../components/Button';
import Switch from '../../../../../../components/Switch';
import RNText from '../../../../../../components/RNText';
import Input from '../../../../../../components/Input';
import Colors from '../../../../../../styles/Colors';
import {
  amountRules,
  capacityRules,
  roomNumberRules,
} from '../validations/formValidationRules';

interface ModalFormProps {
  setVisible: Function;
  roomData?: RoomType;
}

function ModalForm({setVisible, roomData}: ModalFormProps) {
  const roomContext = useContext(RoomContext);
  const {control, handleSubmit} = useForm({
    defaultValues: {
      'Room Number': roomData?.roomNumber,
      Amount: roomData?.pricePerHead,
      Capacity: roomData?.capacity,
    },
  });

  const userContext = useContext(UserContext);
  const minCapacity = userContext?.getUsersByRoomNumber(
    roomData?.roomNumber,
  ).length;

  const minCapacityValidationRule = useCallback(
    (value: string) => {
      return (
        parseInt(value) >= minCapacity ||
        `Capacity should be more than ${minCapacity}`
      );
    },
    [minCapacity],
  );

  const [type, setType] = useState<'AC' | 'Non-AC'>(roomData?.type || 'Non-AC');
  const [error, setError] = useState<string>();

  const handleACChange = useCallback((value: boolean) => {
    setType(value ? 'AC' : 'Non-AC');
  }, []);

  const onValidSubmit = useCallback(
    (data: any) => {
      const newRoomData = {
        roomNumber: data['Room Number'],
        pricePerHead: data.Amount,
        type: type,
        capacity: data.Capacity,
      };
      if (roomData) {
        roomContext.editRoom(newRoomData);
        setVisible(false);
      } else {
        const res = roomContext.addRoom(newRoomData);
        if (res) setVisible(false);
        else setError('Room Number Already exists');
      }
    },
    [roomContext, roomData, setVisible, type],
  );

  return (
    <ScrollView>
      <RNText text={roomData ? 'Edit Room' : 'Add Room'} size="large" />
      <Input
        name={'Room Number'}
        placeHolder="Enter Room Number"
        type="number"
        color="dark"
        readOnly={roomData !== undefined}
        control={control}
        rules={roomNumberRules}
      />

      <Input
        name={'Capacity'}
        placeHolder="Enter Room Capacity"
        type="number"
        color="dark"
        control={control}
        rules={{
          ...capacityRules,
          validate: minCapacityValidationRule,
        }}
      />
      <Input
        name={'Amount'}
        placeHolder="Enter Fee Amount"
        type="number"
        color="dark"
        control={control}
        rules={amountRules}
      />
      <Switch
        value={type === 'AC'}
        setValue={handleACChange}
        label={'AC Availability'}
        color="dark"
      />

      <Button
        onPress={handleSubmit(onValidSubmit)}
        backgroundColor={Colors.backGroundEnd}>
        <RNText
          text={roomData ? 'Edit' : 'Add'}
          type="light"
          size="medium"
          style={textStyles.btnText}
        />
      </Button>
      {error && <RNText text={`${error}`} type="red" />}
    </ScrollView>
  );
}

export default memo(ModalForm);
