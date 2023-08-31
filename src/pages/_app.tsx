import { AppContext, AppInitialProps, AppLayoutProps } from "next/app";
import type { NextComponentType } from "next";
import { ReactNode } from "react";
import MainLayout from "@/modules/layouts/MainLayout";
import { Provider } from "react-redux";
import { store } from "../libraries/redux/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/globals.css";
import "swiper/css";

const MyApp: NextComponentType<AppContext, AppInitialProps, AppLayoutProps> = ({
  Component,
  pageProps,
}: AppLayoutProps) => {
  const getLayout =
    Component.getLayout ||
    ((page: ReactNode) => <MainLayout>{page}</MainLayout>);

  return (
    <Provider store={store}>
      <ToastContainer
        position="bottom-center"
        toastClassName={"text-black"}
      
      />
      {getLayout(<Component {...pageProps} />)}
    </Provider>
  );
};

export default MyApp;
