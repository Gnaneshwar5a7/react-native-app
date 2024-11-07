import {useNavigation, StackActions} from '@react-navigation/native';
import {useContext, useEffect} from 'react';

import {AuthContext} from '../../context/AuthContext';
import TabLayout from './tabs/_layout';

export default function AuthLayout() {
  const context = useContext(AuthContext);
  const navigation = useNavigation<any>();
  useEffect(() => {
    if (!context?.authUser?.loginStatus) {
      navigation.replace('login');
    }
  }, [context]);
  return <TabLayout />;
}
