import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Required CSS
import { Carousel } from 'react-responsive-carousel';

import model1 from '../assets/model1.png';
import model2 from '../assets/model2.png';
import model3 from '../assets/model3.png';
import model4 from '../assets/model4.png';


const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400 mt-2 rounded-l shadow-md'>
      {/* Hero left */}
      <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0 px-4'>
        <div className='text-[#414141]'>
          <div className='flex items-center gap-2'>
            <p className='w-8 h-[2px] bg-[#414141]'></p>
            <p className='font-medium text-sm md:text-base'>OUR BESTSELLERS</p>
          </div>
          <h1 className='prata-regular text-3xl lg:text-5xl leading-relaxed mt-3'>Latest Arrivals</h1>
          <div className='flex items-center gap-2 mt-5'>
            <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
            <p className='w-8 h-[2px] bg-[#414141]'></p>
          </div>
        </div>
      </div>

      {/* Hero right with Carousel */}
      <div className='w-full sm:w-1/2 flex items-center justify-center p-4 '>
        <Carousel
          autoPlay
          infiniteLoop
          interval={2000}
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
        >
          <div>
            <img src={model1} alt='Slide 1' className='object-contain max-h-[400px]' />
          </div>
          <div>
            <img src={model2} alt='Slide 2' className='object-contain max-h-[400px]' />
          </div>
          <div>
            <img src={model3} alt='Slide 3' className='object-contain max-h-[400px]' />
          </div>
          <div>
            <img src={model4} alt='Slide 3' className='object-contain max-h-[400px]' />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Hero;
