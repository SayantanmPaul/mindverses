'use client';
import { motion } from 'framer-motion';
import styles from '@/styles';
import { staggerContainer, fadeIn, planetVariants } from '@/Utils/motions';
import { TitleText, TypingText } from './CustomTexts';
import NewFeatures from './newFeatures';
import { newFeatures } from '@/constants';
import Image from 'next/image';

const WhatsNew = () => (
  <section className={`${styles.paddings} xs:mx-10 flex justify-between relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: 'false', amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col lg:flex-row items-center  `}
    >
      <div className="">
        <motion.div variants={fadeIn('left', 'tween', 0.2, 1)} className=" justify-center flex-col ">
          <TypingText title="| Whats new in it" />
          <TitleText title={<>How You Get Benifit From It</>} />
          <div className=" lg:mt-12 mt-6  flex lg:flex-row md:flex-row flex-col justify-between gap-6  ">
            {newFeatures.map((feature) => (
              <NewFeatures key={feature.title} {...feature} />
            ))}
          </div>
        </motion.div>
      </div>
      <motion.div variants={planetVariants('right')} className=" flex items-center md:mt-4 mt-8 lg:mt-10">
        <div className={`${styles.flexCenter}`}>
          <Image
            src="/whats-new.png"
            width={2000}
            height={2000}
            alt="whats new"
            className=" w-[85%] h-[85%] object-contain"
          />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
