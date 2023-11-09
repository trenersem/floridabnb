'use client'

import { useRouter } from 'next/navigation';
import React from 'react'

const Main = () => {
  const router = useRouter();
  return (
    <>
    <div className='h-[77vh]'>

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
    </>
  )
}

export default Main
