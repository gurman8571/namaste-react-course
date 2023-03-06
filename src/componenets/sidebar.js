import React from 'react'


export default function sidebar() {
  return (
    <div className='flex justify-end border-r-2 h-full w-fulls border-black-400'>
      <div className=''>
     <ul>
     <li class="capitalize font-bold text-md my-2 pl-6 pr-2  cursor-pointer text-yellow-500">recomended</li>
     <li class="capitalize font-bold text-md my-2 pl-6 pr-2 cursor-pointer text-gray-600">Combo</li>
     <li class="capitalize font-bold text-md my-2 pl-6 pr-2 cursor-pointer text-gray-600">Thali</li>
     <li class="capitalize font-bold text-md my-2 pl-6 pr-2 cursor-pointer text-gray-600">Veg</li>
     <li class="capitalize font-bold text-md my-2 pl-6 pr-2 cursor-pointer text-gray-600">Non veg</li>
     </ul>
      </div>
    </div>
  )
}
