import SecondaryLayout from "@/modules/layouts/SecondaryLayout";
import SignInPage from "@/modules/pagesModule/SignIn/SignInPage";
import React, { ReactNode } from "react";

const SignIn = () => {
  return <SignInPage />;
};
SignIn.getLayout = function getLayout(page: ReactNode) {
  return <SecondaryLayout>{page}</SecondaryLayout>;
};
export default SignIn;
