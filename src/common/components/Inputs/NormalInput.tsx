import React, { useState } from "react";
import Typography from "../Typography/Typography";
import Image from "next/image";
type InputProps = {
  placeHolder: string;
  title?: string;
  inputClassName?: string;
  titleClassName?: string;
  errorMessage?: string;
  isPassword?: boolean;
  [key: string]: any;
  name: string;
};
const NormalInput = ({
  placeHolder,
  title,
  name,
  errorMessage,
  isPassword,
  inputClassName,
  titleClassName,
  ...rest
}: InputProps) => {
  const [showPass, setShowPass] = useState(false);
  return (
    <div className="column gap-2 items-start w-full relative">
      <Typography
        title={title ? title : ""}
        type="Bold"
        fontSizeType="sizeA"
        className={titleClassName}
      ></Typography>
      <input
        type={!showPass && isPassword ? "password" : "text"}
        name={name}
        placeholder={placeHolder}
        className={`w-full rounded border border-gray-500 h-10 p-4 text-sm text-black outline-none ${inputClassName}`}
        {...rest}
      />
      {errorMessage ? (
        <Typography
          title={errorMessage}
          type="Bold"
          fontSizeType="sizeSmall"
          className="text-red-600"
        ></Typography>
      ) : null}
      {isPassword ? (
        <Image
          onClick={() => setShowPass((prev) => !prev)}
          src={"/images/hidePassword.svg"}
          alt="cover"
          width={20}
          height={20}
          className="absolute right-2 md:top-10 top-8 cursor-pointer"
        />
      ) : null}
    </div>
  );
};

export default NormalInput;
