import SecondaryLayout from '@/modules/layouts/SecondaryLayout';
import SignUpPage from '@/modules/pagesModule/SignUp/SignUpPage';
import React, { ReactNode } from 'react'

const SignUp = () => {
  return (
    <SignUpPage/>
    )
}
SignUp.getLayout = function getLayout(page:ReactNode) {
    return <SecondaryLayout>{page}</SecondaryLayout>;
  };
export default SignUp