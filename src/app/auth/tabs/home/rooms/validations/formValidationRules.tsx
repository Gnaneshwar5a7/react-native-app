import { FieldValues, RegisterOptions } from "react-hook-form";

export const roomNumberRules: RegisterOptions<FieldValues, string> = {
  required: "Room Number is Required",
  maxLength: { value: 3, message: "Room number should not exceed 3 digits" },
  pattern: { value: /^[0-9]+$/, message: "Enter Valid Room Number" },
};

export const capacityRules: RegisterOptions<FieldValues, string> = {
  required: "Capacity is Required",
  pattern: { value: /^[0-9]+$/, message: "Capacity must be Number" },
};

export const amountRules: RegisterOptions<FieldValues, string> = {
  required: "Amount is Required",
  pattern: { value: /^[0-9]+$/, message: "Amount should contain only numbers" },
};
