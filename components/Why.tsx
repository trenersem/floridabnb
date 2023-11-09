import React from 'react'

const stats = [
    {
        id: 1,
        title: 'High Occupancy',
        stats: 'High Occupancy',
    },
    {
        id: 2,
        title: 'Competitive pricing',
        stats: 'Competitive pricing',
    },
    {
        id: 3,
        title: 'Permits and Licenses',
        stats: 'Permits and Licenses',
    },
    {
        id: 4,
        title: '24/7 guest support',
        stats: '24/7 guest support',
    },
]
const Why = () => {
  return (
    <section className="w-full border-y border-gray-200 bg-white/10 py-8 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur mt-14 sm:mt-24">
      <div className="mx-auto w-full max-w-screen-xl px-2.5 lg:px-20 grid gap-y-4 divide-x divide-gray-200 md:grid-cols-4 md:gap-y-0">
        {stats.map((el) => (
            <div
                key={el.id}
                className='flex flex-col items-center justify-center space-y-2'
            >
                {/* <p className='text-4xl font-bold'>
                    {el.stats}
                </p> */}
                <p className='font-semibold uppercase text-gray-500 md:text-lg'>
                      {el.title}
                </p>
            </div>
        ))}
      </div>
    </section>
  )
}

export default Why