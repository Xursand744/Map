import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
    return (
        <div>
            <div className='border-red-500 border-b-[10px] flex justify-around'>
                <Link to='/'>Logo</Link>
                <ul className='flex gap-9'>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <li><Link to='/servise'>Servise</Link></li>
                </ul>
            </div>
        </div>
    )
}
