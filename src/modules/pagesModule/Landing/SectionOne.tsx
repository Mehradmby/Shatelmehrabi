import Typography from "@/common/components/Typography/Typography";
import Image from "next/image";
import React from "react";
import useMediaQuery from "../../../common/hooks/useMediaQuery";
import Button from "@/common/components/Buttons/Button";

const SectionOne = () => {
  const lgUp = useMediaQuery("lgUp");
  return (
    <div className="flex flex-col m-auto justify-between items-center md:flex-row gap-6 md:gap-2 container bg-bgHeader">
      <div className="flex column gap-6 items-center md:items-start">
        <div className="flex items-center gap-2">
          <Image
            width={lgUp ? 60 : 40}
            height={20}
            src={"/images/stars.png"}
            style={{width:"auto",height:"auto"}}
            alt="cover"
          />
          <Typography fontSizeType="sizeA" title="Rated 4.8/5 (243 reviews)" />
        </div>
        <Typography
          title="Create your portfolio in minutes."
          type="Bold"
          fontSizeType="sizeD"
          className="text-center md:text-start"
        />
        <Typography
          theme="themeS"
          fontSizeType="sizeA"
          title="With Fiber, you can setup your personal portfolio in minutes with dozens of premade, beautiful templates"
          className="md:text-start text-center"
        />
        <div className="flex gap-8 items-center">
          <Button title="Start Free Trial" width="w-40" variant="btnPrimary"/>
          <Button title="View Examples" variant="btnBgWhite" className="text-primary underline cursor-pointer underline-offset-4" width="w-42"/>
        </div>
        <div className="flex gap-6">
          <div className="flex gap-2">
            <Image width={20} height={20} src={"/images/Checkmark.svg"} alt="checkMark"/>
            <Typography title="No Credit Card Required" fontSizeType="sizeA" theme="themeS"/>
          </div>
          <div className="flex gap-2">
            <Image width={20} height={20} src={"/images/Checkmark.svg"} alt="checkMark"/>
            <Typography title="10 Free Templates" fontSizeType="sizeA" theme="themeS"/>
          </div>
        </div>
      </div>
      <Image
        width={lgUp ? "420" : "200"}
        height={"70"}
        src={"/images/hero-Illustration.png"}
        style={{width:"auto",height:"auto"}}
        alt="cover"
      />
    </div>
  );
};

export default SectionOne;
