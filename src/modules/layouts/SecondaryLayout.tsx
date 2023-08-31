import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { ReactNode } from 'react'
type SecoundaryLayoutProps = {
    children: ReactNode;
  };
const SecondaryLayout = ({children}:SecoundaryLayoutProps) => {
  const {back}=useRouter()
  //using font icons is much better than using png images but as you send all the icons pics, i use png too
  return (
    <div className="m-auto relative">
      <header><Image className='absolute left-2 top-2 cursor-pointer' onClick={()=>back()} src={"/images/backIcon.png"} alt='back' width={20} height={20}/></header>
      <main>{children}</main>
    </div>
  )
}

export default SecondaryLayout