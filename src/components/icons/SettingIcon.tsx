import Icon from "react-native-vector-icons/AntDesign";
import { IconProps } from "./HomeIcon";

function SettingIcon(props: IconProps) {
  return <Icon name="setting" size={20} color={props.color} />;
}

export default SettingIcon;
