import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import SettingIcon from '../../../components/icons/SettingIcon';
import SearchIcon from '../../../components/icons/SearchIcon';
import HomeIcon from '../../../components/icons/HomeIcon';
import SettingsLayout from './settings/_layout';
import SearchLayout from './search/_layout';
import Colors from '../../../styles/Colors';
import style from '../../../styles/style';
import HomeLayout from './home/_layout';

const Tabs = createMaterialTopTabNavigator();
export default function TabLayout() {
  return (
    <Tabs.Navigator
      tabBarPosition="bottom"
      screenOptions={{
        tabBarItemStyle: {
          padding: 5,
        },
        tabBarActiveTintColor: Colors.backGroundEnd,
        tabBarInactiveTintColor: 'gray',
      }}
      initialRouteName="home"
      sceneContainerStyle={style.background}>
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: HomeIcon,
        }}
        component={HomeLayout}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: SearchIcon,
        }}
        component={SearchLayout}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: SettingIcon,
        }}
        component={SettingsLayout}
      />
    </Tabs.Navigator>
  );
}
