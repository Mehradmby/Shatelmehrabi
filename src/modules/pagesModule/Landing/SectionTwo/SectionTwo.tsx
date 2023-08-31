import React from "react";
import Button from "@/common/components/Buttons/Button";
import Typography from "@/common/components/Typography/Typography";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import CommentCart from "./CommentCart";
import { useSelector } from "react-redux";

const SectionTwo = () => {
  const commentsData = useSelector((state: any) => state.comments.data);
  return (
    <div className="bg-white w-full py-8">
      <div className="column container m-auto md:items-start items-center gap-16">
        <div className="column gap-12 w-full center md:items-start">
          <div className="column gap-4 w-80">
            <Typography
              title="why Fiber?"
              type="Bold"
              fontSizeType="sizeSmall"
              className="text-primary text-center md:text-start"
            />
            <Typography
              title="A good portfolio means good employability"
              type="Bold"
              fontSizeType="sizeC"
              className="text-center md:text-start leading-7"
            />
          </div>
          <div className="column md:flex-row gap-4 flex-wrap justify-between w-full center">
            <div className="column gap-3 md:w-52 center md:items-start">
              <div className="column gap-2 center md:items-start">
                <Image
                  src={"/images/time.svg"}
                  alt="pic"
                  width={15}
                  height={7}
                  style={{width:"auto",height:"auto"}}

                />
                <Typography
                  title="Build In Minutes"
                  fontSizeType="sizeSmall"
                  type="Bold"
                  
                />
              </div>
              <Typography
                title="With a selelction of premade templates, you can build up a portfolio in less than 10 minutes"
                fontSizeType="sizeSmall"
                theme="themeS"
                className="text-center md:text-start"
              />
            </div>
            <div className="column gap-3 md:w-52 center md:items-start">
              <div className="column gap-2 center md:items-start">
                <Image
                  src={"/images/code.svg"}
                  alt="pic"
                  width={15}
                  height={7}
                  style={{width:"auto",height:"auto"}}
                />
                <Typography
                  title="Add Custom Css"
                  fontSizeType="sizeSmall"
                  type="Bold"
                />
              </div>
              <Typography
                title="Customize your personal portfoilio even more with the ability to add your own custom Css styles"
                fontSizeType="sizeSmall"
                theme="themeS"
                className="text-center md:text-start"
              />
            </div>
            <div className="column gap-3 md:w-52 center md:items-start">
              <div className="column gap-2 center md:items-start">
                <Image
                  src={"/images/allSizes.svg"}
                  alt="pic"
                  width={15}
                  height={7}
                  style={{width:"auto",height:"auto"}}
                />
                <Typography
                  title="Responsive"
                  fontSizeType="sizeSmall"
                  type="Bold"
                />
              </div>
              <Typography
                title="All Fiber templates are fully responsive to ensure the experience is seemless across all devices   "
                fontSizeType="sizeSmall"
                theme="themeS"
                className="text-center md:text-start"
              />
            </div>
          </div>
        </div>

        <div className="rounded w-full bg-primary py-12 px-12 flex center column md:flex-row gap-8">
          <div className="column gap-4 h-full center md:items-start">
            <Typography
              title="Deversify your portfolio"
              fontSizeType="sizeMiddle"
              type="Bold"
              className="text-white"
            />
            <Typography
              title="Create an even more impressive portfolio by creating case studies for your projects.simply follow our setp-by-step guide"
              fontSizeType="sizeA"
              theme="themeS"
              className="text-white text-center md:text-start"
              
            />
            <Button
              title="Start Free Trial"
              variant="btnSecondary"
              width="w-52"
            />
          </div>
          <div className="relative w-full h-64 -mb-12">
            <Image
              src={"/images/PageImage.png"}
              alt="pic"
              sizes="100"
              fill
            />
          </div>
        </div>
        <Swiper
          className="overflow-visible"
          spaceBetween={50}
          breakpoints={{
            500: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        >
          {commentsData?.map((comment: any) => {
            return (
              <SwiperSlide key={comment.id}>
                <CommentCart
                  comment={comment.description}
                  id={comment.id}
                  name={comment.name}
                  family={comment.family}
                  revenue={comment.revenue}
                  imageUrl={comment.imageUrl}
                  key={comment.id}
                />
                ;
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default SectionTwo;
