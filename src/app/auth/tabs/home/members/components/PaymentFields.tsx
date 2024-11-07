import {memo, useCallback, useContext, useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';

import {UserContext, UserType} from '../../../../../../context/UserContext';
import {calculateDueDate} from '../../../../../../utils/dates/calculateDueDate';
import {dateDifference} from '../../../../../../utils/dates/dateDifference';
import {formatedDate} from '../../../../../../utils/dates/formatedDate';
import textStyles from '../../../../../../styles/textStyles';
import RNText from '../../../../../../components/RNText';
import Button from '../../../../../../components/Button';
import style from '../../../../../../styles/style';

function PaymentFields({user}: {user: UserType}) {
  const usersContext = useContext(UserContext);
  const dueDate = calculateDueDate(user.paymentDate ?? user.dateOfJoining);
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

  const handlePayment = useCallback(() => {
    const userData: UserType = {
      ...user,
      paymentDate: new Date(),
    };
    usersContext?.editUser(userData);
  }, [user, usersContext]);

  return (
    <View style={styles.paymentContainer}>
      <View style={style.flexRow}>
        <View>
          <View style={style.flexRow}>
            <RNText text={'Payment Amount'} />
            <RNText text={`${user.price}`} />
          </View>

          {user.paymentDate && (
            <View style={style.flexRow}>
              <RNText text={'Payment Date :'} />
              <RNText text={formatedDate(user.paymentDate)} />
            </View>
          )}
          <View style={[style.flexRow, style.grow]}>
            <RNText text={'Due Date'} />
            <RNText text={formatedDate(dueDate)} />
          </View>
        </View>
        <View style={[style.flexRow, style.grow, styles.btnContainer]}>
          {dueDateDuration < 0 && (
            <Button onPress={handlePayment} backgroundColor="green">
              <View style={styles.btn}>
                <RNText
                  text={'Payment'}
                  style={textStyles.btnText}
                  type="light"
                />
              </View>
            </Button>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  paymentContainer: {
    borderWidth: 1,
    paddingVertical: 10,
    marginVertical: 5,
    borderRadius: 10,
  },
  btnContainer: {
    justifyContent: 'flex-end',
    padding: 10,
  },
  btn: {
    width: 100,
  },
});

export default memo(PaymentFields);
