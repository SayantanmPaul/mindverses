'use client';
import { motion } from 'framer-motion';
import { socials } from '@/constants';
import styles from '@/styles';
import { footerVariants } from '@/Utils/motions';

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
              <img src="/headset.svg" alt="logo" />
              <span class="relative text-white uppercase">Join The Coummunity</span>
            </span>
          </a>
        </div>
        <div className="flex flex-col">
          <div className=" mb-12 h-[2px] bg-white opacity-10 " />
          <div className="flex items-center justify-between flex-wrap gap-4">
            <h4 className="font-extrabold text-xl text-white uppercase">Mindverses</h4>
            <p className="font-normal text-xs text-white opacity-40 ">
              {' '}
              Copyright © 2023 MindVerses. Crafted by Sayantan Paul with NextJs 13{' '}
            </p>
            <div className="flex gap-4">
              <a href="#">
                <img src="/twitter.svg" alt="twitter soicals" className="object contain w-6 h-6 cursor-pointer" />
              </a>
              <a href="#">
                <img src="/linkedin.svg" alt="twitter soicals" className="object contain w-6 h-6 cursor-pointer" />
              </a>
              <a href="#">
                <img src="/instagram.svg" alt="twitter soicals" className="object contain w-6 h-6 cursor-pointer" />
              </a>
              <a href="#">
                <img src="/facebook.svg" alt="twitter soicals" className="object contain w-6 h-6 cursor-pointer" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

export default Credit;
