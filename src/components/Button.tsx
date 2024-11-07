import { memo } from "react";
import {
  GestureResponderEvent,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

interface ButtonProps {
  children: JSX.Element;
  onPress: (event: GestureResponderEvent) => void;
  isActive?: boolean;
  backgroundColor?: string;
  opacity?: number;
}

function Button({
  children,
  onPress,
  isActive = true,
  opacity = 0.2,
  backgroundColor = "orange",
}: ButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={opacity}
      onPress={onPress}
      disabled={!isActive}
      style={[
        styles.btn,
        backgroundColor !== "none" && { backgroundColor: backgroundColor },
      ]}
      children={children}
    />
  );
}

const styles = StyleSheet.create({
  btn: {
    borderRadius: 20,
  },
  activeBtn: {
    opacity: 1,
  },
  disabledBtn: {
    opacity: 0.5,
  },
});
export default memo(Button);
