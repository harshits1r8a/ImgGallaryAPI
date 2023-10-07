import React from 'react'
import { SpinnerCircularFixed } from 'spinners-react';

export default function Loader() {
  return (
    <div >
       <SpinnerCircularFixed className='w-[100%] mx-auto text-center h-[60vh]' size={100} color={'#64CCC5'} secondaryColor={'#176B87'} speed={150} enabled={true} />
    </div>
  )
}
