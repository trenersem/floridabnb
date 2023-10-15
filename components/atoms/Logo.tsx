import Link from 'next/link'
import { GiPalmTree } from 'react-icons/gi';

const Logo = (
    {className} : {className?:string}) => {
  return (
   <Link href='/' className={`flex flex-center gap-2 ${className}`}>
        <GiPalmTree className='w-[2.5em] h-[2.5em]'/>
        <p className='logo_text relative right-4 top-2'>
            <span className='orange_gradient'>
                    PremierFloridaBNB
            </span>
            <span className='text-[8px] text-blue-400 absolute  top-3 left-0'>
                Working harder for you
            </span>
        </p>
    </Link>
  )
}

export default Logo
