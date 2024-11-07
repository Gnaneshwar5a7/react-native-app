import {Text} from 'react-native';
import {memo, useMemo} from 'react';

import textStyles from '../styles/textStyles';

interface RNTextProps {
  text: JSX.Element | string | undefined;
  size?: 'medium' | 'small' | 'large';
  type?: 'dark' | 'light' | 'warn' | 'success' | 'primary' | 'red';
  style?: any;
}

function RNText({text, size, type, style}: RNTextProps) {
  const styles = useMemo(() => {
    const styles: any[] = [{padding: 3}];
    switch (type) {
      case 'warn':
        styles.push(textStyles.warnText);
        break;
      case 'primary':
        styles.push(textStyles.primaryText);
        break;
      case 'success':
        styles.push(textStyles.greenText);
        break;
      case 'red':
        styles.push(textStyles.dangerText);
        break;
      case 'light':
        styles.push(textStyles.lightText);
        break;
      default:
        styles.push(textStyles.darkText);
        break;
    }

    switch (size) {
      case 'large':
        styles.push(textStyles.headerText);
        break;
      case 'medium':
        styles.push(textStyles.subHeaderText);
        break;
      default:
        styles.push(textStyles.smallText);
        break;
    }
    return styles;
  }, [type, size]);

  return <Text style={[...styles, style]}>{text}</Text>;
}

export default memo(RNText);
