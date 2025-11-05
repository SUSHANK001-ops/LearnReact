import React from 'react'

const RightCardContent = (props) => {
  return (
      <div className="absolute top-0 left-0 h-full w-full  p-8 flex flex-col justify-between">
        <h2 className="bg-white rounded-full h-12 w-12 text-2xl flex justify-center items-center">{props.id}</h2>
        <div>
          <p className="text-lg leading-normal bg-red-100  p-4 rounded-2xl mb-8">
           {props.intro}
          </p>
          <div className="flex justify-between mt-2">

          <button className="bg-rose-400 text-white font-medium px-7 py-3 rounded-full text-lg ">{props.tags}</button>
          <button className="bg-rose-400 text-white font-medium px-4 py-3 rounded-full text-lg">
            <i class="ri-arrow-right-line"></i>
          </button>
          </div>
        </div>
      </div>
  )
}

export default RightCardContent