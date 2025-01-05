import React, { useState } from "react";
import Modal from "../Modal";
import Button from "../inputs/Button";
import Input from "../inputs/Input";
import PasswordInput from "../inputs/PasswordInput";
import { useDispatch, useSelector } from "react-redux";
import { closeLoginModal } from "@/Redux/slice/modals/login-popup";

const LoginModal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.loginModal.isOpen);

  const handleCloseModal = () => dispatch(closeLoginModal());

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
              alt="signin Image"
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
              <h4 className="text-xl font-semibold text-brand-dark sm:text-2xl sm:pt-3 ">
                Welcome Back!
              </h4>
              <div className="mt-3 mb-1 !text-md text-center text-themeBlack">
                Don’t have an account?
                <Button
                  type="button"
                  className="!text-md font-semibold ml-1"
                  onClick={() => {}}
                  variant="link">
                  Create Account
                </Button>
              </div>
            </div>
            <form
              onSubmit={() => {}}
              className="flex flex-col justify-center"
              noValidate>
              <div className="flex flex-col space-y-3.5">
                <Input
                  label={"Enter email"}
                  variant="solid"

                  // error={errors.Username?.message}
                />
                <PasswordInput
                  label={"Enter password"}
                  // error={errors.Password?.message}
                />

                <div className="relative">
                  <Button
                    type="submit"
                    //   loading={isLoading}
                    //   disabled={isLoading}
                    className="w-full mt-2 tracking-normal h-11 md:h-12 font-15px md:font-15px"
                    variant="formButton">
                    {/* {t("common:text-sign-in")} */}
                    Sign up
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

export default LoginModal;
