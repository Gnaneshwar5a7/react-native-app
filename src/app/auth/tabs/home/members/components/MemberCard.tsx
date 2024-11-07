import { memo, useCallback, useContext, useState } from "react";
import { Linking, StyleSheet, View } from "react-native";
import { useRoute } from "@react-navigation/native";

import { mediumFontSize, titleFontSize } from "../../../../../../styles/textStyles";
import { OrientationContext } from "../../../../../../context/OrientationContext";
import { UserType } from "../../../../../../context/UserContext";
import RNModal from "../../../../../../components/RNModal";
import RNImage from "../../../../../../components/RNImage";
import Button from "../../../../../../components/Button";
import Icon from "react-native-vector-icons/FontAwesome";
import RNText from "../../../../../../components/RNText";
import Colors from "../../../../../../styles/Colors";
import style from "../../../../../../styles/style";
import PaymentAlert from "./PaymentAlert";
import Form from "./Form";

function MemberCard({ user }: { user: UserType }) {
  const params: any = useRoute().params;
  const [userFormVisible, setUserFormVisible] = useState(
    user.id === params?.userID || false
  );
  const orientation = useContext(OrientationContext);

  const handleTelClick = useCallback(() => {
    Linking.openURL(`tel:${user.phNumber}`);
  }, [user.phNumber]);

  const handleToggleForm = useCallback(() => {
    setUserFormVisible(true);
  }, []);
  return (
    <View
      style={
        orientation === "PORTRAIT" ? style.container : style.landScapeContainer
      }
    >
      <Button onPress={handleToggleForm} opacity={0.9} backgroundColor="none">
        <View style={[style.card, style.shadow]}>
          {user.image ? (
            <RNImage base64={user.image} style={styles.image} />
          ) : (
            <Icon
              name="user"
              size={titleFontSize * 2}
              color={Colors.backgroundStart}
            />
          )}
          <RNText text={user.name} type="dark" size="medium" />
          <View style={style.flexRow}>
            <View style={style.flexRow}>
              <Icon
                name="rupee"
                color={Colors.backGroundEnd}
                size={mediumFontSize}
              />
              <RNText text={`${user.price}`} type="primary" />
            </View>

            <Button backgroundColor="none" onPress={handleTelClick}>
              <View style={style.flexRow}>
                <Icon
                  name="phone"
                  color={Colors.backGroundEnd}
                  size={mediumFontSize}
                />
                <RNText text={`${user.phNumber}`} type="primary" />
              </View>
            </Button>
          </View>
          <View style={styles.alertContainer}>
            <PaymentAlert
              paymentDate={user.paymentDate}
              dateOfJoining={user.dateOfJoining}
            />
          </View>
        </View>
      </Button>
      <RNModal visible={userFormVisible} setVisible={setUserFormVisible}>
        <Form user={user} setVisible={setUserFormVisible} />
      </RNModal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    right: 5,
  },
  profileModal: {
    backgroundColor: Colors.seconderyBackground,
  },
  alertContainer: {
    height: 30,
    width: "100%",
    alignItems: "center",
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 50,
  },
});

export default memo(MemberCard);
