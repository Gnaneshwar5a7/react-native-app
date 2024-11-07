import {StyleSheet} from 'react-native';

import Colors from './Colors';

export default StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: Colors.backgroundStart,
  },
  shadow: {
    shadowColor: Colors.primary,
    shadowOffset: {
      width: 10,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 10,
  },
  grow: {
    flex: 1,
  },
  container: {
    flexBasis: '50%',
    paddingLeft: 5,
    paddingBottom: 5,
  },
  landScapeContainer: {
    flexBasis: '25%',
    paddingLeft: 5,
    paddingBottom: 5,
  },
  card: {
    backgroundColor: Colors.secondery,
    borderRadius: 5,
    paddingVertical: 5,
    alignItems: 'center',
  },

  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  popUp: {
    flex: 0,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: Colors.secondery,
    borderTopEndRadius: 10,
    borderTopLeftRadius: 10,
    borderRadius: 10,
  },
});
