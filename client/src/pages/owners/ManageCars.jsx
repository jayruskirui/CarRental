import React, { useEffect, useState } from 'react'
import { assets, dummyCarData } from '../../assets/assets'
import Title from '../../components/owner/Title'

const ManageCars = () => {

  const currency = import.meta.env.VITE_CURRENCY

  const [cars, setCars] = useState([])

  const fetchOwnersCars = async () => {
    setCars(dummyCarData)
  }

  useEffect(() => {
    fetchOwnersCars()
  }, [])

  return (
    <div className='px-4 pt-10 md:px-10 w-full'>

      <Title title='Manage Cars' subTitle='View all the listed cars, update their details or 
      remove them from the booking platform'/>
      
      <div className='max-w-3xl w-full border border-borderColor rounded-md mt-6'>

        <table className='w-full border-collapse text-left text-sm text-gray-600'>
          <thead className='text-gray-500'>
            <tr>
              <th className='p-3 font-medium'>Cars</th>
              <th className='p-3 font-medium max-md:hidden'>Category</th>
              <th className='p-3 font-medium'>Price</th>
              <th className='p-3 font-medium max-md:hidden'>status</th>
              <th className='p-3 font-medium'>Action</th>
            </tr>
          </thead>

          <tbody>
            {cars.map((car, index)=>(
              <tr key={index} className='border-t border-borderColor'>

                <td className='p-3 flex items-center gap-3'>
                  <img src={car.image} alt='' className='h-12 w-12 aspect-square 
                  rounded-md object-cover'/>
                  <div className='max-md:hidden'>
                    <p className='font-medium'>{car.brand} {car.model}</p>
                    <p className='text-xs text-gray-500'>{car.seating_capacity} {car.transmission}</p>
                  </div>
                </td>

                <td className='p-3 max-md:hidden'>{car.category}</td>
                <td className='p-3'>{currency}{car.pricePerDay}/day</td>

                <td className='p-3 max-md:hidden'>
                  <span className={`px-3 py-1 rounded-full text-xs
                    ${car.isAvailable ? 'bg-green-100 text-green-500' : 'bg-red-100 text-red-500'}`}>
                    {car.isAvailable ? 'Available' : 'Unavailable'}
                  </span>
                </td>

                <td className='flex items-center px-3'>
                  <img src={car.isAvailable ? assets.eye_close_icon : assets.eye_icon} alt='' />
                  <img src={assets.delete_icon} alt='' />
                </td>

              </tr>
            ))}
          </tbody>
        </table>

      </div>

    </div>
  )
}

export default ManageCars