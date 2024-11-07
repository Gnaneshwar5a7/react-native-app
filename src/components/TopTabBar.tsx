import {View, StyleSheet} from 'react-native';
import {memo, useCallback} from 'react';

import {mediumFontSize} from '../styles/textStyles';
import Colors from '../styles/Colors';
import Button from './Button';
import RNText from './RNText';

const TabItem = memo(({label, name, isFocused, navigation, options}: any) => {
  const Icon = options.tabBarIcon;
  const onPress = useCallback(() => {
    if (!isFocused) {
      navigation.navigate(name);
    }
  }, [isFocused, name, navigation]);

  return (
    <Button
      onPress={onPress}
      backgroundColor={
        isFocused
          ? options.tabBarActiveBackgroundColor || Colors.secondery
          : options.tabBarInactiveBackgroundColor || Colors.secondery
      }>
      <View style={[styles.itemStyle, options.tabBarItemStyle]}>
        <Icon
          color={
            isFocused
              ? options.tabBarActiveTintColor || Colors.backGroundEnd
              : options.tabBarInactiveTintColor || 'gray'
          }
          size={mediumFontSize}
        />
        <RNText
          text={label || name}
          style={{
            color: isFocused
              ? options.tabBarActiveTintColor || Colors.backGroundEnd
              : options.tabBarInactiveTintColor || 'gray',
          }}
        />
      </View>
    </Button>
  );
});

function TopTabBar({state, descriptors, navigation}: any) {
  return (
    <View style={styles.container}>
      {state.routes.map((route: any, index: number) => {
        const {options} = descriptors[route.key];
        const name = route.name;
        const label = options.tabBarLabel;
        const isFocused = state.index === index;
        return (
          <TabItem
            navigation={navigation}
            isFocused={isFocused}
            label={label}
            name={name}
            key={route.key}
            options={options}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  itemStyle: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});

export default TopTabBar;
