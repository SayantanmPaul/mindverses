'use client';

import styles from '@/styles';
import Cover from '../public/cover.png';
import Scroldown from '../public/stamp.png';
import Image from 'next/image';
import { slideIn, staggerContainer, textVariant } from '@/Utils/motions';
import { motion, sync } from 'framer-motion';

const Hero = () => (
  <section className="sm:py-16 xs:py-8 py-12  sm:pl-16 pl-6">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="2xl:max-w-[1280px] w-full mx-auto flex flex-col"
    >
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.h1
          variants={textVariant(1.1)}
          className="font-bold lg:text-[144px] md:text-[100px] sm:text-[60px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase text-white"
        >
          Mindverses
        </motion.h1>
        <motion.div variants={textVariant(1.2)} className="flex flex-row justify-center items-center">
          <h1 className="font-bold lg:text-[144px] md:text-[100px] sm:text-[60px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase text-white">
            Ma
          </h1>
          <div className="md:w-[212px] sm:w-[80px] w-[60px] md:h-[108px] sm:h-[48px] h-[38px] md:border-[18px] border-[9px] rounded-r-[50px] border-white sm:mx-2 mx-[6px] lg:mt-2" />
          <h1 className="font-bold lg:text-[144px] md:text-[100px] sm:text-[60px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase text-white">
            Ness
          </h1>
        </motion.div>
      </div>

      <motion.div variants={slideIn('right', 'tween', 0.2, 1)} className="relative w-full md:-mt-[20px] -mt-[12px]">
        <div className="absolute  w-full h-[300px]  rounded-top-[140px] z-[0] -top-[30px] " />
        <Image
          src={Cover}
          width={1080}
          height={1920}
          className=" w-full sm:h-[500px] h-[360px] object-cover rounded-tl-[100px] lg:rounded-tl-[140px] rounded-bl-3xl z-10 relative -mt-8 shadow-[0_35px_100px_-15px_rgba(0,0,0,0.3)]"
        />
        <a href="#explore">
          <div className=" flex justify-end w-full sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
            <Image
              src={Scroldown}
              width={10000}
              height={10000}
              className="sm:w-[160px] w-[100px] sm:h-[160px] h-[100px] object-contain"
            />
          </div>
        </a>
      </motion.div>
    </motion.div>
  </section>
);
export default Hero;
