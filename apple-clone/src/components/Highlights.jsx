import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { rightImg, watchImg } from '../utils'
import VideoCarousel from './VideoCarousel'

const Highlights = () => {
    useGSAP(()=>{
        gsap.to('#title',{
            opacity:1,
            delay:1.5,
            y:0,
        })
        gsap.to('.link',
        {
            y:0,
            opacity:1,
            delay:1.5,
            duration:1,
            stagger:0.25

        })
    },[])
  return (
    <section className='w-screen overflow-hidden h-full common-padding
    bg-zinc'>
    <div className='screen-max-width'>
        <div className='mb-12 w-full md:flex items-end justify-between'>
            <h1 id='title' className='section-heading' >
                Get The highlights
            </h1>
            <div className='flex flex-wrap items-end gap-5'>
            <p className='link'>
                Wath the film
                <img className='ml-2' alt='Watch' src={watchImg} />
            </p>
            <p className='link'>
                Wath the event
                <img className='ml-2' alt='right' src={rightImg} />
            </p>

            </div>
        </div>
        <VideoCarousel/>
    </div>

    </section>
  )
}

export default Highlights