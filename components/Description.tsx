'use client'
import React from 'react'
export const description = [
    {
        id: 1,
        title: '10% Industry-Low Property Management Fee',
        text: 'Many property managers charge 30-50% and include ancillary fees for additional services. With Evolve, you only pay an industry-low 10% fee. Plus, with our commission-based model, we only make money when you do. ',
        img: 'd-1.jpeg',
    },
    {
        id: 2,
        title: 'The Most Flexible Solution in the Industry',
        text: 'Traditional property managers lock homeowners into restrictive long-term contracts. Evolve never requires long-term commitments. You’re allowed to stay when you want. And you’ll have the flexibility to choose your own housekeeping team. ',
        img:'d-2.jpeg',
    },
    {
        id: 3,
        title: 'Earn the Most Money for Every Booking',
        text: 'Most property managers don’t have time to monitor the market to ensure competitive pricing. Evolve’s SmartRates algorithm analyzes billions of data points, ensuring that your property is always priced to outperform the competition. Our owners consistently earn more money year-over-year. ',
        img: 'd-3.jpeg',
    },
    {
        id: 4,
        title: 'Be Seen By Millions and Book More Nights',
        text: 'Evolve focuses on a national strategy, unlike traditional property managers who rely on local publications and typically a single listing site. We provide professional photography, expertly written listings, ensure that your property is promoted on all the top booking sites, and appears at the top of search results. ',
        img: 'd-4.jpeg',
    },
]

interface IAboutItemProps {
    i: number,
    title: string,
    text: string,
    img: string,
}

const AboutItem = ({title, text, img, i}: IAboutItemProps) => {
     
    return (
        <div className={`flex w-full justify-around items-center  gap-7 md:gap-14 flex-col-reverse md:${i % 2 === 0 ? 'flex-row-reverse' : 'flex-row'} mb-8 md:mb-10`}>
            <div className='max-w-[370px] max-h-[290px] w-full h-full'>
                <img
                    src={`/assets/images/${img}`}
                    alt='about us img'
                    className='min-w-full min-h-full rounded-lg'
                />
            </div>
            <div className='max-w-[480px]'>
                <p className='font-semibold uppercase text-gray-500 md:text-lg pb-5 text-center md:text-start'>
                    {title}
                </p>
                <p className='text-sm text-center flex-1 md:text-start'>
                    {text}
                </p>
            </div>

        </div>
    )
}
const Description = () => {
  return (
    <div className='layout mt-10'>
         {description.map((item,i) => (
            <AboutItem
                key={item.id}
                title={item.title}
                text={item.text}
                img={item.img}
                i={i}
            />
        ))}
    </div>
  )
}

export default Description
