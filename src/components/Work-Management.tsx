import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react'

const WorkManagement = () => {
  return (
        <div className='flex flex-col lg:py-[140px] lg:px-[32px] 2xl:px-[220px] sm:py-[100px] sm:px-[20px] px-4 py-20 gap-[100px]'>
           <div className='relative text-[#212529] h-auto sm:text-center lg:text-left flex lg:flex-row lg:justify-between flex-col lg:items-start items-center gap-[60px] '>

            <div className='flex flex-col gap-[60px] lg:items-start items-center lg:w-[528px] xl:w-[657px]'>
                <div className="flex flex-col gap-6">
                <h1 className='font-bold xl:text-[72px] xl:leading-[87.14px] lg:text-[64px] lg:leading-[77.45px] sm:text-[54px]  text-[36px] sm:leading-[65.35px] leading-[43.57px] lg:text-start text-center'>
                    Project Management
                </h1>
                <p className='text-lg lg:text-start text-center'>
                Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.
            </p>
            </div>
            <button className='bg-[#4F9CF9] text-white flex items-center justify-center lg:w-[219px] lg:h-[63px] sm:w-[190px] sm:h-[59px] rounded-lg w-[201px] h-[70px]'>
                Get Started <ArrowRight />
            </button>
            </div>
            
                <Image
                src="/images/image1.png"
                alt='abstract blue'
                width={500}
                height={100}
                className='2xl:w-[748px] 2xl:h-[547px] xl:w-[719px] xl:h-[448px] lg:w-[528px] lg:h-[328px] sm:w-[561px] sm:h-[349px] w-[286px] h-[177px]'
                />
            </div>
            <div className='relative text-[#212529] h-auto text-center lg:text-start flex lg:flex-row flex-col-reverse lg:justify-between items-center gap-[60px]'>
            
                <Image
                src="/images/worktogether.png"
                alt='abstract blue'
                width={300}
                height={100}
                className='2xl:w-[748px] 2xl:h-[547px] xl:w-[583px] xl:h-[542px] lg:[w-528px] lg:h-[491px] md:w-[561px] md:h-[349px] sm:w-[454px] sm:h-[422px] w-[279px] h-[260px]'
                />

         <div className='flex flex-col gap-[60px] lg:items-start items-center lg:w-[528px]'>
                <div className="flex flex-col gap-6">
                <h1 className='font-bold xl:text-[72px] xl:leading-[87.14px] lg:text-[64px] lg:leading-[77.45px] sm:text-[54px] text-[36px] sm:leading-[65.35px] leading-[43.57px] lg:text-start text-center'>
                Work together
            </h1>
            <p className='text-lg lg:text-start text-center'>
                With whitepace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others.
            </p></div>
            <button className='bg-[#4F9CF9] text-white flex items-center justify-center lg:w-[186px] lg:h-[63px] sm:w-[190px] sm:h-[59px] w-[185px] h-[70px] rounded-lg'>
                Try it now <ArrowRight />
            </button>
            </div>
            </div>
        </div>
  )
}

export default WorkManagement;
