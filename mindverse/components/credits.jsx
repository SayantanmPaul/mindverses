'use client';
import { motion } from 'framer-motion';
import styles from '@/styles';
import { footerVariants } from '@/Utils/motions';
import Image from 'next/image';

const Credit = () => (
  <motion.div
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className={`${styles.paddings} py-8 relative`}
  >
    <div className="">
      <div className={`${styles.innerWidth} flex flex-col mx-auto gap-8`}>
        <div className=" flex items-center justify-between lg:flex-row flex-col gap-5">
          <h4 className="font-bold md:text-5xl text-4xl text-white">Join The Forces</h4>
          <a
            href="#_"
            class="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-3xl"
          >
            <span class="  w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
            <span class=" relative flex flex-row items-center px-6 py-3 transition-all ease-out bg-gray-900 rounded-3xl group-hover:bg-opacity-0 duration-400 gap-3">
              <Image src="/headset.svg" width={20} height={20} alt="logo" />
              <span class="relative text-white uppercase">Join The Coummunity</span>
            </span>
          </a>
        </div>
        <div className="flex flex-col">
          <div className=" mb-12 h-[2px] bg-white opacity-10 " />
          <div className="flex items-center justify-between lg:flex-row md:flex-col flex-wrap gap-4">
            <h4 className="font-extrabold lg:text-xl md:text-xl text-lg text-white uppercase">Mindverses</h4>
            <p className="font-normal lg:text-xs md:text-xs text-[10px] text-white opacity-40 ">
              {' '}
              Copyright © 2023 MindVerses. Crafted by Sayantan Paul with NextJs 13{' '}
            </p>
            <div className="flex gap-4">
              <a href="#">
                <Image
                  src="/twitter.svg"
                  width={6}
                  height={6}
                  alt="twitter soicals"
                  className="object contain lg:w-6 lg:h-6 md:w-6 md:h-6 w-4 h-4 cursor-pointer"
                />
              </a>
              <a href="#">
                <Image
                  src="/linkedin.svg"
                  width={6}
                  height={6}
                  alt="twitter soicals"
                  className="object contain lg:w-6 lg:h-6 md:w-6 md:h-6 w-4 h-4 cursor-pointer"
                />
              </a>
              <a href="#">
                <Image
                  src="/instagram.svg"
                  width={6}
                  height={6}
                  alt="twitter soicals"
                  className="object contain lg:w-6 lg:h-6 md:w-6 md:h-6 w-4 h-4 cursor-pointer"
                />
              </a>
              <a href="#">
                <Image
                  src="/facebook.svg"
                  width={6}
                  height={6}
                  alt="twitter soicals"
                  className="object contain lg:w-6 lg:h-6 md:w-6 md:h-6 w-4 h-4 cursor-pointer"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

export default Credit;
