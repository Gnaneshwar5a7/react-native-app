import React, { memo, useCallback, useContext, useMemo, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import { ScrollView } from "react-native";

import { UserContext, UserType } from "../../../../../../context/UserContext";
import { RoomContext } from "../../../../../../context/RoomContext";
import ImagePicker from "../../../../../../components/ImagePicker";
import DatePicker from "../../../../../../components/DatePicker";
import textStyles from "../../../../../../styles/textStyles";
import RNText from "../../../../../../components/RNText";
import Button from "../../../../../../components/Button";
import Input from "../../../../../../components/Input";
import Colors from "../../../../../../styles/Colors";
import DeleteUserButton from "./DeleteUserButton";
import PaymentFields from "./PaymentFields";
import {
  amountRules,
  nameRules,
  phoneNumberRules,
} from "../validations/formValidationRules";


interface FormProps {
  user?: UserType;
  setVisible: Function;
}

function Form({ user, setVisible }: FormProps) {
  const params: any = useRoute().params;
  const roomContext = useContext(RoomContext);
  const room = useMemo(
    () => roomContext.getRoomByNumber(params?.roomNumber || user?.roomNumber),
    [params?.roomNumber, roomContext, user?.roomNumber]
  );
  const usersContext = useContext(UserContext);
  const [image, setImage] = useState<string | undefined>(user?.image);
  const [date, setDate] = useState(user?.dateOfJoining || new Date());

  const { control, handleSubmit } = useForm({
    defaultValues: {
      Amount: user?.price || room.pricePerHead,
      Name: user?.name,
      "Phone Number": user?.phNumber,
    },
  });

  const onSubmit = useCallback(
    (data: any) => {
      const userData = {
        id: user?.id,
        roomNumber: user?.roomNumber || room.roomNumber,
        name: data.Name,
        price: data.Amount,
        phNumber: data["Phone Number"],
        image,
        dateOfJoining: date,
      };
      if (user) {
        usersContext?.editUser(userData);
      } else {
        usersContext?.addUser(userData);
      }
      setVisible(false);
    },
    [user, room.roomNumber, image, date, setVisible, usersContext]
  );

  return (
    <ScrollView>
      <RNText text={user ? "Profile" : "Add User"} size="large" />

      <ImagePicker image={image} setImage={setImage} />
      <Input
        name={"Name"}
        placeHolder="Enter User Name"
        type="text"
        color="dark"
        control={control}
        rules={nameRules}
      />

      <Input
        name={"Phone Number"}
        placeHolder="Enter Phone Number"
        type="number"
        color="dark"
        control={control}
        rules={phoneNumberRules}
      />

      <DatePicker date={date} setDate={setDate} readOnly={user !== undefined} />
      {user && <PaymentFields user={user} />}

      {!user && (
        <Input
          name={"Amount"}
          placeHolder="Enter Fee Amount"
          type="number"
          color="dark"
          control={control}
          rules={amountRules}
        />
      )}

      <Button
        onPress={handleSubmit(onSubmit)}
        backgroundColor={Colors.backGroundEnd}
      >
        <RNText
          text={user ? "Edit" : "Add"}
          type="light"
          size="medium"
          style={textStyles.btnText}
        />
      </Button>

      {user && <DeleteUserButton userId={user.id} />}
    </ScrollView>
  );
}

export default memo(Form);
