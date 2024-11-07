import AsyncStorage from '@react-native-async-storage/async-storage';

import {AuthUserType} from '../context/AuthContext';

const authStoreKey = 'authUser';

export async function getAuthUserFromStore(
  callback: (data: AuthUserType) => void,
) {
  const result = await AsyncStorage.getItem(authStoreKey);
  if (result != null) {
    const data: AuthUserType = JSON.parse(result);
    callback(data);
  }
}

export function setAuthUserToStore(data: AuthUserType) {
  const stringifiedData = JSON.stringify(data);
  AsyncStorage.setItem(authStoreKey, stringifiedData);
}
