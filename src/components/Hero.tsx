import React from 'react';
import Image from 'next/image';
import { ArrowRight } from "lucide-react"

const Hero = () => {
  return (
    <div className='bg-[#043873] text-white h-auto 2xl:py-[140px] 2xl:px-[220px] xl:py-[100px] lg:py-[140px] lg:px-[32px] md:pt-[140px] md:pb-[100px] sm:px-5 py-20 px-4 flex lg:flex-row flex-col items-center md:gap-5 gap-[100px] bg-[url(/SVG/Element.svg)] bg-cover bg-[10%_100%]'
    >
        <div className='flex flex-col gap-[60px] 2xl:w-[656px] xl:w-[691px] lg-[562px] 2xl:h-[361px] items-center lg:items-start'>
            <div className=" flex flex-col gap-6">
            <h1 className='font-bold lg:text-[64px] lg:leading-[77.45px] sm:text-[54px] sm:leading-[65.35px] text-4xl lg:text-start text-center'>
                Get More Done with whitepace
            </h1>
            <p className='text-lg lg:text-start text-center'>
                Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks
            </p>
            </div>
            <button className='bg-[#4F9CF9] flex items-center justify-center md:w-[219px] md:h-[63px] w-[232px] h-[70px] rounded-lg'>
                Try Whitepace free <ArrowRight />
            </button>
        </div>
        <div>
            <Image
            src="/images/image1.png"
            alt='abstract blue'
            width={500}
            height={100}
            className='2xl:w-[824px] 2xl:h-[549px] xl:w-[685px] xl:h-[456.39px] lg:w-[526px] lg:h-[350.45px] sm:w-[551px] sm:h-[367px] w-[286px] h-[191px]'
            />
        </div>
    </div>
  );
}

export default Hero
