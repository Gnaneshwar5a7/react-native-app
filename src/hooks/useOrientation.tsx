import {useEffect, useState} from 'react';
import {Dimensions} from 'react-native';

function useOrientation() {
  const {height, width} = Dimensions.get('screen');
  const [orientation, setOrientation] = useState<'LANDSCAPE' | 'PORTRAIT'>(
    height < width ? 'LANDSCAPE' : 'PORTRAIT',
  );

  useEffect(() => {
    const id = setInterval(() => {
      const {height, width} = Dimensions.get('screen');
      setOrientation(height < width ? 'LANDSCAPE' : 'PORTRAIT');
    }, 1);
    return () => {
      clearInterval(id);
    };
  }, []);
  return orientation;
}
export default useOrientation;
