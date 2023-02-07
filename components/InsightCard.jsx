'use client';
import { motion } from 'framer-motion';
import { fadeIn } from '@/Utils/motions';
import Image from 'next/image';

const InsightCard = ({ imgUrl, title, subtitle, index }) => (
  <motion.div variant={fadeIn('up', 'spring', index * 0.5, 1)} className="flex md:flex-row flex-col gap-4">
    <Image
      src={imgUrl}
      width={2000}
      height={2200}
      alt="planets"
      className="md:w-[270px] w-full h-[256px] rounded-2xl object-cover"
    />
    <div className="w-full items-center flex justify-between gap-4">
      <div className="flex-1 md:ml-16 flex flex-col max-w-2xl">
        <h4 className="  font-semibold lg:text-4xl text-lg text-white">{title}</h4>
        <p className=" mt-4 font-normal lg:text-base text-[14px] text-slate-300">{subtitle}</p>
        <div className="lg:hidden flex flex-col items-start pt-6">
          <a
            href="#_"
            class="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md"
          >
            <span class="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
            <span class="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
              <span class="relative text-white">Read More</span>
            </span>
          </a>
        </div>
      </div>

      <div className="lg:flex hidden items-center justify-center w-20 h-20 rounded-full bg-transparent border-[1px] border-white  cursor-pointer">
        <Image src="/arrow.svg" width={20} height={20} alt="arrow-up" className="w-[30%] h-[30%] object-contain " />
      </div>
    </div>
  </motion.div>
);

export default InsightCard;
