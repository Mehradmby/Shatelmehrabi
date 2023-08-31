import Typography from "@/common/components/Typography/Typography";
import { ReducersTypes } from "@/libraries/redux/store";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
type SingleCommentProps = {
  query: any;
};

const SingleComment = ({ query }: SingleCommentProps) => {
  const data = useSelector((state:ReducersTypes) => state.comments.data);
  const targetData = data?.filter(
    (comment: { id: number }) => +query.id === comment.id
  )[0];

  return (
    <div className="cointainer m-auto bg-white center py-10 column gap-4 h-[70vh]">
      <Image
        src={targetData?.imageUrl}
        alt="ProfImages"
        width={200}
        height={30}
      />
      <Typography fontSizeType="sizeD" title="Information" type="Bold" />
      <div className="w-full h-1 bg-gray-500"></div>
      <div className="column gap-4 justify-between center w-full">
        <Typography
          title={`${targetData?.name} Said :`}
          type="Bold"
          fontSizeType="sizeB"
        />
        <div className="w-10/12 h-[1px] bg-gray-500"></div>
        <Typography
          title={targetData?.description}
          fontSizeType="sizeA"
          className="whitespace-nowrap"
        />
      </div>
      <div className="column gap-4 justify-between w-full center">
        <Typography title={`His revenue is`} type="Bold" fontSizeType="sizeB" />
        <div className="w-10/12 h-[1px] bg-gray-500"></div>
        <Typography
          title={targetData?.revenue}
          fontSizeType="sizeA"
          className="whitespace-nowrap"
        />
      </div>
    </div>
  );
};
export default SingleComment;
