import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Header from '../../../../components/Header';
import Settings from '.';

const Stack = createNativeStackNavigator();
export default function SettingsLayout() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="index"
        component={Settings}
        options={{header: Header, headerTitle: 'Settings'}}
      />
    </Stack.Navigator>
  );
}
