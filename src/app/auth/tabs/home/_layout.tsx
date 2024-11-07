import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Header from '../../../../components/Header';
import style from '../../../../styles/style';
import RoomsLayout from './rooms/_layout';
import Members from './members';

const Stack = createNativeStackNavigator();
function HomeLayout() {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: style.background,
      }}>
      <Stack.Screen
        name="rooms"
        options={{header: Header}}
        component={RoomsLayout}
      />
      <Stack.Screen
        name="members"
        options={{header: Header}}
        component={Members}
      />
    </Stack.Navigator>
  );
}

export default HomeLayout;
