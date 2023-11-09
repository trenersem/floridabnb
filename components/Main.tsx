'use client'

import { useRouter } from 'next/navigation';
import React from 'react'

const Main = () => {
  const router = useRouter();
  return (
    <>
    <div className='h-[90vh]'>

      <h1 className="head_text  text-center">
          Maximize Your {' '}
          <br className="max-md:hidden"/>
          <span className="orange_gradient text-center">
            Short-Term Rental
          </span>
          <br />
          for Less
        </h1>
        <p className="desc text-center">
          Evolve partners with you and takes on the time-consuming tasks of
          vacation rental management so you can earn more and stress less.
        </p>

        <div className='flex-center gap-8 mt-10 mb-10'>
          <button
              type='button'
              className='black_btn'
              onClick={() => router.push('/form')}
          >
              Let's do this
          </button>
          <button
              type='button'
              className='outline_btn'
              onClick={() => router.push('/form')}
          >
                  Learn more
          </button>
        </div>
    </div>
      
      <div className='flex flex-col md:flex-row gap-10 layout min-h-[80vh]'>
            <div className='max-w-[570px] max-h-[390px] w-full h-full mt-10'>
                <img
                    src={`https://www-vacasa.imgix.net/people_fatherson_S.jpeg?ar=1600%3A1200&auto=format%2Ccompress&crop=focalpoint&fit=crop&fp-x=0.24&fp-y=0.41&fp-z=1&ixlib=python-3.2.1&q=45&w=1080`}
                    alt='about us img'
                    className='min-w-full min-h-full rounded-lg'
                />
            </div>
            <div className='flex-1 w-full md:max-w-[40%]  mx-auto'>
              <h2 className='font-display text-2xl font-extrabold leading-tight text-black sm:text-3xl sm:leading-tight mb-5'>
                Over 92% of PremierFloridaBNB markets out-booked other property managers
              </h2>
              <h4 className='font-semibold text-gray-500 md:text-lg pb-5  md:text-start mb-5'>
                PremierFloridaBNB wins more for homeowners
              </h4>
              PremierFloridaBNB is a leading property management company specializing in short-term vacation rentals. We are committed to delivering exceptional service, maximizing occupancy rates, and ensuring a seamless experience for both property owners and guests.
              Our team holds the prestigious SuperHost status, which translates to increased bookings and improved search engine visibility. We utilize automated messaging systems, respond promptly to inquiries, and offer a wide range of services, from check-out calls to quick problem resolution.
            </div>
      </div>
    </>
  )
}

export default Main
