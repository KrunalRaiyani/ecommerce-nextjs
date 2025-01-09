import React, { useState } from "react";
import { useFormik } from "formik";
import Modal from "../Modal";
import Button from "../inputs/Button";
import Input from "../inputs/Input";
import PasswordInput from "../inputs/PasswordInput";
import { useDispatch, useSelector } from "react-redux";
import { closeLoginModal } from "@/Redux/slice/modals/login-popup";
import OtpInput from "../inputs/OtpInput";
import {
  authValidationSchema,
  verifyOtpValidationSchema,
} from "@/helper/validationSchema";
import { login } from "@/Redux/slice/auth/loginSlice";
import { signUp } from "@/Redux/slice/auth/signupSlice";

const LoginSignupModal = () => {
  const dispatch = useDispatch();
  const { isOpen, loadingLogin, loadingSignUp } = useSelector((state) => ({
    isOpen: state.loginModal.isOpen,
    loadingLogin: state.login.loading,
    loadingSignUp: state.signUp.loading,
  }));
  const [isSignup, setIsSignup] = useState(false);
  const [isOtpScreen, setIsOtpScreen] = useState(false);

  const handleCloseModal = () => {
    setIsSignup(false);
    setIsOtpScreen(false);
    dispatch(closeLoginModal());
  };

  const loginFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: authValidationSchema,
    onSubmit: async (values) => {
      const response = await dispatch(login(values));
      console.log(response);
    },
  });

  const signupFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: authValidationSchema,
    onSubmit: async (values) => {
      const response = await dispatch(signUp(values));
      if (response.type === "signUp/fulfilled") {
        setIsOtpScreen(true);
      }
    },
  });

  const otpFormik = useFormik({
    initialValues: { otp: "" },
    validationSchema: verifyOtpValidationSchema,
    onSubmit: (values) => {
      handleCloseModal();
    },
  });

  const formik = isOtpScreen
    ? otpFormik
    : isSignup
    ? signupFormik
    : loginFormik;

  return (
    <Modal isOpen={isOpen} onClose={handleCloseModal}>
      <div
        className={
          "w-full md:w-[720px] lg:w-[920px] xl:w-[1000px] 2xl:w-[1200px] relative"
        }>
        <div className="flex mx-auto overflow-hidden rounded-lg bg-brand-light">
          <div className="md:w-1/2 lg:w-[55%] xl:w-[60%] registration hidden md:block relative">
            <img
              src="https://i.pinimg.com/736x/d3/0a/cb/d30acbc55ad4cf18d5006a9b6fd1505f.jpg"
              alt="Modal Image"
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
          <div className="w-full md:w-1/2 lg:w-[45%] xl:w-[40%] py-6 px-4 sm:px-8 md:px-6 lg:px-8 xl:px-12 rounded-md flex flex-col justify-center">
            <div className="mb-6 text-center">
              <div onClick={handleCloseModal}>
                <div className="text-2xl font-bold">
                  <a href="/">Euphoria</a>
                </div>
              </div>
              {!isOtpScreen && (
                <h4 className="text-xl font-semibold text-brand-dark sm:text-2xl sm:pt-3 ">
                  {isSignup ? "Create Your Account" : "Welcome Back!"}
                </h4>
              )}
              {isOtpScreen && (
                <h4 className="text-xl font-semibold text-brand-dark sm:text-2xl sm:pt-3 ">
                  Verify OTP
                </h4>
              )}
              {!isOtpScreen && (
                <div className="mt-3 mb-1 !text-md text-center text-themeBlack">
                  {isSignup
                    ? "Already have an account?"
                    : "Don’t have an account?"}
                  <Button
                    type="button"
                    className="!text-md font-semibold ml-1"
                    onClick={() => setIsSignup(!isSignup)}
                    variant="link">
                    {isSignup ? "Login" : "Create Account"}
                  </Button>
                </div>
              )}
              {isOtpScreen && (
                <div className="mt-3 mb-1 !text-md text-center text-themeBlack">
                  Go back to
                  <Button
                    type="button"
                    className="!text-md font-semibold ml-1"
                    onClick={() => setIsOtpScreen(false)}
                    variant="link">
                    Create Account
                  </Button>
                </div>
              )}
            </div>
            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col justify-center"
              noValidate>
              <div className="flex flex-col space-y-3.5">
                {!isOtpScreen && (
                  <>
                    <Input
                      label="Enter email"
                      variant="solid"
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.email && formik.errors.email}
                    />
                    <PasswordInput
                      label="Enter password"
                      name="password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.password && formik.errors.password}
                    />
                  </>
                )}
                {isOtpScreen && (
                  <OtpInput
                    value={formik.values.otp.split("")}
                    onChange={(value) => formik.setFieldValue("otp", value)}
                    error={formik.touched.otp && formik.errors.otp}
                  />
                )}
                <div className="relative">
                  <Button
                    type="submit"
                    className="w-full mt-2 tracking-normal h-11 md:h-12 font-15px md:font-15px"
                    variant="formButton"
                    loading={loadingLogin || loadingSignUp}>
                    {isOtpScreen
                      ? "Verify OTP"
                      : isSignup
                      ? "Sign up"
                      : "Login"}
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default LoginSignupModal;
