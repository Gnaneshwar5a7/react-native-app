import {FlatList, StyleSheet, View} from 'react-native';
import {memo, useCallback, useMemo} from 'react';

import Colors from '../styles/Colors';
import style from '../styles/style';
import RNText from './RNText';

interface ListProps {
  list: any[];
  renderItem({item, index}: {item: any; index: number}): JSX.Element;
  headerText?: string;
  cols?: number;
}

function List({list, renderItem, headerText, cols = 1}: ListProps) {
  const keyExtractor = useCallback((object: any) => {
    return JSON.stringify(object);
  }, []);

  const ListHeader = useMemo(
    () =>
      function Header() {
        return (
          <View style={[styles.headerStyle, style.shadow]}>
            <RNText text={headerText} size="medium" type="light" />
          </View>
        );
      },
    [headerText],
  );

  const ListEmptyComponent = useMemo(
    () =>
      function EmptyComponent() {
        return (
          <RNText
            text={'No Data found'}
            type="warn"
            size="medium"
            style={{textAlign: 'center'}}
          />
        );
      },
    [],
  );

  return (
    <View style={[style.grow]}>
      {headerText && <ListHeader />}
      <FlatList
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        data={list}
        renderItem={renderItem}
        ListEmptyComponent={ListEmptyComponent}
        style={[styles.list, style.shadow]}
        columnWrapperStyle={cols !== 1 && styles.columnContainer}
        indicatorStyle="white"
        numColumns={cols}
        extraData={list}
        keyExtractor={keyExtractor}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    marginHorizontal: 10,
    marginVertical: 5,
    backgroundColor: Colors.seconderyBackground,
  },
  headerStyle: {
    backgroundColor: Colors.backgroundStart,
    borderTopEndRadius: 10,
    borderTopLeftRadius: 10,
    padding: 5,
    marginHorizontal: 10,
  },
  columnContainer: {
    paddingRight: 5,
  },
});
export default memo(List);
