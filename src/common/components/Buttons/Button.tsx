import React from "react";
import DotPluseLoading from "../Loading/DotPluseLoading"
type ButtonProps = {
  className?: string;
  title: string;
  width: string; // example w-12
  variant: string;
  disabled?: boolean;
  isLoading?:boolean,
  type?:"submit" | "button",
  onClick?: () => void;
};
const Button = ({
  width,
  className,
  title,
  variant,
  disabled,
  isLoading,
  type,
  onClick,
}: ButtonProps) => {
  //we will declare varient for the cases that we have more that one special styles

  const getStyles = (variant: string) => {
    return {
      btnPrimary: "btnPrimary", //this classe declared in tailwindCss
      btnSecondary: "btnSecondary",
      btnBgWhite: "btnBgWhite",
    }[variant];
  };

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`btn ${
        disabled ? "!bg-gray-500" : ""
      } ${width} ${className} ${getStyles(variant)}`}
    >
      {isLoading?<DotPluseLoading/>: title}
    </button>
  );
};

export default Button;
