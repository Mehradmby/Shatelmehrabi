import Button from "@/common/components/Buttons/Button";
import Typography from "@/common/components/Typography/Typography";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
type CommentType = {
  revenue: string;
  name: string;
  family: string;
  imageUrl: string;
  comment: string;
  id: number;
};
const CommentCart = ({
  revenue,
  name,
  family,
  imageUrl,
  comment,
  id,
}: CommentType) => {
  const { push } = useRouter();
  return (
    <div className="bg-white border border-gray-500 p-4 column gap-4 rounded border-opacity-30">
      <div className="flex gap-2 items-center">
        <Image
          src={imageUrl}
          alt="comment"
          width={45}
          height={15}
          style={{ width: "50px" }}
        />
        <div className="column">
          <div className="flex gap-1">
            <Typography
              title={name}
              type="Bold"
              fontSizeType="sizeSmall"
              className="text-primary text-center md:text-start"
            />
            <Typography
              title={family}
              type="Bold"
              fontSizeType="sizeSmall"
              className="text-primary text-center md:text-start"
            />
          </div>
          <Typography
            title={`${revenue} in revenue`}
            fontSizeType="sizeSmall"
            className="text-center md:text-start"
          />
        </div>
      </div>
      <div className="overflow-auto h-32">
        <Typography
          title={comment}
          fontSizeType="sizeA"
          className="text-start leading-5 opac"
        />
      </div>
      <Button
        onClick={() => {
          push(`/comments/${id}`);
        }}
        variant="btnSecondary"
        title={`View ${name}'s Portfolio`}
        width="w-full"
        className="border border-gray-500 border-opacity-30"
      />
    </div>
  );
};

export default CommentCart;
