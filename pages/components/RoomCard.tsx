'use client'
import Link from "next/link";
import React from "react";

interface RoomDetailsProps {
    room_type: string;
    img_url: string;
    adults: string;
    children: string;
    room_size: number;
    room_price: number; // Added room_price property
}

const defaultDetails = {
  room_type: 'Signature Room',
  img_url: 'https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  adults: '3',
  children: '2',
  room_size: 400,
  room_price: 150000, // Price above or equal to 100000
}

const RoomCard = ({details = defaultDetails}:{details:RoomDetailsProps}) => {
  return (
    <Link href={`/accomodation/${details.room_type.toLowerCase().replace(/\s+/g, '-')}`} className="w-full block">
      <img
        className="w-full aspect-[4/3] md:aspect-[5/3]"
        src={details.img_url}
        alt=""
      />
      <article className="flex justify-between items-center gap-3 mt-3">
        <div className="space-y-1">
          <h4 className="text-4xl italic ibarra">{details.room_type}</h4>
          <p className="text-xs text-white/60 font-semibold tracking-[.2rem]">
            {details.room_size} M2 / {details.adults} ADULTS {details.children} CHILDREN
          </p>
        </div>

        <div className="space-y-2 text-right">
          <p className="text-white/60 text-sm">from</p>
          <h4 className="text-4xl ibarra">&#x20A6;{details.room_price}</h4>
        </div>
      </article>
    </Link>
  );
};

export default RoomCard;
