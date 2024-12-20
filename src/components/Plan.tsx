import { CircleCheckBig } from 'lucide-react';

const Plan = () => {
  return (
    <div className='flex flex-col bg-white sm:py-[140px] text-[#212529] text-center items-center justify-center px-5 '>
      <div className="flex flex-col justify-center items-center gap-6 mb-20">
      <h1 className='font-bold xl:text-[72px] xl:leading-[87.14px] lg:text-[64px] lg:leading-[77.45px] sm:text-[54px] text-[40px] sm:leading-[65.35px] leading-[43.57px] text-center'>
        Choose Your Plan   
      </h1>
      <p className='text-lg text-center'>
      Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the right plan for you.
      </p>

      </div>
      <div className='flex lg:flex-row flex-col gap-4 lg:px-10 px-2 sm:mb-0 mb-10'>
        {/* First plan */}
        <div className='flex border border-[#FFE492] flex-col 2xl:w-[472.33px] xl:w-[400] lg:w-[341.33px] md:w-[472.33px] sm:w-[400px] w-[320px] text-start bg-white py-8 px-6 rounded-lg hover:bg-[#043873] hover:text-[white] transition-all hover:scale-y-[1.15]'>
            <h2 className='lg:text-2xl text-xl mb-4 font-semibold'>
                Free
            </h2>
            <h3 className='text-3xl mb-4 font-bold'>
                <strong>$0</strong>
            </h3>
            <p className='mb-6 font-semibold'>
                Capture ideas and find them quickly
            </p>
            <ul className='flex flex-col lg:gap-9 gap-6'>
                <li className='flex gap-2'><CircleCheckBig />10 GB monthly uploads</li>
                <li className='flex gap-2'><CircleCheckBig />Sync unlimited devices</li>
                <li className='flex gap-2'><CircleCheckBig />200 MB max. note size</li>
                <li className='flex gap-2'><CircleCheckBig />Customize Home dashboard and<br /> access extra widgets</li>
                <li className='flex gap-2'><CircleCheckBig />Connect primary Google Calendar<br /> account</li>
                <li className='flex gap-2'><CircleCheckBig />Add due dates, reminders, and<br /> notifications to your tasks</li>
            </ul>
                <button className='w-[166px] mt-[25px] h-[61px] border border-[#FFE492] rounded-lg'>
                Get Started
                </button>
        </div>
        {/* Second */}
        <div className='flex border flex-col 2xl:w-[472.33px] xl:w-[400px] lg:w-[341.33px] md:w-[472.33px] sm:w-[400px] w-[320px] text-start hover:bg-[#043873] hover:text-[white] transition-all hover:scale-y-[1.15] py-8 px-6 rounded-lg bg-white text-black border-[#FFE492]'>
            <h2 className='lg:text-2xl text-xl font-semibold'>
                    Personal
                </h2>
                <h3 className='text-3xl mb-4 font-bold text-[#FFE492]'>
                    <strong>$11.99</strong>
                </h3>
                <p className='mb-6 font-semibold'>
                    Keep home and family on track
                </p>
                <ul className='flex flex-col lg:gap-9 gap-6'>
                <li className='flex gap-2'><CircleCheckBig className='text-[#FFE492]' />Sync unlimited devices</li>
                <li className='flex gap-2'><CircleCheckBig className='text-[#FFE492]' />10 GB monthly uploads</li>
                <li className='flex gap-2'><CircleCheckBig className='text-[#FFE492]' />200 MB max. note size</li>
                <li className='flex gap-2'><CircleCheckBig className='text-[#FFE492]' />Customize Home dashboard and<br /> access extra widgets</li>
                <li className='flex gap-2'><CircleCheckBig className='text-[#FFE492]' />Connect primary Google Calendar<br /> account</li>
                <li className='flex gap-2'><CircleCheckBig className='text-[#FFE492]' />Add due dates, reminders, and<br /> notifications to your tasks</li>
                </ul>
                <button className='w-[166px] h-[61px] mt-[25px] text-white bg-[#4F9CF9] rounded-lg'>
                    Get Started
                </button>
        </div>
        {/* Third */}
        <div className='flex border border-[#FFE492] flex-col 2xl:w-[472.33px] xl:w-[400px] lg:w-[341.33px] md:w-[472.33px] sm:w-[400px] w-[320px] text-start bg-white py-8 px-6 rounded-lg hover:bg-[#043873] hover:text-[white] transition-all hover:scale-y-[1.15]'>
            <h2 className='lg:text-2xl text-xl mb-4 font-semibold'>
                    Organization
                </h2>
                <h3 className='text-3xl mb-4 font-bold'>
                    <strong>$49.99</strong>
                </h3>
                <p className='mb-6 font-semibold'>
                    Capture ideas and find them quickly
                </p> 
                <ul className='flex flex-col lg:gap-9 gap-6'>
                <li className='flex gap-2'><CircleCheckBig />Sync unlimited devices</li>
                <li className='flex gap-2'><CircleCheckBig />10 GB monthly uploads</li>
                <li className='flex gap-2'><CircleCheckBig />200 MB max. note size</li>
                <li className='flex gap-2'><CircleCheckBig />Customize Home dashboard and<br /> access extra widgets</li>
                <li className='flex gap-2'><CircleCheckBig />Connect primary Google Calendar<br /> account</li>
                <li className='flex gap-2'><CircleCheckBig />Add due dates, reminders, and<br /> notifications to your tasks</li>
                </ul>
                <button className='mt-[25px] w-[166px] h-[61px] border border-[#FFE492] rounded-lg'>
                    Get Started
                </button>
        </div>
      </div>
    </div>
  )
}

export default Plan
