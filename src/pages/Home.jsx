import React from 'react'

import Rasm from "../assets/react.svg"

export default function App() {


  let tavar = [

    {
      id: 1,
      img: Rasm,
      name: 'phone16',
      price: 14000,
      btn: 'Muddatli tolov'
    },
    {
      id: 2,
      img: Rasm,
      name: 'phone12',
      price: 15000,
      btn: 'Muddatli tolov'
    },
    {
      id: 3,
      img: Rasm,
      name: 'phone15',
      price: 16000,
      btn: 'Muddatli tolov'
    },
    {
      id: 4,
      img: Rasm,
      name: 'phone11',
      price: 14000,
      btn: 'Muddatli tolov'
    },
    {
      id: 5,
      img: Rasm,
      name: 'phone17',
      price: 19000,
      btn: 'Muddatli tolov'
    },
    {
      id: 6,
      img: Rasm,
      name: 'phone18',
      price: 17000,
      btn: 'Muddatli tolov'
    },

  ]


  return (
    <div>
      <div className='grid grid-cols-4'>
        { tavar.map(tavarlar => (
          <div className='border' id={tavarlar.id}>
            <img src={tavarlar.img} alt="" />
            <h2>{tavarlar.name}</h2>
            <mark>{tavarlar.price}</mark>
            <button className='block'>{tavarlar.btn}</button>
          </div>
        ))}
      </div>

    </div>
  )
}

