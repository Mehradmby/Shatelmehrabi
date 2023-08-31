import React, { Children, ReactNode } from "react";

type TypographyType = {
  type?: "Bold" | "Normal";
  fontSizeType: string;
  title: string; //example Test;
  className?:string
  theme?:string,
  onClick?:()=>void

};

const Typography = ({ type, fontSizeType, title, theme, className,onClick }: TypographyType) => {
  const getFontSize = (fontSizeType: string) => {
    return {
      sizeSmall:"text-[10px]",
      sizeA: "text-[10px] lg:text-sm",
      sizeB: "text-xs lg:text-[16px]",
      sizeC: "text-sm lg:text-lg",
      sizeMiddle:"text-xl lg:text-2xl",
      sizeD: "text-2xl lg:text-4xl",

    }[fontSizeType];
  };
  return (
    <p
      className={`text-black 
        ${type == "Bold" ? "font-bold" : ""} ${theme=="themeS" ? "text-secoundryText" : ""} ${getFontSize(fontSizeType)} ${className}`}
        onClick={onClick}
    >
      {title}
    </p>
  );
};

export default Typography;
