import Image from 'next/image';
import React from 'react';

const ChooseMe = () => {
  return (
    <main className='w-full bg-[#FAFAFA]'>
      <div className='flex flex-col gap-6 px-4 md:px-8 py-6 md:py-10 mx-auto max-w-6xl md:flex-row'>
        <div className='w-full md:w-40%'>
          <Image src={'/chooseImg.png'} alt='d' width={432} height={437} />
        </div>
        <div className='w-full md:w-60%'>
          <h1 className='chooseh2 text-3xl md:text-4xl font-bold'>Why Choose Us</h1>
          <p className='text-base md:text-lg leading-7 font-500'>
            Welcome to SafeSpark, Glasgow&rsquo;s premier choice for Portable Appliance Testing. Our story is woven into the fabric of this vibrant city, where we&rsquo;ve been dedicated to enhancing safety standards for electrical appliances. As proud members of the Glasgow community, we&rsquo;re committed to delivering reliable, professional PAT testing services that safeguard homes and businesses. Continue to learn more about our team, our values, and our journey to ensuring a safer Glasgow, one appliance at a time.
          </p>
        </div>
      </div>
    </main>
  );
}

export default ChooseMe;
