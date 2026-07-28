import React, { useEffect, useState } from 'react'
import { assets, dummyMyBookingsData } from '../../assets/assets'
import Title from '../../components/owner/Title'

const ManageBookings = () => {

const currency = import.meta.env.VITE_CURRENCY
const [bookings, setBookings] = useState([])

const fetchOwnerBookings = async () => {
  setBookings(dummyMyBookingsData)
}

useEffect(()=>{
  fetchOwnerBookings()
},[])

  return (
    <div className='px-4 pt-10 md:px-10 w-full'>

      <Title title='Manage Bookings' subTitle='Track all customer bookings, approve or
      cancel requests and manage their booking statuses'/>
      
      <div className='max-w-3xl w-full border border-borderColor rounded-md mt-6'>

        <table className='w-full border-collapse text-left text-sm text-gray-600'>
          <thead className='text-gray-500'>
            <tr>
              <th className='p-3 font-medium'>Cars</th>
              <th className='p-3 font-medium max-md:hidden'>Date Range</th>
              <th className='p-3 font-medium'>Total</th>
              <th className='p-3 font-medium max-md:hidden'>Payment</th>
              <th className='p-3 font-medium'>Action</th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((bookings, index)=>(
              <tr key={index} className='border-t border-borderColor text-gray-500'>
                
                <td className='p-3 flex items-center gap-3'>
                  <img src={bookings.car.image} alt='' className='h-12 w-12 aspect-square rounded-md
                  object-cover'/>
                  <p className='font-medium max-md:hidden'>{bookings.car.brand} {bookings.car.model}</p>
                </td>

                <td className='p-3 max-md:hidden'>
                  {bookings.pickupDate.split('T')[0]} to {bookings.returnDate.split('T')[0]}
                </td>

                <td className='p-3'>{currency}{bookings.price}</td>

                <td className='p-3'>
                  <span className='bg-gray-100 px-3 py-1 rounded-full text-xs'>offline</span>
                </td>

                <td className='p-3'>
                  {bookings.status === 'pending' ? (
                    <select value={bookings.status}
                    className='px-2 py-1.5 rounded-md text-gray-500 border border-borderColor outline-none'>
                      <option value='pending'>Pending</option>
                      <option value='cancelled'>Cancelled</option>
                      <option value='confirmed'>Confirmed</option>
                    </select> )
                    : ( <span className={`px-3 py-1 rounded-full text-xs font-semibold
                    ${bookings.status === 'confirmed' ? 'bg-green-100 text-green-500' : 'bg-red-100 text-red-500'}`}>
                      {bookings.status}</span>
                  )}
                </td>
              
              </tr>
            ))}
          </tbody>
        </table>

      </div>

    </div>
  )
}

export default ManageBookings