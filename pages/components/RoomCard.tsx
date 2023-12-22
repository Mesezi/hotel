import React from "react";

interface RoomDetailsProps {
    room_type?: string;
    img_url: string;
    adults?: string;
    children?: string;
    room_size?: number;
    room_price?: number; // Added room_price property
  }

const RoomCard = ({details}:{details:RoomDetailsProps}) => {
  return (
    <div className="w-full">
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
    </div>
  );
};

export default RoomCard;
