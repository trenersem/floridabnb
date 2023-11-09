'use client'

import { useRouter } from 'next/navigation';
import React from 'react'

const CTA = () => {
  const router = useRouter();
  return (
    <section className='w-full mt-20 border-t border-gray-200 bg-white/10 py-20 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur'>
      <div className='mx-auto w-full max-w-screen-xl px-2.5 lg:px-20'>
        <div className='mx-auto max-w-md text-center sm:max-w-xl'>
            <h2 className='bg-gradient-to-r from-gray-800 via-gray-500 to-gray-800 bg-clip-text font-display text-4xl font-extrabold leading-tight text-transparent sm:text-5xl sm:leading-tight'>
                Expert Short-Term Rental Management Services for Less
            </h2>
            <p className='mt-5 text-gray-600 sm:text-lg'>
                With Evolve’s fresh approach and 10% industry-low fee, you’ll stress less and earn more.
            </p>
        </div>
        <div className='flex items-center justify-center py-10'>
            <button className='black_btn' onClick={() => router.push('/form')}>
                    See If You Quality
            </button>
        </div>
      </div>
    </section>
  )
}

export default CTA
