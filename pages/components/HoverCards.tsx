import React from 'react'

const HoverCards = () => {

    const Cards = ({
        image1,
        image2,
        title,
      }: {
        image1: string;
        image2: string;
        title: string;
      }) => {
        return (
          <div className="group relative h-[30rem] md:h-[35rem] overflow-hidden">
            <img
              className="group-hover:opacity-0 opacity-1 absolute h-full w-full object-cover z-10 duration-[.8s]  ease-in-out"
              src={image2}
              alt=""
            />
            <img
              className="absolute h-full w-full object-cover"
              src={image1}
              alt=""
            />
    
            <div className="flex justify-center items-center h-full w-ful bg-black/30 relative z-10 p-3">
              <article className="md:w-[60%] overflow-hidden">
                <h3 className="text-[3.5rem] ibarra italic">{title}</h3>
                <p
                  className="mt-28 mb-5 md:translate-x-[100%] md:group-hover:translate-x-0 
                group-hover:visible ease-in-out duration-[.8s] delay-100 text-lg"
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                  ex magni accusantium asperiores eius blanditiis provident
                  distinctio. Itaque, quisquam architecto.
                </p>
                <button className="overflow-hidden">
                  <span
                    className="font-bold tracking-widest inline-block
                  md:translate-x-[100%] group-hover:translate-x-0 
                  group-hover:visible ease-in-out duration-[.8s] 
                  "
                  >
                    LEARN MORE
                  </span>
                </button>
              </article>
            </div>
          </div>
        );
      };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
    <Cards
      image1="https://images.pexels.com/photos/2373201/pexels-photo-2373201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      image2="https://images.pexels.com/photos/3865792/pexels-photo-3865792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      title="Relax Spa"
    />

    <Cards
      image1="https://images.pexels.com/photos/3764568/pexels-photo-3764568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      image2="https://images.pexels.com/photos/5793891/pexels-photo-5793891.jpeg?auto=compress&cs=tinysrgb&w=600"
      title="Wellness"
    />
  </div>
  )
}

export default HoverCards