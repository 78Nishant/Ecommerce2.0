import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { FiShoppingBag } from 'react-icons/fi'
const productcard = () => {
  return (
    <div className='bg-[#fffafa] border  drop-shadow-xl h-1/3 w-1/6 text-black mt-5 ml-5 mb-10 rounded-xl  '>
      <span className='h-1/2 '>
      <img className='border rounded-t-xl bg-gray-100' src="https://static.vecteezy.com/system/resources/thumbnails/013/143/819/small/blue-running-sneaker-on-blue-background-close-up-photo.jpg" alt="image _here" />
      </span>

      <div className='h-1/2 ml-5'>
        <span className='flex text-left w-full'>
          <p className='text-left  font-semibold'>Product Name</p>
        </span>
        <p className='font-bold mt-2'>₹600</p>

          {/* buttons */}
            <div className='text-white flex w-full mt-3 justify-start gap-7'>
              <button className='bg-red-500 w-1/3 h-7 rounded-sm flex'>
                <p className='ml-2'>cart</p>
                <FaShoppingCart  className='h-full w-5 ml-5'/>
              </button>
              <button className='bg-blue-500 w-1/3 rounded-sm flex'>
                <p className='ml-2'>cart</p>
                <FiShoppingBag   className='h-full w-5 ml-5'/>
              </button>
            </div>
      
      </div>

      
    </div>
  )
}

export default productcard
