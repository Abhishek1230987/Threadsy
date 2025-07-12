import React from 'react'
import Title from '../components/Title'
import about_us from '../assets/about_us.png'
import NewsletterBox from '../components/NewsletterBox'


const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT '} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col items-center gap-16 md:flex-row'>
        <img src={about_us} alt='about_us' className='w-full md:max-w-[450px] sm:w-96 rounded-lg shadow-lg' />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600 ml-20'>
          <p >At Threadsy, fashion meets purpose. We’re a contemporary clothing brand committed to empowering individuals through style, comfort, and self-expression. Every collection is designed with thoughtful detail, merging timeless silhouettes with modern trends to offer pieces that feel as good as they look. From daily essentials to standout pieces, our goal is to make quality fashion accessible without compromising on craftsmanship or sustainability.</p>
          <p>Founded with a passion for design and community, our journey started with a simple belief — that everyone deserves to feel confident in what they wear. We source responsibly, prioritize ethical production, and continuously innovate to reduce our environmental footprint. Whether you're shopping for a casual weekend look or building a bold wardrobe, we’re here to help you define your style, your way.</p>
          <b className='text-gray-600 text-xl'>Our Mission</b>
          <p>Our mission is to create a positive impact on the fashion industry by promoting sustainability, inclusivity, and self-expression. We believe in the power of fashion as a force for good, and we’re committed to making a difference — one garment at a time.</p>
        </div>
      </div>

      <div className='text-2xl'>
        <Title text1={'WHY '} text2={'CHOOSE US'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border-t-4 border-b-4 border-l-4 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5' style={{ borderColor: '#cccac2' }} >
          <b className='text-gray-600'>Quality Assurance:</b>
          <p className='text-gray-600'>We prioritize quality in every piece we create, ensuring that our clothing is not only stylish but also durable and comfortable.</p>
        </div>
        <div className='border-4 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5' style={{ borderColor: '#cccac2' }} >
          <b className='text-gray-600'>Convenience:</b>
          <p className='text-gray-600 '>We understand the importance of convenience in your shopping experience. Our user-friendly website and streamlined checkout process make it easy to find and purchase your favorite pieces.</p>
        </div>
        <div className='border-t-4 border-b-4 border-r-4 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5' style={{ borderColor: '#cccac2' }} >
          <b className='text-gray-600'>Exceptional Service:</b>
          <p className='text-gray-600 '>We are committed to providing exceptional customer service. Our team is always ready to assist you with any inquiries or concerns, ensuring a smooth and enjoyable shopping experience.</p>
        </div>
      </div>
      9oUHopVti5LkANeB

      <NewsletterBox/>

    </div>
  )
}

export default About