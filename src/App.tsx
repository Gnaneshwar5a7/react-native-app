import {RootTagContext} from 'react-native';
import RootLayout from './app/_layout';
import {NavigationContainer} from '@react-navigation/native';

import {useContext} from 'react';
function App() {
  const context = useContext(RootTagContext);
  return (
    <NavigationContainer>
      <RootLayout />
    </NavigationContainer>
  );
}
export default App;
