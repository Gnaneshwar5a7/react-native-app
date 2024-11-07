import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Header from '../../../../components/Header';
import style from '../../../../styles/style';
import TopTabsLayout from './tabs/_layout';

const Stack = createNativeStackNavigator();
export default function SearchLayout() {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: style.background,
      }}>
      <Stack.Screen
        name="tabs"
        component={TopTabsLayout}
        options={{header: Header, headerTitle: 'Search'}}
      />
    </Stack.Navigator>
  );
}
