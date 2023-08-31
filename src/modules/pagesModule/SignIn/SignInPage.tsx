import React, { useEffect, useState } from "react";
import Image from "next/image";
import Typography from "@/common/components/Typography/Typography";
import PaginationComp from "@/common/components/Pagination/PaginationComp";
import NormalInput from "@/common/components/Inputs/NormalInput";
import Button from "@/common/components/Buttons/Button";
import { getCookie, setCookie } from "cookies-next";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
const SignUpPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState({ hasError: true, message: "", type: "" });
  const { push } = useRouter();
  const correctEmailAndPassword = getCookie("prevRegisterInfo")
    ? JSON.parse(getCookie("prevRegisterInfo")!)
    : null;
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError({ hasError: false, message: "", type: "" });
  };
  //functions
  const onSubmitHandler = (e: any) => {
    e.preventDefault();
    if (
      correctEmailAndPassword?.email === e.target.Email.value &&
      correctEmailAndPassword?.password === e.target.Password.value
    ) {
      setIsLoading(true);
      setCookie("userInfo", correctEmailAndPassword);
      setTimeout(() => {
        toast.success("Successfully signed in");
        push("/");
      }, 2000);
    } else if (correctEmailAndPassword?.email !== e.target.Email.value) {
      setError({
        hasError: true,
        message: "Email does not match",
        type: "email",
      });
    } else if (correctEmailAndPassword?.password !== e.target.Password.value) {
      setError({
        hasError: true,
        message: "Password does not correct",
        type: "password",
      });
    } else {
      toast.warn("Please fill fields");
    }
  };

  return (
    <div className="flex w-full flex-col-reverse md:flex-row">
      <form
        onSubmit={onSubmitHandler}
        className="w-full md:w-6/12 h-screen column gap-10 md:py-24 py-8 container md:px-32"
      >
        <Typography title="Fiber" type="Bold" fontSizeType="sizeB" />
        <Typography
          title="Sign In Your Fiber Account"
          type="Bold"
          fontSizeType="sizeD"
        />
        <NormalInput
          name={"Email"}
          placeHolder="John@example.com"
          errorMessage={
            error.type == "email" && error.hasError ? error.message : ""
          }
          title="Email"
          onChange={changeHandler}
        />
        <NormalInput
          name={"Password"}
          placeHolder="At least 8 characters"
          title="Password"
          errorMessage={
            error.type == "password" && error.hasError ? error.message : ""
          }
          isPassword
          onChange={changeHandler}
        />

        <Button
          title="SignIn"
          width="w-full"
          variant="btnPrimary"
          isLoading={isLoading}
          className="mt-20 md:mt-0"
        />
        <div className="flex gap-1 self-center">
          <Typography title="Still not join fiber ?" fontSizeType="sizeB" />
          <Typography
            onClick={() => push("/signup")}
            title="Sign Up"
            type="Bold"
            className="underline text-primary cursor-pointer underline-offset-4"
            fontSizeType="sizeB"
          />
        </div>
      </form>
      <div className="w-full md:w-6/12 signUpGradient h-screen center column gap-4">
        <Image
          alt="pic"
          src={"/images/SignUpImage.png"}
          width={300}
          height={10}
          style={{ width: "70%", height: "60%", marginTop: "80px" }}
        />
        <div className="w-6/12 column center gap-2">
          <Typography
            type="Bold"
            fontSizeType="sizeMiddle"
            title="Unparalleled Templates"
            className="text-white text-center"
          />
          <Typography
            fontSizeType="sizeA"
            title="Crafted by a team of professional designers,our templates are eunparalleled in the market."
            className="text-white opacity-80 text-center"
          />
        </div>

        <PaginationComp />
      </div>
    </div>
  );
};

export default SignUpPage;
