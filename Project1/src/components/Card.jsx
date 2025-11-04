import { Bookmark } from 'lucide-react'


const Card = (props) => {
  return (
    <div className='h-96 w-96 bg-white border p-4 rounded-2xl m-4'>
        <div className="top flex justify-between">
            <img className='h-10 border rounded-full object-cover ' src={props.brand} alt="logo" />
            <button className="save flex border items-center p-1 text-gray-500 rounded-sm border-gray-400">
                <p className=''>Save </p>
                <Bookmark className='h-4'/>
            </button>
        </div>
        <div className="bottom mt-10">
            <div className='flex items-center gap-1'>
            <h3 className='text-3xl font-bold  '>{props.company}</h3>
            <p className='mt-3 text-sm text-gray-400'>{props.datePosted}</p>
            </div>
            <h1 className='text-3xl font-bold'>{props.post}</h1>
            <div className="flex gap-1 mt-2">
                <p className='bg-gray-400 rounded-sm p-px'>{props.tag1}</p>
                <p className='bg-gray-400 rounded-sm p-px'>{props.tag2}</p>
                
            </div>
            <hr className='mt-20' />
        </div>
        <div className="footer flex  justify-between">
        <div className="">
            <h3 className='text-xl font-bold'>{props.pay}</h3>
            <p className='text-gray-400'>{props.location}</p>
        </div>
        <button className=' text-white '> 
           <p className='bg-black p-2 rounded-xl'>
            
             Apply Now
            </p>
        </button>
        </div>
    </div>
  )
}

export default Card