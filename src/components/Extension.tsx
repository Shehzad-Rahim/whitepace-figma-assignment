import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const Extension = () => {
  return (
    <div className='bg-[#043873] text-white py-20 px-4 flex lg:flex-row flex-col lg:gap-[98px] gap-[60px]  items-center lg:py-[140px] sm:px-[32px] sm:py-[100px] '>
        <div className='flex flex-col lg:justify-center items-center lg:items-start xl:w-[600px] lg:w-[548px] gap-[60px]'>
        <div className="flex flex-col gap-6">
        <h1 className='font-bold xl:text-[72px] xl:leading-[87.14px] lg:text-[64px] lg:leading-[77.45px] sm:text-[54px] text-[40px] sm:leading-[65.35px] leading-[43.57px] lg:text-start text-center'>
                Use as Extension
            </h1>
            <p className='sm:block hidden text-lg lg:text-start text-center'>
                Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.
            </p>
            <p className='sm:hidden block text-lg text-center'>
                Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the extension API.
            </p>
            </div>
            <button className='bg-[#4F9CF9] flex items-center justify-center gap-2 lg:w-[176px] lg:h-[63px] sm:w-[164px] sm:h-[59px] w-[170px] h-[70px] rounded-lg'>
                Let&apos;s Go <ArrowRight />
            </button>
        </div>
        <div>
            <Image
            src="/images/image1.png"
            alt='abstract blue'
            width={100}
            height={100}
            className=' xl:w-[686px] xl:h-[479px] lg:w-[459px] lg:h-[320.5px] md:w-[557px] md:h-[388.93px] sm:w-[557px] sm:h-[388.93px] w-[284px] h-[195px]'
            />
        </div>
    </div>
  )
}

export default Extension
