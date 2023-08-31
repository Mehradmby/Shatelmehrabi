import { ReactNode, useEffect, useState } from "react";
import MainHeader from "../headers/MainHeader";
import MainFooter from "../footers/MainFooter";
import HydrationHelper from "@/common/components/HydrationHelper/HydrationHelper";

type MainLayoutProps = {
  children: ReactNode;
};
const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex bg-bgHeader flex-col m-auto">
      <header className="container py-6 m-auto">
        <HydrationHelper>
          <MainHeader />
        </HydrationHelper>
      </header>
      <main>{children}</main>
      <footer className="container m-auto">
        <MainFooter />
      </footer>
    </div>
  );
};

export default MainLayout;
