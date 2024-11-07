import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';

import OrientationContextProvider from '../context/OrientationContext';
import AuthContextProvider from '../context/AuthContext';
import RoomContextProvider from '../context/RoomContext';
import UserContextProvider from '../context/UserContext';
import AuthLayout from './auth/_layout';
import Colors from '../styles/Colors';
import style from '../styles/style';
import Launcher from './index';
import Login from './login';

const Stack = createNativeStackNavigator();
export default function RootLayout() {
  return (
    <AuthContextProvider>
      <RoomContextProvider>
        <UserContextProvider>
          <OrientationContextProvider>
            <SafeAreaView style={style.grow}>
              <StatusBar
                barStyle={'light-content'}
                backgroundColor={Colors.backgroundStart}
              />
              <Stack.Navigator
                screenOptions={{
                  headerShown: false,
                  contentStyle: style.background,
                }}>
                <Stack.Screen name="index" component={Launcher} />
                <Stack.Screen name="auth" component={AuthLayout} />
                <Stack.Screen name="login" component={Login} />
              </Stack.Navigator>
            </SafeAreaView>
          </OrientationContextProvider>
        </UserContextProvider>
      </RoomContextProvider>
    </AuthContextProvider>
  );
}
