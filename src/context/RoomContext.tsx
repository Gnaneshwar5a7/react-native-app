import React, {createContext, useEffect, useState} from 'react';

import {getRoomsDataFromStore, setRoomsDataToStore} from '../store/roomsStore';

export interface RoomType {
  roomNumber: number;
  capacity: number;
  pricePerHead: number;
  type: 'AC' | 'Non-AC';
}

interface RoomContextType {
  roomsList: RoomType[];
  setRoomsList: Function;
  addRoom: Function;
  deleteRoom: Function;
  editRoom: Function;
  getAllRoomNumbers: Function;
  getRoomByNumber(roomNumber: number): RoomType;
}

interface RoomContextProviderProps {
  children: JSX.Element;
}

export const RoomContext = createContext<RoomContextType>(
  {} as RoomContextType,
);

export default function RoomContextProvider(props: RoomContextProviderProps) {
  const [roomsList, setRoomsList] = useState<RoomType[]>([]);
  useEffect(() => {
    getRoomsDataFromStore(setRoomsList);
    // setRoomsList(roomsData);
  }, []);

  const isRoomExist = (roomNumber: number) => {
    const idx = roomsList.findIndex(item => item.roomNumber === roomNumber);
    return idx !== -1;
  };

  function addRoom(room: RoomType) {
    if (isRoomExist(room.roomNumber)) return false;
    const newRoomsList = [...roomsList, room];
    setRoomsList(newRoomsList);
    setRoomsDataToStore(newRoomsList);
    return true;
  }

  function editRoom(room: RoomType) {
    if (!isRoomExist(room.roomNumber)) return false;
    const editFilter = (item: RoomType) => {
      if (item.roomNumber === room.roomNumber) return room;
      return item;
    };
    const newRoomsList = roomsList.map(editFilter);
    setRoomsList(newRoomsList);
    setRoomsDataToStore(newRoomsList);
    return true;
  }

  function deleteRoom(roomNumber: number) {
    const deleteFilter = (room: RoomType) => {
      return room.roomNumber !== roomNumber;
    };
    const newRoomsList = roomsList.filter(deleteFilter);
    setRoomsList(newRoomsList);
    setRoomsDataToStore(newRoomsList);
  }

  function getRoomByNumber(roomNumber: number) {
    const room = roomsList.find(room => room.roomNumber === roomNumber);
    return room as RoomType;
  }

  function getAllRoomNumbers() {
    return roomsList.map(room => room.roomNumber.toString());
  }
  return (
    <RoomContext.Provider
      value={{
        roomsList,
        setRoomsList,
        addRoom,
        deleteRoom,
        editRoom,
        getRoomByNumber,
        getAllRoomNumbers,
      }}
      children={props.children}
    />
  );
}
