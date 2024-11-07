import { memo, useCallback, useContext, useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { View, StyleSheet } from "react-native";

import { contentFontSize, titleFontSize } from "../../../../../../styles/textStyles";
import { OrientationContext } from "../../../../../../context/OrientationContext";
import RNModal from "../../../../../../components/RNModal";
import RNText from "../../../../../../components/RNText";
import Button from "../../../../../../components/Button";
import Colors from "../../../../../../styles/Colors";
import style from "../../../../../../styles/style";
import Form from "./Form";

function EmptyMemberCard() {
  const [userFormVisible, setUserFormVisible] = useState(false);
  const orientation = useContext(OrientationContext);
  const handleToggleForm = useCallback(() => {
    setUserFormVisible(true);
  }, []);

  return (
    <View
      style={
        orientation === "LANDSCAPE" ? style.landScapeContainer : style.container
      }
    >
      <Button onPress={handleToggleForm} backgroundColor="none" opacity={0.6}>
        <View style={[style.card, style.shadow, styles.container]}>
          <Icon
            name="user"
            color={Colors.primary}
            size={titleFontSize * 2}
            style={styles.opacity}
          />
          <RNText text={"Add User"} type="dark" size="medium" />

          <View style={style.flexRow}>
            <Icon name="rupee" color={Colors.primary} size={contentFontSize} />
            <RNText text={`0000`} type="dark" />

            <View style={style.flexRow}>
              <Icon
                name="phone"
                color={Colors.primary}
                size={contentFontSize}
              />
              <RNText text={`0000000000`} type="dark" />
            </View>
          </View>
        </View>
      </Button>
      <RNModal visible={userFormVisible} setVisible={setUserFormVisible}>
        <Form setVisible={setUserFormVisible} />
      </RNModal>
    </View>
  );
}

const styles = StyleSheet.create({
  opacity: {
    opacity: 0.7,
  },
  container: {
    opacity: 0.8,
    paddingBottom: 35,
  },
});

export default memo(EmptyMemberCard);