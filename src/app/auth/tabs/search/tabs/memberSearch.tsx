import {memo, useCallback, useContext, useMemo, useState} from 'react';
import { View } from 'react-native';

import {UserContext, UserType} from '../../../../../context/UserContext';
import SearchedMemberCard from '../components/SearchedMemberCard';
import SearchInput from '../components/SearchInput';
import List from '../../../../../components/List';
import style from '../../../../../styles/style';

function MemberSearch() {
  const userContext = useContext(UserContext);
  const [searchKey, setSearchKey] = useState('');

  const filteredUsersList = useMemo(() => {
    const filter = (user: UserType) => {
      const name = user.name.toLowerCase();
      return name.includes(searchKey.toLowerCase());
    };
    const filteredList = userContext?.usersList.filter(filter);
    return filteredList || [];
  }, [userContext, searchKey]);

  const resetStates = useCallback(() => {
    setSearchKey('');
  }, []);

  const renderConponent = useCallback(
    (props: any) => {
      return <SearchedMemberCard user={props.item} reset={resetStates} />;
    },
    [resetStates],
  );

  return (
    <View style={style.grow}>
      <SearchInput
        placeHolder={'search user name...'}
        value={searchKey}
        setValue={setSearchKey}
      />
      {searchKey !== '' && (
        <List cols={1} renderItem={renderConponent} list={filteredUsersList} />
      )}
    </View>
  );
}

export default memo(MemberSearch);
