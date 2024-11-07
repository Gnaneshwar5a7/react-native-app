import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import UsersIcon from '../../../../../components/icons/UsersIcon';
import HomeIcon from '../../../../../components/icons/HomeIcon';
import TopTabBar from '../../../../../components/TopTabBar';
import style from '../../../../../styles/style';
import memberSearch from './memberSearch';
import roomSearch from './roomSearch';

const Tabs = createMaterialTopTabNavigator();

function TopTabsLayout() {
  return (
    <Tabs.Navigator sceneContainerStyle={[style.background]} tabBar={TopTabBar}>
      <Tabs.Screen
        name="roomSearch"
        options={{
          tabBarLabel: 'rooms',
          tabBarIcon: HomeIcon,
        }}
        component={roomSearch}
      />
      <Tabs.Screen
        name="memberSearch"
        options={{
          tabBarLabel: 'members',
          tabBarIcon: UsersIcon,
        }}
        component={memberSearch}
      />
    </Tabs.Navigator>
  );
}

export default TopTabsLayout;
