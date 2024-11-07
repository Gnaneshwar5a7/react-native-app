import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {View, Modal, StyleSheet} from 'react-native';
import {memo, useCallback} from 'react';

import Colors from '../styles/Colors';
import Button from './Button';

interface RNModelProps {
  visible: boolean;
  setVisible: Function;
  children: JSX.Element;
  style?: any;
}

function RNModal({visible, setVisible, children, style}: RNModelProps) {
  const handleOnClose = useCallback(() => {
    setVisible(false);
  }, [setVisible]);
  return (
    <Modal
      onRequestClose={handleOnClose}
      visible={visible}
      transparent={true}
      animationType={'slide'}>
      <View style={[styles.container]}>
        <View style={[styles.innerContainer, style]}>
          <View style={styles.btnClose}>
            <Button onPress={handleOnClose} backgroundColor="none">
              <Icon name="close" size={30} color={Colors.primary} />
            </Button>
          </View>
          {children}
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    paddingTop: 50,
  },
  innerContainer: {
    padding: 20,
    flex: 1,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: Colors.secondery,
  },
  btnClose: {
    alignSelf: 'flex-end',
  },
});

export default memo(RNModal);
