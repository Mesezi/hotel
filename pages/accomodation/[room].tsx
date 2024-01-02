"use client";
import React, { useEffect, useMemo } from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import { rooms } from "@/utils/allRooms";
import Reveal from "../components/Reveal";
import Container from "../components/Container";
import { LiaBedSolid } from "react-icons/lia";
import { LuShowerHead } from "react-icons/lu";
import { TbBuildingSkyscraper } from "react-icons/tb";
import { LuMonitorSmartphone } from "react-icons/lu";
import { MdOutlineWifiTethering } from "react-icons/md";
import { SlSizeFullscreen } from "react-icons/sl";
import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from "swiper/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "swiper/css";
import "swiper/css/pagination";
import CtaSearch from "../components/CtaSearch";
import HoverCards from "../components/HoverCards";

const Room = () => {
  const router = useRouter();

  const slide = (arg:string) =>{
     //@ts-ignore
    const swiper:any = document?.querySelector('.room_carousel')?.swiper;
    arg === 'next' ? swiper.slideNext() : swiper.slidePrev()
  }

  const roomQueryParam = router.query?.room;

  if (typeof roomQueryParam !== "string") {
    return;
  }

  const roomTypeSplit = roomQueryParam.split("-")[0];
  const details = rooms.find((el) =>
    el.room_type.toLowerCase().includes(roomTypeSplit)
  );

  const randomImageIndex = useMemo(()=>{
    if(!details){
      return [0,1]
    }
    let randomNum1 = Math.floor(Math.random() * details?.other_images.length);
    let randomNum2 = Math.floor(Math.random() * details?.other_images.length);
  
    while (randomNum2 === randomNum1) {
      randomNum2 = Math.floor(Math.random() * details?.other_images.length);
    }
  
    return [randomNum1, randomNum2];
  }, [roomQueryParam, details])

  console.log(randomImageIndex)

  return (
    <Layout>
      <div className="relative h-screen w-full">
        <img
          src={details?.img_url}
          alt=""
          className="h-full w-full object-cover absolute brightness-50"
        />
        <div className="flex h-full w-full relative z-10 flex-col items-center p-14">
          <div className="my-auto text-center space-y-4">
            <p className="tracking-widest font-medium">
              DESIGNED FOR NATURAL LIVING
            </p>
            <h1 className="ibarra italic text-5xl md:text-[4rem]">
              {details?.room_type}
            </h1>
          </div>

          {details && (
            <div className="flex gap-4 flex-wrap text-center justify-center">
              <p>Average area: {details?.room_size} m2 </p>
              <p>
                Guests : {details?.adults} adult
                {details?.adults !== "1" ? "s" : ""} {details?.children} child
                {details?.children !== "1" ? "ren" : ""}{" "}
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-16 px-4 md:px-0">
        <img
          src={details?.other_images[randomImageIndex[0]]}
          className="object-cover h-[30rem] mt-10 w-full"
          alt=""
        />

        <div className="flex flex-col gap-6 md:pb-20 justify-end order-first md:order-none">
          <p className="md:w-[80%] mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
            cupiditate vero mollitia corporis ex quos iste tempora natus fugiat
            ad?
          </p>
          <Reveal from="bottom">
            <div className="flex gap-3 items-center md:w-[80%] mx-auto">
              <h3 className="italic ibarra text-2xl">Book Your Stay</h3>
              <span className="w-10 h-[1px] bg-white inline-block"></span>
            </div>
          </Reveal>
        </div>

        <img
          src={details?.other_images[randomImageIndex[1]]}
          className="hidden md:block object-cover h-[22rem] w-[75%] ml-auto"
          alt=""
        />
      </div>

      <Container className="grid grid-cols-2 md:grid-cols-6 gap-5 justify-center">

      <div className="flex text-[#FFD9B6] flex-col items-center gap-3">
        <SlSizeFullscreen size={56}/>
        <p className="tracking-widest text-[.7rem] font-medium">{details?.room_size} M2</p>
        </div>
        
        <div className="flex text-[#FFD9B6] flex-col items-center gap-3">
        <LiaBedSolid size={56}/>
        <p className="tracking-widest text-[.7rem] font-medium">1 TWINS BED</p>
        </div>

 <div className="flex text-[#FFD9B6] flex-col items-center gap-3">
        <TbBuildingSkyscraper  size={56}/>
        <p className="tracking-widest text-[.7rem] font-medium">CITY VIEW</p>
        </div>


       <div className="flex text-[#FFD9B6] flex-col items-center gap-3">
        <LuShowerHead size={56}/>
        <p className="tracking-widest text-[.7rem] font-medium">RAIN SHOWER</p>
        </div>
        
        <div className="flex text-[#FFD9B6] flex-col items-center gap-3">
        <LuMonitorSmartphone size={56}/>
        <p className="tracking-widest text-[.7rem] font-medium">TV</p>
        </div>
    
     <div className="flex text-[#FFD9B6] flex-col items-center gap-3">
        <MdOutlineWifiTethering size={56}/>
        <p className="tracking-widest text-[.7rem] font-medium">WIFI</p>
        </div>
      </Container>

      <div className="my-20 relative">
          <button  onClick={()=>slide('prev')}  className="absolute top-1/2 left-4 bg-white/50 z-20 rounded-full flex justify-center items-center h-10 w-10">
            <IoIosArrowBack className='h-[65%] w-[65%] text-black/90'/></button>

      <button onClick={()=>slide('next')} className="absolute top-1/2 right-4 bg-white/50  z-20 rounded-full flex justify-center items-center h-10 w-10">
            <IoIosArrowForward className='h-[65%] w-[65%] text-black/90'/></button>
            
      <Swiper
              slidesPerView={"auto"}
              spaceBetween={30}
              speed={1200}
              // pagination={{
              //   clickable: true,
              // }}
              // modules={[Pagination]}
              className="room_carousel h-[250px] md:h-[70vh]"
            >
               <SwiperSlide  className="">
                    <img src={details?.img_url} className="h-full" alt="" />
                  </SwiperSlide>
              {details?.other_images.map((el: any, index: any) => {
                return (
                  <SwiperSlide key={index} className="">
                    <img src={el} className="h-full" alt="" />
                  </SwiperSlide>
                );
              })}
            </Swiper>
      </div>

      <CtaSearch />

      <HoverCards />
    </Layout>
  );
};

export default Room;
