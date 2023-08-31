import Button from '@/common/components/Buttons/Button'
import Typography from '@/common/components/Typography/Typography'
import { useRouter } from 'next/router'
import React from 'react'

const UnderConstructionPage = () => {
    const {push}=useRouter()
  return (
    <div className='h-[70vh] center column gap-10'>
    <Typography title='Under Constructions !' fontSizeType='sizeD' className='text-primary'/>
    <Button onClick={()=>push("/")} title='Back To Home' width='w-52' variant="btnPrimary"/>
    </div>
  )
}

export default UnderConstructionPage