import Typography from "@/common/components/Typography/Typography";
import { useRouter } from "next/router";
import React from "react";

const MainFooter = () => {
  const { push } = useRouter();
  return (
    <div className="flex py-4 md:justify-between gap-6 flex-wrap">
      <div className="column gap-2 w-64">
        <Typography
          title="Fiber"
          fontSizeType="sizeA"
          type="Bold"
          className="mb-2"
        />
        <Typography
          title="With Fiber,you can setup your own personal portfolio in minutes with dozens of premade,beautiful templates"
          fontSizeType="sizeA"
          theme="themeS"
        />
        <Typography
          title="Made with ❤ in netherland"
          fontSizeType="sizeA"
          theme="themeS"
        />
      </div>
      <div className="column gap-2">
        <Typography
          title="Sitemap"
          fontSizeType="sizeA"
          type="Bold"
          className="mb-2"
        />
        <Typography
          title="Homepage"
          fontSizeType="sizeA"
          theme="themeS"
          onClick={() => push("/")}
          className="hover:text-primary cursor-pointer"
        />
        <Typography title="Pricing" fontSizeType="sizeA" theme="themeS" />
        <Typography title="Testimonials" fontSizeType="sizeA" theme="themeS" />
        <Typography title="Features" fontSizeType="sizeA" theme="themeS" />
      </div>
      <div className="column gap-2">
        <Typography
          title="Resources"
          fontSizeType="sizeA"
          type="Bold"
          className="mb-2"
        />
        <Typography title="Support" fontSizeType="sizeA" theme="themeS" />
        <Typography title="Contact" fontSizeType="sizeA" theme="themeS" />
        <Typography title="FAQ" fontSizeType="sizeA" theme="themeS" />
      </div>
      <div className="column gap-2">
        <Typography
          title="Company"
          fontSizeType="sizeA"
          type="Bold"
          className="mb-2"
        />
        <Typography title="About" fontSizeType="sizeA" theme="themeS" />
        <Typography title="Customers" fontSizeType="sizeA" theme="themeS" />
        <Typography title="Blog" fontSizeType="sizeA" theme="themeS" />
      </div>
      <div className="column gap-2">
        <Typography
          title="Portfolios"
          fontSizeType="sizeA"
          type="Bold"
          className="mb-2"
        />
        <Typography
          title="Sarah Andrews"
          fontSizeType="sizeA"
          theme="themeS"
          className="hover:text-primary cursor-pointer"
        />
        <Typography
          title="Mathew Higgins"
          fontSizeType="sizeA"
          theme="themeS"
          className="hover:text-primary cursor-pointer"
        />
        <Typography
          title="Janice Dave"
          fontSizeType="sizeA"
          theme="themeS"
          className="hover:text-primary cursor-pointer"
        />
      </div>
    </div>
  );
};

export default MainFooter;
