import React, { useState } from "react";
import Image from "next/image";
import Typography from "@/common/components/Typography/Typography";
import { getCookie, setCookie } from "cookies-next";
import Button from "@/common/components/Buttons/Button";
import { useRouter } from "next/router";
import NormalInput from "@/common/components/Inputs/NormalInput";
import { useSelector, useDispatch } from "react-redux";
import { setNewComment } from "@/libraries/redux/slices/Comments/Comments";
import { ToastContainer, toast } from "react-toastify";
const ProfilePage = () => {
  //hooks
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingSignOut, setIsLoadingSignOut] = useState<boolean>(false);
  const { push } = useRouter();
  const commentsData = useSelector((state: any) => state.comments.data);
  const dispatch = useDispatch();
  //constants
  const correctEmailAndPassword = getCookie("userInfo")
    ? JSON.parse(getCookie("userInfo")!)
    : null;
  //functions
  const signOutHandler = async () => {
    setCookie("prevRegisterInfo", correctEmailAndPassword);
    setCookie("userInfo", {});
    setIsLoadingSignOut(true);
    setTimeout(() => {
      toast.success("Successfully signed out");
      push("/");
    }, 2000);
  };
  const submitHandler = (e: any) => {
    e.preventDefault();
    const body = {
      id: commentsData.length + 1,
      name: e.target.Name.value,
      family: "",
      imageUrl: "/images/person.png",
      revenue: e.target.Revenue.value,
      description: e.target.Description.value,
    };
    dispatch(setNewComment(body));
    setIsLoading(true);
    if (e.target.Name.value && e.target.Description.value) {
      setTimeout(() => {
        setIsLoading(false);
        toast.success("Your Comment Submitted");
      }, 2000);
    } else {
      setIsLoading(false);
      toast.warn("Please fill fields");
    }
  };

  return (
    <div className="column gap-10 center container m-auto py-10 bg-white">
      <Image
        src={"/images/Person.png"}
        alt={"profile pic"}
        width={200}
        height={100}
        style={{width:"auto",height:"auto"}}
      />
      <Typography title="Your Information" fontSizeType="sizeD" type="Bold" />
      <div className="w-full h-1 bg-gray-400"></div>
      <div className="flex gap-3 w-full center">
        <Typography
          title="Your Name :"
          fontSizeType="sizeB"
          type="Bold"
          className="whitespace-nowrap"
        />
        <div className="w-full h-[1px] bg-gray-400"></div>
        <Typography
          title={correctEmailAndPassword?.name}
          fontSizeType="sizeB"
          type="Bold"
        />
      </div>
      <div className="flex gap-3 w-full center">
        <Typography
          title="Your Email :"
          fontSizeType="sizeB"
          type="Bold"
          className="whitespace-nowrap"
        />
        <div className="w-full h-[1px] bg-gray-400"></div>
        <Typography
          title={correctEmailAndPassword?.email}
          fontSizeType="sizeB"
          type="Bold"
        />
      </div>
      <div className="w-full h-1 bg-gray-400"></div>
      <Typography title="Share Your Comment" fontSizeType="sizeD" type="Bold" />
      <div className="w-full h-1 bg-gray-400"></div>
      <form
        onSubmit={submitHandler}
        className="flex-col-reverse md:flex-row center justify-between gap-10 w-full"
      >
        <div className="column gap-10 w-full md:w-6/12">
          <NormalInput placeHolder="Name" name="Name" title="Your Name :" />
          <NormalInput
            placeHolder="Revenue"
            name="Revenue"
            title="Your Revenue :"
          />
          <div className="flex gap-1 column justify-start">
            <Typography
              title="Your Comment :"
              fontSizeType="sizeA"
              type="Bold"
              className="whitespace-nowrap"
            />
            <textarea
              name="Description"
              className="border border-gray-500 h-64 p-3 text-black rounded"
            />
          </div>
          <div>
            <Button
              type="submit"
              title="Submit"
              variant="btnPrimary"
              width="w-full md:w-52"
              className="self-end"
              isLoading={isLoading}
            />
          </div>
        </div>
        <Image
          src={"/images/Comment.png"}
          alt="comments"
          width={300}
          height={10}
        />
      </form>
      <div className="w-full h-1 bg-gray-400"></div>

      <Button
        onClick={signOutHandler}
        title="Sign Out"
        variant="btnPrimary"
        width="w-52"
        isLoading={isLoadingSignOut}
        className="self-center w-full md:w-52 md:self-start"
      />
    </div>
  );
};

export default ProfilePage;
