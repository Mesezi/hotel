import React, { useEffect, useState } from 'react'
import { Controller } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const ActivitiesSlider = () => {

    const [firstSwiper, setFirstSwiper] = useState(null);
    const [secondSwiper, setSecondSwiper] = useState(null);

    const activities = [
        {
            title: 'Swimming',
            imageUrl: 'https://images.pexels.com/photos/61129/pexels-photo-61129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },

        {
            title: 'Table Tennis',
            imageUrl: 'https://images.pexels.com/photos/4080060/pexels-photo-4080060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },

        {
            title: 'Snooker',
            imageUrl: 'https://images.pexels.com/photos/5055431/pexels-photo-5055431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        }

    ]

    const ActivityCard = ({imageUrl}:{imageUrl:string}) =>{
        return (
            <div className="w-full h-full relative">
            <img
              className="w-full h-full object-cover absolute"
              src={imageUrl}
              alt=""
            />
            <div className="absolute h-full w-full z-10 bg-black/30"></div>
            </div>
        )
    }

  return (
    <div className='relative h-[20rem] activities w-full ml-auto'>   


    <div className=" h-full w-full images">
    <Swiper
        modules={[Controller]}
        //@ts-ignore
        onSwiper={setFirstSwiper}
        slidesPerView={"auto"}
        spaceBetween={50}
        controller={{ control: secondSwiper }}
        className=' h-full'
        centeredSlides={true}
      >
             {activities.map((el: any, index: any) => {
                return (
                  <SwiperSlide key={index}>
                    <ActivityCard imageUrl={el.imageUrl} />
                  </SwiperSlide>
                );
              })}

      </Swiper>

    </div>
        


<div className=" w-full mx-auto md:w-[30%] absolute top-[40%] md:top-1/2 md:left-0 md:-translate-y-1/2 h-[5rem] z-20 md:ml-[15%]">
<Swiper
        modules={[Controller]}
        //@ts-ignore
        onSwiper={setSecondSwiper}
        controller={{ control: firstSwiper }}
        direction='vertical'
        className='h-full noSwipingClass'
        allowSlidePrev={false}
        allowSlideNext={false}
        
      >
         {activities.map((el: any, index: any) => {
                return (
                   
                  <SwiperSlide key={index}>
                     <div className='h-full w-full flex justify-center md:justify-start items-center'>
                        <h4 className='ibarra text-5xl font-semibold'> {el.title}</h4>
                        </div>
                  </SwiperSlide>
                );
              })}
      </Swiper>

</div>
  
      
      </div>
  )
}

export default ActivitiesSlider