import React from 'react';
import Typewriter from '../Components/Typewriter';
import Button from './Button';
import { assets } from '../assets/asstes';

const Hero = () => {
  return (
    <div
      id="home"
      className="min-h-screen flex items-center pt-20 max-md:pt-32"
    >
      <div className="page-width w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-8">
              <span className="text-[#fafafa]">
                Hi I'm Syed Ali Asghar Kazmi And
              </span>

              <br />

              <Typewriter
                prefix="I am "
                text={[
                  'Shopify Developer',
                  'WordPress Developer',
                  'React JS Developer',
                  'Frontend Developer',
                  'JS Developer',
                ]}
              />
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-[#fafafa] mb-8 max-w-2xl mx-auto lg:mx-0">
              I craft immersive web experiences at the intersection of design
              and technology.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button text={'View My Work'} href={'#work'} />
              <Button text={'Contact Me'} href={'#contact'} />
            </div>
          </div>

          {/* Image */}
          {/* Image Section */}
          {/* Image Section */}
          <div className="flex justify-center">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-[430px] md:h-[430px] floating">
              {/* Background Border Effect */}
              <div className="absolute top-5 left-5 w-full h-full border-2 border-red-900 rounded-3xl z-0"></div>

              {/* Main Image */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden z-10">
                <img
                  className="w-full h-full object-cover"
                  src={assets.profileImg}
                  alt="Profile"
                />
              </div>

              {/* Experience Card */}
              <div className="absolute -bottom-6 -right-6 bg-[#111] border border-red-900 rounded-2xl px-6 py-5 z-20 shadow-2xl backdrop-blur-md">
                <div className="text-center">
                  <h2 className="text-4xl font-bold text-red-600">1.5+</h2>

                  <p className="text-sm text-gray-300 tracking-widest uppercase">
                    Years Experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
