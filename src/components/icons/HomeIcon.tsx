import Icon from "react-native-vector-icons/AntDesign";

export interface IconProps {
  focused: boolean;
  color: string;
}

function HomeIcon(props: IconProps) {
  return <Icon name="home" size={20} color={props.color}></Icon>;
}

export default HomeIcon;