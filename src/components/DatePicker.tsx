import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/AntDesign';
import {memo, useCallback, useState} from 'react';
import {StyleSheet, View} from 'react-native';

import {formatedDate} from '../utils/dates/formatedDate';
import style from '../styles/style';
import Button from './Button';
import RNText from './RNText';

interface DatePickerProps {
  date: Date;
  setDate: Function;
  readOnly?: boolean;
}

function DatePicker({date, setDate, readOnly = false}: DatePickerProps) {
  const [datepickerVisible, setDatePickerVisible] = useState(false);

  const handleOnChange = useCallback(
    (event: any) => {
      setDatePickerVisible(false);
      setDate(new Date(event.nativeEvent.timestamp));
    },
    [setDate],
  );

  return (
    <View style={style.flexRow}>
      <RNText text="Date of Joining" />
      <Button
        onPress={() => setDatePickerVisible(true)}
        backgroundColor="none"
        isActive={!readOnly}>
        <View style={[style.flexRow, styles.date]}>
          <Icon name="calendar" size={20} />
          <RNText text={formatedDate(date)} />
        </View>
      </Button>

      {datepickerVisible && !readOnly && (
        <DateTimePicker
          mode="date"
          value={date}
          onChange={handleOnChange}
          display={'calendar'}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  date: {
    margin: 5,
  },
});
export default memo(DatePicker);
