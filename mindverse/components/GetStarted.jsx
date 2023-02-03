'use client';
import { motion } from 'framer-motion';
import styles from '@/styles';
import { staggerContainer, fadeIn, planetVariants } from '@/Utils/motions';
import { TitleText, TypingText } from './CustomTexts';
import StartSteps from './StartSteps';
import { startingFeatures } from '@/constants';

const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: 'false', amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col lg:flex-row items-center  `}
    >
      <motion.div variants={planetVariants('left')} className=" flex items-center">
        <div className={`${styles.flexCenter}  `}>
          <img src="/get-started.png" alt="get-started" className=" w-[85%] h-[85%] object-contain" />
        </div>
      </motion.div>
      <div className="lg:mr-16">
        <motion.div variants={fadeIn('left', 'tween', 0.3, 1)} className=" justify-center flex-col mb-8 md:pt">
          <TypingText title="| How Does it Works" />
          <TitleText title={<>Get Started with just few steps ahead</>} />
          <div className="  flex flex-col lg:max-w-[370px] md:max-w-[500px] max-w-[370px] gap-6 pt-4 ">
            {startingFeatures.map((feature, index) => (
              <StartSteps key={feature} number={index + 1} text={feature} />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  </section>
);

export default GetStarted;
