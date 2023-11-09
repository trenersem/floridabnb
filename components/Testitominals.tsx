'use client'
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

const Testitominals = () => {
    const [propertyReviews, setPropertyReviews] = useState();
    // React.useEffect(() => {

    //     const getData = async () => {
    //         try {
    //             const response = await fetch(url, options);
    //             if (!response.ok) {
    //                 throw new Error(`HTTP error! Status: ${response.status}`);
    //         }

    //         const data = await response.json();
    //         setPropertyReviews(data);
    //         console.log(data);

    //         } catch (error) {
    //           console.error(error);
    //         }
    //     }
    //     getData()
    // }, [])
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

        <div className='hidden space-y-6 py-8 sm:block sm:columns-2 sm:gap-6 lg:columns-3'>
            {/* {propertyReviews && propertyReviews.map((el: any) => (
                <div className='relative lg:top-12'>
                    <div className='not-prose break-inside-avoid rounded-lg border border-gray-300 bg-white/20 bg-clip-padding p-6 pb-4 backdrop-blur-lg backdrop-filter relative lg:top-12'>
                        <div>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center space-x-2'>
                                    <img className='h-10 w-10 overflow-hidden border border-gray-200 transition-all ease-in-out hover:scale-105 rounded-md blur-0'/>
                                </div>
                            </div>
                            <div className="mb-2 mt-4 truncate whitespace-pre-wrap text-[15px] text-gray-700">
                                <a className='font-normal text-[rgb(29,161,242)] no-underline'>

                                </a>
                                <p>

                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            ))} */}
        </div>
      
    </section>
  )
}

export default Testitominals
