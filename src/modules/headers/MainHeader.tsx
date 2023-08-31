import React, { useEffect, useRef } from "react";
import Button from "@/common/components/Buttons/Button";
import Typography from "@/common/components/Typography/Typography";
import useMediaQuery from "@/common/hooks/useMediaQuery";
import { setToggleHamMenu } from "@/libraries/redux/slices/HamburgerMenu/HamburgerMenu";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import useOnclickOutside from "../../common/hooks/useClickedOutside";
import { useRouter } from "next/router";
import { getCookie } from "cookies-next";

const MainHeader = () => {
  //hooks
  const openMenuState = useSelector((state: any) => state.hamburgerMenu.isOpen);
  const mdUp = useMediaQuery("mdUp");
  const dispatch = useDispatch();
  const menuRef = useRef<HTMLDivElement>(null);
  const { push, route } = useRouter();
  useOnclickOutside(
    menuRef,
    () => dispatch(setToggleHamMenu(false)),
    openMenuState
  );
  const isLoggedIn = getCookie("userInfo");
  const isLoggedInToJson = isLoggedIn ? JSON.parse(isLoggedIn) : "";
  //functions
  const openMenuHandler = () => {
    dispatch(setToggleHamMenu(!openMenuState));
  };
  const goToConstructionPageHandler = () => {
    push("./UnderConstructionPage");
  };
  //lifeCycle

  useEffect(() => {
    //here i want to dissappear the menu on unmounting component
    return () => {
      dispatch(setToggleHamMenu(false));
    };
  }, [route]);

  return (
    <div className="flex flex-row-reverse md:flex-row justify-start md:justify-between center">
      <Typography
        fontSizeType="sizeC"
        title="Fiber"
        type="Bold"
        className="m-auto md:m-0"
      />
      {mdUp ? (
        <>
          <div className="flex gap-4 flex-row w-5/12 justify-end">
            <Typography
              onClick={goToConstructionPageHandler}
              fontSizeType="sizeB"
              title="Community"
              className="hover:text-primary  cursor-pointer"
            />
            <Typography
              onClick={goToConstructionPageHandler}
              fontSizeType="sizeB"
              title="Pricing"
              className="hover:text-primary cursor-pointer"
            />
            <Typography
              onClick={goToConstructionPageHandler}
              fontSizeType="sizeB"
              title="Features"
              className="hover:text-primary  cursor-pointer"
            />
          </div>
          {isLoggedInToJson.name ? (
            <div className="flex gap-2 center">
              <Image
                onClick={() => push("/profile")}
                src={"/images/person.png"}
                width={30}
                height={10}
                style={{width:"auto",height:"auto"}}
                alt="profile"
                className="cursor-pointer"
              />
              <Typography title={isLoggedInToJson.name} fontSizeType="sizeB" />
            </div>
          ) : (
            <div className="flex gap-4 center">
              <Button
                variant="btnBgWhite"
                width="w-24"
                title="Sign In"
                onClick={() => push("/signin")}
              ></Button>
              <Button
                onClick={() => push("/signup")}
                variant="btnPrimary"
                width="w-24"
                title="Sign Up"
              ></Button>
            </div>
          )}
        </>
      ) : (
        <div ref={menuRef} className="relative">
          <Image
            onClick={openMenuHandler}
            className="cursor-pointer"
            width={20}
            height={10}
            src={
              openMenuState
                ? "/images/HamMenuOpen.png"
                : "/images/HamburgerMenu.svg"
            }
            alt="cover"
          />{" "}
          <div
            className={`bg-menuBackground outline-white shadow-sm w-[220px] h-[220px] absolute rounded top-8 transition-all duration-300 p-4 column gap-4 ${
              openMenuState ? "left-0" : "-left-[60vw]"
            }`}
          >
            {isLoggedInToJson.name ? (
              <div className="flex gap-2">
                <Image
                  onClick={() => push("/profile")}
                  src={"/images/person.png"}
                  width={20}
                  height={10}
                  style={{width:"auto",height:"auto"}}
                  alt="profile"
                  className="cursor-pointer"
                />
                <Typography
                  title={isLoggedInToJson.name}
                  fontSizeType="sizeB"
                />
              </div>
            ) : (
              <div className="flex gap-2 center">
                <Button
                  onClick={() => push("/signin")}
                  variant="btnBgWhite"
                  width="w-24"
                  title="Sign In"
                ></Button>
                <Button
                  onClick={() => push("/signup")}
                  variant="btnPrimary"
                  width="w-24"
                  title="Sign Up"
                ></Button>
              </div>
            )}
            <div className="bg-gray-400 w-full h-[1px]"></div>
            <div className="flex gap-4 column">
              <Typography
                onClick={goToConstructionPageHandler}
                fontSizeType="sizeB"
                title="Community"
                className="hover:text-primary  cursor-pointer"
              />
              <Typography
                onClick={goToConstructionPageHandler}
                fontSizeType="sizeB"
                title="Pricing"
                className="hover:text-primary cursor-pointer"
              />
              <Typography
                onClick={goToConstructionPageHandler}
                fontSizeType="sizeB"
                title="Features"
                className="hover:text-primary  cursor-pointer"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainHeader;
