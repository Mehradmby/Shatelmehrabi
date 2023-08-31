import React, { useEffect, useState } from "react";
import Image from "next/image";
import Typography from "@/common/components/Typography/Typography";
import PaginationComp from "@/common/components/Pagination/PaginationComp";
import NormalInput from "@/common/components/Inputs/NormalInput";
import Button from "@/common/components/Buttons/Button";
import { setCookie, getCookie } from "cookies-next";
import { useRouter } from "next/router";
const SignUpPage = () => {
  //hooks
  const [acceptedRules, setAcceptedRules] = useState<boolean>();
  const [error, setError] = useState({ hasError: true, message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const { push } = useRouter();
  //functions
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (acceptedRules && e.target.value.length >= 8) {
      setError({ hasError: false, message: "" });
    }
  };
  const onSubmitHandler = (e: any) => {
    e.preventDefault();
    if (e.target.Password.value.length < 8) {
      setError({
        hasError: true,
        message: "Characters must be at least 8 characters",
      });
    } else {
      const userInfo = {
        name: e.target.Name.value,
        email: e.target.Email.value,
        password: e.target.Password.value,
      };
      setCookie("userInfo", userInfo);
      setIsLoading(true)
      setTimeout(() => {
        push("/");
      }, 2000);
    }
  };

  //lifeCycles
  useEffect(() => {
    if (acceptedRules) {
      setError({ hasError: false, message: "" });
    } else {
      setError({ hasError: true, message: "" });
    }
  }, [acceptedRules]);

  return (
    <div className="flex w-full flex-col-reverse md:flex-row">
      <form
        onSubmit={onSubmitHandler}
        className="w-full md:w-6/12 h-screen column md:gap-10 gap-8 py-10 container md:px-32"
      >
        <Typography title="Fiber" type="Bold" fontSizeType="sizeB" />
        <Typography
          title="Create Your Fiber Account"
          type="Bold"
          fontSizeType="sizeD"
        />
        <NormalInput name={"Name"} placeHolder="John Doe" title="Your Name" />
        <NormalInput
          name={"Email"}
          placeHolder="John@example.com"
          title="Email"
        />
        <NormalInput
          name={"Password"}
          placeHolder="At least 8 characters"
          title="Password"
          errorMessage={error.message}
          isPassword
          onChange={changeHandler}
        />
        <div className="flex gap-2 items-start">
          <input
            type="checkbox"
            name="rulesAccepted"
            onChange={(e) => setAcceptedRules(e.target.checked)}
          />
          <div className="column">
            <Typography
              title="By creating an account on fiber you agree"
              fontSizeType="sizeA"
            />
            <Typography
              title="Terms & Conditions"
              fontSizeType="sizeA"
              className="underline text-primary underline-offset-4"
            />
          </div>
        </div>
        <div className="column gap-2 center">
          <Button
            title="Create Fiber Account"
            width="w-full"
            variant="btnPrimary"
            disabled={error.hasError}
            isLoading={isLoading}
            className="mt-20 md:mt-0"
          />
          <div className="flex gap-1">
            <Typography
              title="Already have an account ?"
              fontSizeType="sizeB"
            />
            <Typography
              onClick={() => push("/signin")}
              title="Sign In"
              type="Bold"
              className="underline text-primary cursor-pointer underline-offset-4"
              fontSizeType="sizeB"
            />
          </div>
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
