import { FieldValues, RegisterOptions } from "react-hook-form";

export const usernameRules: RegisterOptions<FieldValues, string> = {
  required: "Username is Required",
  minLength: { value: 3, message: "Username should atleast 3 digits" },
};

export const passwordRules: RegisterOptions<FieldValues, string> = {
  required: "Password is Required",
  minLength: { value: 5, message: "Password should atleast 5 digits" },
};
