import {memo, useCallback, useContext, useMemo, useState} from 'react';
import {View} from 'react-native';

import {RoomContext} from '../../../../../context/RoomContext';
import SearchedRoomCard from '../components/SearchedRoomCard';
import SearchInput from '../components/SearchInput';
import List from '../../../../../components/List';
import style from '../../../../../styles/style';

function RoomSearch() {
  const roomContext = useContext(RoomContext);
  const [searchKey, setSearchKey] = useState('');

  const filteredRoomNumbersList = useMemo(() => {
    const filter = (number: string) => {
      return number.includes(searchKey);
    };
    const filteredRoomsList = roomContext.getAllRoomNumbers().filter(filter);
    return filteredRoomsList;
  }, [roomContext, searchKey]);

  const resetStates = useCallback(() => {
    setSearchKey('');
  }, []);

  function renderConponent(props: any) {
    return <SearchedRoomCard {...props} reset={resetStates} />;
  }
  return (
    <View style={style.grow}>
      <SearchInput
        placeHolder="search room number..."
        type="number"
        value={searchKey}
        setValue={setSearchKey}
      />
      {searchKey !== '' && (
        <List
          cols={1}
          renderItem={renderConponent}
          list={filteredRoomNumbersList}
        />
      )}
    </View>
  );
}

export default memo(RoomSearch);
