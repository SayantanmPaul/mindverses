'use client';
import { motion } from 'framer-motion';
import styles from '@/styles';
import { fadeIn } from '@/Utils/motions';
import Image from 'next/image';

const ExploreCard = ({ id, imgUrl, title, index, active, handleClick }) => (
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className={` relative ${
      active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
    } flex items-center justify-center min-w-[170px] h-[563px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
    onClick={() => handleClick(id)}
  >
    <Image
      src={imgUrl}
      alt={title}
      width={2560}
      height={1440}
      className="absolute w-full h-full object-cover rounded-3xl "
    />
    {active !== id ? (
      <h3 className="text-white font-semibold sm:text-[26px] text-[18px] lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0] absolute ">
        {title}
      </h3>
    ) : (
      <div className=" absolute bottom-0 flex justify-start w-full p-8 flex-col bg-transparent rounded-b-2xl ">
        <div
          className={`${styles.flexCenter} lg:w-[60px] lg:h-[60px] w-[40px] h-[40px] lg:rounded-3xl rounded-2xl glassmorphism `}
        >
          <Image src="/headset.svg" width={10} height={10} alt="headset" className="w-1/3 h-1/3 object-contain " />
        </div>
        <p className="flex-normal lg:text-[18px] text-[10px] tracking-wide text-white uppercase lg:pt-4 pt-2">
          Click now to enter
        </p>
        <h2 className=" font-semibold sm:text-[32px] text-[24px] text-white">{title}</h2>
      </div>
    )}
  </motion.div>
);
export default ExploreCard;
