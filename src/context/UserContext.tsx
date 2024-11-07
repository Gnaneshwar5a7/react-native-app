import React, {createContext, useEffect, useState} from 'react';

import {getUsersDataFromStore, setUSersDataToStore} from '../store/usersStore';

export interface UserType {
  id: number;
  name: string;
  roomNumber: number;
  price: number;
  phNumber: number;
  image: string | undefined;
  dateOfJoining: Date;
  paymentDate?: Date;
}

interface UserContextType {
  usersList: UserType[];
  addUser: Function;
  deleteUser: Function;
  editUser: Function;
  getUsersByRoomNumber: Function;
  deleteUsersByRoomNumber: Function;
}

interface UserContextProviderProps {
  children: JSX.Element;
}

export const UserContext = createContext<UserContextType | undefined>(
  undefined,
);

export default function UserContextProvider(props: UserContextProviderProps) {
  const [usersList, setUsersList] = useState<UserType[]>([]);

  useEffect(() => {
    getUsersDataFromStore(setUsersList);
  }, []);

  function getUsersByRoomNumber(roomNumber: number) {
    return usersList.filter(user => user.roomNumber === roomNumber);
  }

  function addUser(user: UserType) {
    const id = Date.now();
    user.id = id;
    const newUsersList = [...usersList, user];
    setUsersList(newUsersList);
    setUSersDataToStore(newUsersList);
    return true;
  }

  function deleteUser(id: number) {
    const deleteFilter = (user: UserType) => {
      return user.id !== id;
    };
    const newUsersList = usersList.filter(deleteFilter);
    setUsersList(newUsersList);
    setUSersDataToStore(newUsersList);
  }

  function editUser(user: UserType) {
    const editFilter = (item: UserType) => {
      if (item.id === user.id) return user;
      return item;
    };
    const newUsersList = usersList.map(editFilter);
    setUsersList(newUsersList);
    setUSersDataToStore(newUsersList);
  }

  function deleteUsersByRoomNumber(roomNumber: number) {
    const newUsersList = usersList.filter(user => {
      return user.roomNumber != roomNumber;
    });
    setUsersList(newUsersList);
    setUSersDataToStore(newUsersList);
  }
  return (
    <UserContext.Provider
      value={{
        usersList,
        getUsersByRoomNumber,
        addUser,
        deleteUser,
        editUser,
        deleteUsersByRoomNumber,
      }}
      children={props.children}
    />
  );
}
