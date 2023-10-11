'use client'


import Image from 'next/image';

export const partners = [
  {
    id: 'google',
    logo:  '/assets/partners/google.svg',
    width: 109,
    height: 34,
  },
  {
    id: 'airbnb',
    logo:  '/assets/partners/airbnb.svg',
    width: 134,
    height: 38,
  },
  {
    id: 'booking',
    logo:  '/assets/partners/booking.svg',
    width: 162,
    height: 26,
  },
  {
    id: 'vrbo',
    logo:  '/assets/partners/vrbo.svg',
    height: 34,
    width: 113,
  },
  {
    id: 'hooper',
    logo:  '/assets/partners/hopper.svg',
    width: 137,
    height: 34,
  },
]
const Partners = () => {
  return (
    <div className='mx-10 max-w-6xl w-full px-4'>
        <p className='mx-auto max-w-sm text-center text-gray-600 sm:max-w-xl sm:text-lg"'>
            We Lists Your Property on All the Top Rental Sites to Help You Succeed
        </p>
      <a
        href='/customers'
        className='mx-auto mt-8 flex flex-wrap justify-around w-full max-w-screen-lg items-center px-5 mb-6 md:mb-2 md:px-0 gap-2'
      >
        { partners.map((el) => (
            <div
                className='flex flex-center justify-self-center md:h-20 h-12'
            >
                <Image
                    key={el.id}
                    src={el.logo}
                    alt={el.id}
                    loading='lazy'
                    width={el.width}
                    height={el.height}
                    decoding='async'
                    style={{height: el.height}}
                    className={`grayscale transition-all hover:grayscale-0 blur-0`}
                />
            </div>
        ))}

      </a>
    </div>
  )
}

export default Partners
