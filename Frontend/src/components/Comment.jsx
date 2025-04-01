import React from 'react'
import Image from './Image'
import { Link } from 'react-router-dom'
const Comment = () => {
  return (
    <div className='flex flex-col bg-white w-full p-4 rounded-xl'>
        <div className='flex gap-4 items-center'>
            {/* IMAGE, NAME AND WHEN */}
            <Image src="Sunset1" w="20" h="20" className="rounded-full object-cover w-[50px] h-auto" />
            <Link to="" className="text-blue-800">John Doe</Link>
            <span>•</span>
            <span className='text-gray-500 text-sm'>2 days ago</span>
        </div>
        <div className='mt-2 text-sm'>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet nobis aperiam qui. Excepturi voluptate mollitia qui est beatae nostrum suscipit? Repudiandae tempore nobis, explicabo natus soluta iure laudantium esse accusantium!</p>
        </div>
      
    </div>
  )
}

export default Comment
