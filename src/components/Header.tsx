import React from 'react';
import { ChevronDown, ArrowRight, Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className='text-white flex items-center bg-[#043873] p-[16px] sm:px-[32px] 2xl:px-[220px] justify-between'>
        <div className='flex items-center'>
            <svg className='cursor-pointer' width="37" height="30" viewBox="0 0 37 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_9_316)">
            <path d="M0 2.86525V9.6182C0 11.6749 2.50611 12.7719 4.03763 11.3322L11.3471 4.5792C12.9483 3.1052 11.904 0.5 9.71119 0.5H2.40169C1.07902 0.5 0 1.56265 0 2.86525Z" fill="white"/>
            <path d="M34.5983 0.5H27.2888C25.1308 0.5 24.0517 3.1052 25.6529 4.5792L32.9624 11.3322C34.4939 12.7376 37 11.6749 37 9.6182V2.86525C37 1.56265 35.921 0.5 34.5983 0.5Z" fill="white"/>
            <path d="M20.1533 16.9884L32.9624 28.8489C34.4939 30.2543 37 29.1917 37 27.1349V20.3134C37 19.6621 36.7215 19.0451 36.2342 18.5995L20.1533 3.68814C19.2135 2.83117 17.7865 2.83117 16.8467 3.68814L0.765757 18.5995C0.278457 19.0451 0 19.6621 0 20.3134V27.1349C0 29.1917 2.50611 30.2886 4.03763 28.8489L16.8467 16.9884C17.7865 16.1314 19.2135 16.1314 20.1533 16.9884Z" fill="white"/>
            </g>
            <defs>
            <clipPath id="clip0_9_316">
            <rect width="37" height="29" fill="white" transform="translate(0 0.5)"/>
            </clipPath>
            </defs>
            </svg>
            <h1 className='cursor-pointer font-bold ml-2 text-xl'>whitepace</h1>
        </div>
        <nav>
            <ul className='xl:flex gap-4 hidden'>
                <li className='flex items-center'>Products<ChevronDown size={20} className='mx-4' /></li>
                <li className='flex items-center'>Solutions<ChevronDown size={20} className='mx-4' /></li>
                <li className='flex items-center'>Resources<ChevronDown size={20} className='mx-4' /></li>
                <li className='flex items-center'>Pricing<ChevronDown size={20} className='mx-4' /></li>
            </ul>
        </nav>
        <div className='flex items-center justify-center gap-4'>
            <button className='font-semibold bg-[#FFE492] text-[#043873] rounded-lg w-[126px] h-[60px] hidden md:flex items-center justify-center'>
                Login
            </button>
            <button className='font-semibold bg-[#4F9CF9] text-white rounded-lg w-[227px] h-[60px] hidden md:flex items-center justify-center gap-2'>
                Try Whitepace free <ArrowRight />
            </button>
            <button className='2xl:hidden xl:hidden lg:flex md:flex sm:flex xs:flex'>
                <Menu size={50} />
            </button>
        </div>
    </header>
  )
}

export default Header
