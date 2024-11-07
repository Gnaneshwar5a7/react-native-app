import Icon from "react-native-vector-icons/FontAwesome6";

export interface IconProps {
  focused: boolean;
  color: string;
}

function UsersIcon(props: IconProps) {
  return <Icon name="user" size={20} color={props.color} />;
}

export default UsersIcon;
