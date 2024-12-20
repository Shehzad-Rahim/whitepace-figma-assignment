import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';


const Apps = () => {
  return (
    <div className='bg-[#043873] text-white h-auto py-20 text-center lg:text-left flex lg:flex-row flex-col items-center justify-center lg:gap-10 gap-12 bg-[url(/SVG/Element.svg)] bg-[10%_10%] bg-no-repeat bg-cover'
    >
        <div className="">
            <Image
            src="/images/Apps.png"
            alt='abstract blue'
            width={500}
            height={100}
            className='order-1 2xl:w-[582px] 2xl:h-[470.8px] xl:w-[582px] xl:h-[470.8px] lg:w-[528px] lg:h-[427.11px] md:w-[485px] md:h-[392.33px] sm:w-[286.5px] sm:h-[231.76px] w-[300px]'
            />
        </div>
        <div className='flex-col w-full max-w-lg flex items-center lg:items-start order-2 lg:gap-4 gap-8 px-4'>
            <h1 className='font-bold md:text-5xl text-4xl '>
                Work with Your Favorite Apps Using whitepace
            </h1>
            <p className=''>
                Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success.
            </p>
            <button className='bg-[#4F9CF9] text-white flex items-center justify-center lg:w-[219px] lg:h-[63px] sm:w-[232px] sm:h-[70px] w-[180px] h-[60px] rounded-lg'>
                Read more <ArrowRight />
            </button>
        </div>
    </div>
  )
}

export default Apps
