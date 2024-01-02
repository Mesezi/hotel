import React from 'react'
import Reveal from './Reveal'
import RoomSearchForm from './RoomSearchForm'
import Container from './Container'

const CtaSearch = () => {
  return (
  <div className='relative my-20 md:h-[80vh]'>

<img src="https://images.pexels.com/photos/3865792/pexels-photo-3865792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" 
className='h-[90%] absolute top-0 left-0  object-contain filter grayscale hidden md:block'/>

<img src="https://images.pexels.com/photos/3764568/pexels-photo-3764568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" 
className='h-[50%] absolute bottom-0 right-0 object-contain filter grayscale hidden md:block'/>

<img src="https://images.pexels.com/photos/2313037/pexels-photo-2313037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" 
className='h-[40%] absolute top-0 left-1/2 object-contain filter grayscale hidden md:block'/>

    <Container className='flex flex-col gap-8 relative z-50 bg-black/70 h-full justify-center'>
          <Reveal delay={false} from="bottom">
            <h2 className="flex flex-col text-4xl md:text-[4rem] md:leading-[4rem] ibarra text-center">
              The best people to take care of
              <span className="italic">our most valuable asset: you.</span>
            </h2>
          </Reveal>

          <RoomSearchForm />
    </Container>


  </div>
  )
}

export default CtaSearch