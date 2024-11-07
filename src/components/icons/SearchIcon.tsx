import Icon from "react-native-vector-icons/Feather";
import { IconProps } from "./HomeIcon";

function SearchIcon(props: IconProps) {
  return <Icon name="search" size={20} color={props.color}></Icon>;
}

export default SearchIcon;
