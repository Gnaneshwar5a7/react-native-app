import AsyncStorage from '@react-native-async-storage/async-storage';

import {RoomType} from '../context/RoomContext';

const roomStoreKey = 'roomsDetails';

export async function getRoomsDataFromStore(
  callback: (data: RoomType[]) => void,
) {
  const result = await AsyncStorage.getItem(roomStoreKey);
  if (result != null) {
    const data = JSON.parse(result);
    callback(data);
  }
}

export function setRoomsDataToStore(data: RoomType[]) {
  const stringfiedData = JSON.stringify(data);
  AsyncStorage.setItem(roomStoreKey, stringfiedData);
}
