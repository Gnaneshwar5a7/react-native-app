import AsyncStorage from '@react-native-async-storage/async-storage';

import {UserType} from '../context/UserContext';

const userStoreKey = 'usersDetails';

export async function getUsersDataFromStore(
  callback: (data: UserType[]) => void,
) {
  const result = await AsyncStorage.getItem(userStoreKey);

  if (result != null) {
    let data = JSON.parse(result);
    data = data.map((user: any) => {
      if (user.dateOfJoining === undefined) {
        return user;
      }
      return {
        ...user,
        price: parseInt(user.price),
        dateOfJoining: new Date(user.dateOfJoining),
        paymentDate: user.paymentDate ? new Date(user.paymentDate) : undefined,
      };
    });
    callback(data);
  }
}

export function setUSersDataToStore(data: UserType[]) {
  const stringifiedData = JSON.stringify(data);
  AsyncStorage.setItem(userStoreKey, stringifiedData);
}
