import Icon from 'react-native-vector-icons/Feather';
import {useState, useEffect, memo} from 'react';
import {StyleSheet, View} from 'react-native';

import {calculateDueDate} from '../../../../../../utils/dates/calculateDueDate';
import {dateDifference} from '../../../../../../utils/dates/dateDifference';
import {formatedDate} from '../../../../../../utils/dates/formatedDate';
import {mediumFontSize} from '../../../../../../styles/textStyles';
import RNText from '../../../../../../components/RNText';

interface PaymentAlertProps {
  paymentDate?: Date;
  dateOfJoining: Date;
}

function PaymentAlert({paymentDate, dateOfJoining}: PaymentAlertProps) {
  const dueDate = calculateDueDate(paymentDate ?? dateOfJoining);
  const [dueDateDuration, setDateDuration] = useState(
    dateDifference(new Date(), dueDate),
  );
  useEffect(() => {
    const id = setInterval(() => {
      setDateDuration(dateDifference(new Date(), dueDate));
    }, 10000);
    return () => {
      clearInterval(id);
    };
  }, [dueDate]);

  return (
    <View style={styles.alertContainer}>
      {dueDateDuration < 0 && (
        <Icon name="alert-circle" size={mediumFontSize} color={'red'} />
      )}
      <RNText
        text={'Due Date:' + formatedDate(dueDate)}
        type={dueDateDuration < 0 ? 'red' : 'primary'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  alertContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
});
export default memo(PaymentAlert);