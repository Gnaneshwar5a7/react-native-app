import {StyleSheet, Switch, View} from 'react-native';
import {memo, useCallback} from 'react';

import Colors from '../styles/Colors';
import RNText from './RNText';

interface SwitchPropType {
  value: boolean;
  setValue: Function;
  label: string;
  color: 'dark' | 'light';
}

export default memo(function RNSwitch({
  value,
  setValue,
  label,
  color,
}: SwitchPropType) {
  const thumbColor = value ? Colors.backGroundEnd : 'rgb(230,240,225)';

  const handleChange = useCallback(() => {
    setValue(!value);
  }, [setValue, value]);

  return (
    <View style={styles.container}>
      <RNText text={label} type={color} />
      <Switch value={value} onChange={handleChange} thumbColor={thumbColor} />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
