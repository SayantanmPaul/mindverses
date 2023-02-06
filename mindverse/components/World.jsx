'use client';
import { motion } from 'framer-motion';
import styles from '@/styles';
import { staggerContainer, fadeIn } from '@/Utils/motions';
import { TitleText, TypingText } from './CustomTexts';
import Image from 'next/image';

const World = () => (
  <section className={`${styles.paddings} xs:mx-10 flex justify-between relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: 'false', amount: 0.25 }}
      className={`${styles.flexCenter} mx-auto flex flex-col items-center  `}
    >
      <TypingText title="| Find your friends" textStyles="text-center" />
      <div className="max-w-[1000px]">
        <TitleText
          title={
            <>
              Invite your friends around the world{' '}
              <span className="lg:block md:block hidden"> and play togather in the same virtual reality </span>
            </>
          }
          textStyles="text-center"
        />
      </div>
      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className=" lg:mt-16 relative flex w-full lg:h-[500px] md:h-[450px] h-[300px]  "
      >
        <Image src="/map.png" width={2000} height={2000} alt="world-map" className="w-full h-full object-contain" />

        <div className=" absolute lg:bottom-[140px] md:bottom-[160px] bottom-[110px] lg:right-20 md:right-16 right-[22px] lg:w-16 lg:h-16 md:w-12 md:h-12  w-8 h-8 rounded-full lg:p-[5px] p-1   glassmorphism  ">
          <Image
            src="/people-01.png"
            width={120}
            height={120}
            alt="avatar01"
            className="w-full h-full rounded-full shadow-xl shadow-indigo-500/50 "
          />
        </div>
        <div className=" absolute lg:bottom-[280px] md:bottom-[240px] lg:right-[360px] md:right-[205px] bottom-[160px] right-[30%] lg:w-16 lg:h-16 md:w-12 md:h-12 w-8 h-8 rounded-full lg:p-[5px] p-1 glassmorphism ">
          <Image
            src="/people-02.png"
            width={120}
            height={120}
            alt="avatar01"
            className="w-full h-full rounded-full shadow-xl shadow-indigo-500/50 "
          />
        </div>
        <div className=" absolute lg:bottom-[350px] md:bottom-[270px] lg:right-[900px] md:right-[81%] right-[76%] bottom-[57%] lg:w-16 lg:h-16 md:w-12 md:h-12  w-8 h-8 rounded-full lg:p-[5px] glassmorphism p-1 ">
          <Image
            src="/people-03.png"
            width={120}
            height={120}
            alt="avatar01"
            className="w-full h-full rounded-full shadow-xl shadow-indigo-500/50 "
          />
        </div>
        <div className=" absolute lg:bottom-[360px] md:bottom-[280px] bottom-[180px] lg:right-[230px] md:right-32 right-[70px] lg:w-16 lg:h-16 md:w-12 md:h-12  w-8 h-8 rounded-full lg:p-[5px] p-1   glassmorphism  ">
          <Image
            src="/people-05.jpg"
            width={120}
            height={120}
            alt="avatar01"
            className="w-full h-full rounded-full shadow-xl shadow-indigo-500/50 "
          />
        </div>
        <div className=" absolute lg:bottom-[190px] md:bottom-[180px] bottom-[120px] lg:right-[850px] md:right-[470px] right-[260px] lg:w-16 lg:h-16 md:w-12 md:h-12  w-8 h-8 rounded-full lg:p-[5px] p-1   glassmorphism  ">
          <Image
            src="/people-06.jpg"
            width={120}
            height={120}
            alt="avatar01"
            className="w-full h-full rounded-full shadow-xl shadow-indigo-500/50 "
          />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
