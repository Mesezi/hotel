import Link from 'next/link'
import React from 'react'
import { rooms } from "@/utils/allRooms";

interface RoomDetailsProps {
    room_type: string;
    img_url: string;
    adults: string;
    children: string;
    room_size: number;
    room_price: number; // Added room_price property
}

const Footer = () => {
  return (
    <footer className='py-12 px-5'>
        <section className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 md:gap-5'>
        <div>
        <h5 className='ibarra text-3xl mb-5 text-center md:text-left'>Book Your Stay</h5>
        <ul className='flex flex-col gap-3 text-center md:text-left'>
            <li className='text-white/60'><Link href='/'>Our Rooms</Link></li>
            <li className='text-white/60'><Link href='/'>Food & Beverage</Link></li>
            <li className='text-white/60'><Link href='/'>Sunset Bar</Link></li>
            <li className='text-white/60'><Link href='/'>Lobby Bar</Link></li>
        </ul>
        </div>

        <div>
        <h5 className='ibarra text-3xl mb-5 text-center md:text-left'>About</h5>
        <ul className='flex flex-col gap-3 text-center md:text-left'>
            <li className='text-white/60'><Link href='/'>Story & History</Link></li>
            <li className='text-white/60'><Link href='/'>FAQ</Link></li>
            <li className='text-white/60'><Link href='/'>Contact Us</Link></li>
        </ul>
        </div>


        <div>
        <h5 className='ibarra text-3xl mb-5 text-center md:text-left'>Accomodations</h5>
        <ul className='flex flex-col gap-3 text-center md:text-left'>
            {
                rooms.map((item:RoomDetailsProps)=> <li className='text-white/60'><Link href='/'>{item.room_type}</Link></li>)
            }
        </ul>
        </div>

        <div>
        <h5 className='ibarra text-3xl mb-5 text-center md:text-left'>Spa & Beauty</h5>
        <ul className='flex flex-col gap-3 text-center md:text-left'>
            <li className='text-white/60'><Link href='/'>Relax Spa</Link></li>
            <li className='text-white/60'><Link href='/'>Wellness</Link></li>
        </ul>
        </div>

        
        <div>
        <h5 className='ibarra text-3xl mb-5 text-center md:text-left'>Activities Special Offer</h5>
        <ul className='flex flex-col gap-3 text-center md:text-left'>
        </ul>
        </div>


        </section>

        <div className="pt-6 mt-12 border-t-[1px] flex flex-col md:flex-row gap-5 justify-between items-center text-center text-sm tracking-widest">
         <p>© COPYRIGHT EDEN HOTELS – WEBSITE BY MENUCHIM</p>
         <img
              src="/assets/eden hotel.png"
              alt="company logo"
              className="h-20 object-cover eden-logo"
            />
        </div>
    </footer>
  )
}

export default Footer