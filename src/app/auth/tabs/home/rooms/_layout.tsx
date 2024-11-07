import {createNativeStackNavigator} from '@react-navigation/native-stack';

import style from '../../../../../styles/style';
import Rooms from './index';

const Stack = createNativeStackNavigator();
export default function RoomsLayout() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: style.background,
      }}>
      <Stack.Screen name="index" component={Rooms} />
    </Stack.Navigator>
  );
}
