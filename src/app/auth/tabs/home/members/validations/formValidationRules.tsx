import { FieldValues, RegisterOptions } from "react-hook-form";

export const roomNumberRules: RegisterOptions<FieldValues, string> = {
  required: "Room Number is Required",
  pattern: { value: /^[0-9+]+$/, message: "Room Number must be a number" },
  maxLength: { value: 3, message: "Room Number must be 3 digits" },
  minLength: { value: 3, message: "Room Number must be 3 digits" },
};

export const nameRules: RegisterOptions<FieldValues, string> = {
  required: "Name is Required",
  pattern: { value: /^[a-zA-Z]+$/, message: "Enter Valid Name" },
};

export const phoneNumberRules: RegisterOptions<FieldValues, string> = {
  required: "Phone Number is Required",
  pattern: {
    value: /^[0-9]+$/,
    message: "Phone Number should contain only numbers",
  },
  maxLength: {
    value: 10,
    message: "Number must be 10 digits",
  },
  minLength: {
    value: 10,
    message: "Number must be 10 digits",
  },
};

export const amountRules: RegisterOptions<FieldValues, string> = {
  required: "Amount is Required",
  pattern: { value: /^[0-9]+$/, message: "Amount should contain only numbers" },
};
