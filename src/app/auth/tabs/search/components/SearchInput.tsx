import {StyleSheet, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {memo, useCallback} from 'react';

import Button from '../../../../../components/Button';
import Colors from '../../../../../styles/Colors';
import {
  contentFontSize,
  mediumFontSize,
} from '../../../../../styles/textStyles';

interface SearchInputProps {
  value: string;
  setValue: Function;
  type?: 'text' | 'number';
  placeHolder: string;
}

function SearchInput({
  value,
  setValue,
  type = 'text',
  placeHolder,
}: SearchInputProps) {
  const handleOnChange = useCallback(
    (text: string) => {
      setValue(text);
    },
    [setValue],
  );
  return (
    <View style={styles.container}>
      <TextInput
        keyboardType={type === 'number' ? 'numeric' : 'ascii-capable'}
        value={value}
        onChangeText={handleOnChange}
        placeholder={placeHolder}
        style={styles.input}
      />
      <View style={styles.searchBtn}>
        <Button onPress={() => {}} backgroundColor="" opacity={1}>
          <Icon name="search" size={mediumFontSize} color={Colors.secondery} />
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    borderRadius: 50,
    flexDirection: 'row',
    backgroundColor: Colors.secondery,
    overflow: 'hidden',
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: contentFontSize,
  },
  searchBtn: {
    backgroundColor: Colors.backGroundEnd,
    padding: 15,
    paddingHorizontal: 20,
  },
});
export default memo(SearchInput);