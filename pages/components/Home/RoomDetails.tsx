"use client";
import React, { useEffect, useRef } from "react";
import Reveal from "../Reveal";
import Container from "../Container";
import RoomForm from "../RoomForm";
import RoomCard from "../RoomCard";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { rooms } from "@/utils/allRooms";
import { motion, useAnimation, useInView } from "framer-motion";

const RoomDetails = () => {
  const sliderRef = useRef(null);
  const inView = useInView(sliderRef, { once: false });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("slide");
    } else {
      controls.set("initial");
    }
  }, [inView]);

  return (
    <div className="my-16">
      <Container>
        <Reveal from="top">
          <div className="md:hidden mb-16">
            <RoomForm />
          </div>
        </Reveal>
        <div className="max-w-[900px] text-center md:text-left">
          <Reveal delay={true} from="bottom">
            <p className="text-sm md:text-base font-semibold tracking-[.1rem] mb-5 text-white/60">
              THE FINEST HOTEL AT THE BEST PRICE
            </p>
          </Reveal>

          <Reveal delay={false} from="bottom">
            <h2 className="flex flex-col text-4xl md:text-[4rem] md:leading-[4rem] ibarra">
              The best people to take care of
              <span className="italic">our most valuable asset: you.</span>
            </h2>
          </Reveal>
        </div>

        <div className="md:w-[500px] md:ml-auto my-16 flex flex-col gap-5">
          <p className="leading-8">
            Leather detail shoulder contrastic colour contour stunning
            silhouette working peplum. Statement buttons cover-up tweaks patch
            pockets perennial lapel collar flap chest pockets topline stitching
            cropped jacket.
          </p>

          <Reveal from="bottom">
            <div className="flex gap-3 items-center">
              <h3 className="italic ibarra text-3xl">Get more information</h3>
              <span className="w-10 h-[1px] bg-white inline-block"></span>
            </div>
          </Reveal>
        </div>
      </Container>

      <div className="px-5 md:px-0 relative my-28">
        <h3
          className="text-4xl md:text-[4rem] md:leading-[4rem] md:top-[-11%] z-10
         italic ibarra mb-5 text-center w-full md:absolute"
        >
          Our Rooms
        </h3>

        <div ref={sliderRef} className="overflow-hidden md:overflow-auto w-full">
          <motion.div
            variants={{
              initial: { x: 800 },
              slide: { x: 0 },
            }}
            initial={"initial"}
            animate={controls}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <Swiper
              slidesPerView={"auto"}
              spaceBetween={40}
              // pagination={{
              //   clickable: true,
              // }}
              // modules={[Pagination]}
              className="mySwiper room-card cursor-grab"
            >
              {rooms.map((el: any, index: any) => {
                if (index == 0) {
                  return (
                    <SwiperSlide key={index} className="ml-14">
                      <RoomCard details={el} />
                    </SwiperSlide>
                  );
                }
                return (
                  <SwiperSlide key={index}>
                    <RoomCard details={el} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </motion.div>
        </div>

        
      </div>

      


      <div className="bg-[#FFD9B6] text-black py-20 px-5 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-[1fr,30%,30%] gap-10">
          <div className="max-w-[900px] text-center md:text-left md:ml-20">
          <Reveal delay={true} from="bottom">
            <p className="text-sm font-semibold tracking-[.1rem] mb-5">
              A GREAT ADVENTURE BEGINS HERE
            </p>
          </Reveal>

          <Reveal delay={false} from="bottom">
            <h2 className="flex flex-col text-4xl md:text-[4rem] md:leading-[4rem] ibarra">
                 We strive only
              <span className="italic">for the best!</span>
            </h2>
          </Reveal>
        </div>

            <div className="">
            <p className="w-full text-center md:text-left md:max-w-[15rem] mx-auto">
        Aliquip veniam delectus, Marfa eiusmod Pinterest in do umami readymade swag. Selfies iPhone Kickstarter, drinking vinegar
        </p>
            </div>

            <div>
            <img
        className="w-full aspect-[4/3] relative md:top-5"
        src='https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        alt=""
      />
            </div>
        
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[1fr,1fr,30%] gap-10 mt-4">

            <div>
            <img
        className="h-[30rem] md:aspect-[3/4] object-cover"
        src='https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        alt=""
      />
            </div>

              {/* <Reveal from="bottom"> */}
              <ul className="ibarra text-4xl italic flex flex-col cursor-pointer justify-center font-light gap-7 md:w-fit md:mx-auto">
              <li>Food & Beverage</li>
              <li>Lobby Bar</li>
              <li>Dining Experience</li>
              <li>Sunset Bar</li>
            </ul>
              {/* </Reveal> */}
            

            <div className="md:flex md:items-end md:justify-end">
            <img
        className="md:h-[20rem] w-full md:w-auto md:aspect-[4/5] object-contain md:object-cover"
        src='https://images.pexels.com/photos/4252137/pexels-photo-4252137.jpeg?auto=compress&cs=tinysrgb&w=6000'
        alt=""
      />
            </div>
        
          </div>
        </div>
    </div>
  );
};

export default RoomDetails;
