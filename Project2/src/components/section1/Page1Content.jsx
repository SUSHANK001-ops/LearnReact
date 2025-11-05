import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
    <div className='py-3 flex gap-20 md:gap-10 items-center h-[90vh]  px-16'>
        <LeftContent />
        <RightContent users = {props.users} />
    </div>
  )
}

export default Page1Content