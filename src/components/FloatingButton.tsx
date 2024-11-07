import {memo, useMemo} from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

interface FloatingButtonProps {
  onPress: (event: GestureResponderEvent) => void;
  children: JSX.Element;
  left?: number;
  right?: number;
  bottom?: number;
  top?: number;
}

function FloatingButton(props: FloatingButtonProps) {
  const styles = useMemo(() => {
    return StyleSheet.create({
      floatingButton: {
        position: 'absolute',
        right: props.right,
        bottom: props.bottom,
        top: props.top,
        left: props.left,
      },
    });
  }, [props]);

  return (
    <TouchableOpacity style={styles.floatingButton} onPress={props.onPress}>
      {props.children}
    </TouchableOpacity>
  );
}

export default memo(FloatingButton);
