'use client'
import React from "react";
import Reveal from "../Reveal";
import RoomForm from "../RoomForm";

const Hero = () => {
  return (
    <div className="h-screen relative flex flex-col gap-2">
      <img
        src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        className="absolute h-full w-full object-cover"
        alt=""
      />
      
      <article className="absolute w-full h-full flex flex-col items-center justify-end py-10 gap-2 bg-black/50 z-10 top-0">
        <div className="text-center my-auto">
        <Reveal delay={true} from="top">
          <p className="text-sm md:text-base tracking-[.1rem] font-semibold mb-2">
            STAY WITH US FEEL LIKE HOME
          </p>
        </Reveal>

        <Reveal delay={false} from="bottom">
          <h2 className="flex flex-col text-4xl md:text-[4rem] md:leading-[4rem] ibarra text-center">
            Redefine your expectations.
            <span className="italic">A hotel experience, unlike the rest</span>
          </h2>
        </Reveal>
        </div>
       
        <div className="hidden md:block">
        <RoomForm />
        </div>
      
      </article>
    </div>
  );
};

export default Hero;
