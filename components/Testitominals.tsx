'use client'
import Link from 'next/link';
import React, { useState } from 'react'

const airbnbID = [
    {
        id: '979826132485969238',
    }
]
const apiKey = 'cdf19c2519msha09ba2add6a2d6bp15fae6jsnd00615ffbe88';
const propertyId = '979826132485969238';

const url = `https://airbnb19.p.rapidapi.com/api/v1/getPropertyReviews?propertyId=${propertyId}`;

const headers = new Headers({
  'X-RapidAPI-Key': apiKey,
  'X-RapidAPI-Host': 'airbnb19.p.rapidapi.com'
});

const options = {
  method: 'GET',
  headers: headers,
};

const propertyReviews = [
    {
        id: 1,
        image:'testitominals.png',
        link:'https://www.airbnb.ca/users/show/474354053',
    
    },
    {
        id: 2,
        image:'testitominals-2.png',
        link:'https://www.airbnb.ca/users/show/474354053',
    
    },
    {
        id: 3,
        image:'testitominals-3.png',
        link:'https://www.airbnb.ca/users/show/474354053',
    
    },
    {
        id: 4,
        image:'testitominals-4.png',
        link:'https://www.airbnb.ca/users/show/474354053',
    },
    {
        id: 5,
        image:'testitominals-5.png',
        link:'https://www.airbnb.ca/users/show/474354053',
    },
    {
        id: 6,
        image:'testitominals-6.png',
        link:'https://www.airbnb.ca/users/show/474354053',
    },
    {
        id: 7,
        image:'testitominals-7.png',
        link:'https://www.airbnb.ca/users/show/474354053',
    },
    {
        id: 8,
        image:'testitominals-8.png',
        link:'https://www.airbnb.ca/users/show/474354053',
    },
    {
        id: 9,
        image:'testitominals-9.png',
        link:'https://www.airbnb.ca/users/show/474354053',
    },
    {
        id: 10,
        image:'testitominals-10.png',
        link:'https://www.airbnb.ca/users/show/474354053',
    },
    {
        id: 11,
        image:'testitominals-11.png',
        link:'https://www.airbnb.ca/users/show/474354053',
    },
    {
        id: 12,
        image:'testitominals-12.png',
        link:'https://www.airbnb.ca/users/show/474354053',
    },
    {
        id: 13,
        image:'testitominals-13.png',
        link:'https://www.airbnb.ca/users/show/474354053',
    },
]

const Testitominals = () => {
  return (
    <section className='mx-auto w-full max-w-screen-xl px-2.5 lg:px-20 pt-20'>
        <div className='mx-auto max-w-md text-center sm:max-w-xl'>
            <h2 className='font-display text-4xl font-extrabold leading-tight text-black sm:text-5xl sm:leading-tight'>
                Loved by {' '}
                <span
                    className='bg-gradient-to-r from-red-600 to-amber-600 bg-clip-text text-transparent'
                >
                    13.1K users
                </span>
            </h2>
            <p className='mt-5 text-gray-600 sm:text-lg'>
                Don't take it from us - here's what our users have to say about our sevices.
            </p>
        </div>

        <div className='space-y-6 py-8 sm:block sm:columns-2 sm:gap-6 lg:columns-3 mb-20'>
            {propertyReviews.map(({id, image, link}: any) => (
                <div className='relative lg:top-12' key={id}>
                    <div
                        className='not-prose break-inside-avoid rounded-lg border bg-white border-gray-300 bg-clip-padding p-6 pb-4 backdrop-blur-lg backdrop-filter relative lg:top-12 cursor-pointer hover:scale-105'
                    >
                        <Link
                            href={link}
                            target='_blank'
                        >
                            <img src={`/assets/images/${image}`}  alt=''/>
                        </Link>
                    </div>

                </div>
            ))}
        </div>
      
    </section>
  )
}

export default Testitominals
