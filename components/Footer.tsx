import React from 'react'
import Logo from './atoms/Logo';
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineInstagram, AiOutlineTwitter,AiFillFacebook,
AiFillLinkedin } from 'react-icons/ai';

export const socialMedia = [
  {
    id: 'social-media-1',
    icon: () => <AiOutlineInstagram  className='text-gray-600 w-6 h-6'/>,
    link: 'https://www.instagram.com/',
  },
  {
    id: 'social-media-2',
    icon: () => <AiFillFacebook  className='text-gray-600 w-6 h-6'/>,
    link: 'https://www.facebook.com/',
  },
  {
    id: 'social-media-3',
    icon: () => <AiOutlineTwitter className='text-gray-600 w-6 h-6'/>,
    link: 'https://www.twitter.com/',
  },
  {
    id: 'social-media-4',
    icon: () => <AiFillLinkedin className='text-gray-600 w-6 h-6'/>,
    link: 'https://www.linkedin.com/',
  },
];
const Footer = () => {
  return (
    <footer className='relative z-10 border-t pt-8 py-2 w-full'>
        <div className='layout pt-10'>
            <div className='xl:grid xl:grid-cols-5 xl:gap-8'>
                <div className='space-y-8 xl:col-span-2'>
                  <div className='flex-start'>
                    <Logo  className=''/>
                  </div>

                    <p className="max-w-xs text-sm text-gray-500">
                        Maximize Your
                        Short-Term Rental
                        for Less
                    </p>

                </div>
            </div>
            <div className='flex justify-between flex-col gap-3 items-center md:flex-row mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24'>
              <div>
                <p className='text-xs md:text-sm leading-5 text-gray-500'>
                    Copyright Ⓒ 2023 PremierFloridaBNB. All Rights Reserved.
                </p>
              </div>
                <div className='flex items-center space-x-2'>
                        {socialMedia.map((el, i) => (
                            <>
                                <Link
                                    href={el.link}
                                    className='group rounded-md p-2 transition-colors hover:bg-gray-200 active:bg-gray-200'
                                >
                                    {el.icon()}
                                </Link>
                               {i !== socialMedia.length -1 && <div className='"h-8 border-l border-gray-200'/>}
                            </>
                        ))}
                    </div>

            </div>
        </div>
    </footer>
  )
}

export default Footer
