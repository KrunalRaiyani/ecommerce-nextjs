import * as Yup from "yup";

export const authValidationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export const verifyOtpValidationSchema = Yup.object({
  otp: Yup.string()
    .length(4, "OTP must be 4 digits")
    .matches(/^[0-9]+$/, "OTP must contain only digits")
    .required("OTP is required"),
});
