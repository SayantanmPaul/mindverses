'use client';

import styles from '@/styles';
import { TypingText } from '@/components/CustomTexts';
import { slideIn, staggerContainer, fadeIn } from '@/Utils/motions';
import { motion, sync } from 'framer-motion';

const About = () => (
  <section className="sm:p-16 xs:p-8 px-6 py-12 relative z-10">
    <div className="gradient-02 z-0" />

    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Mindverses" textStyles="text-center" />
      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="font-normal  md:text-[32px] text-[20px] lg:text-[38px] lg:text-center text-justify tracking-normal text-slate-200 mt-10 lg:mt-16"
      >
        <span className="font-extrabold text-white">Mindverses </span>
        represents the infinite reality of the future, where users can expreience the virtual world by fealing like its
        real as like normally in Metaverse world, but the main
        <span className="font-extrabold text-white"> key feature </span>
        thats makes it so special is the user can be able to manipulate all the functions of the world as they like .
        The future is full of surprises, using the
        <span className="font-extrabold text-white"> VR </span>
        devices you can easily explore the virtual world, turn your dreams into reality.
        <span className="font-extrabold text-white"> Let's explore </span>
        the Mindverses by scrolling down.
      </motion.p>

      <motion.button variants={fadeIn('up', 'tween', 0.3, 1)}>
        <svg
          width="19"
          height="29"
          viewBox="0 0 19 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[14px] h-[28px] object-contain mt-7  "
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.99931 0C10.2645 0 10.5189 0.105357 10.7064 0.292893C10.894 0.48043 10.9993 0.734784 10.9993 1V24.586L17.2913 18.292C17.4791 18.1042 17.7338 17.9987 17.9993 17.9987C18.2649 17.9987 18.5195 18.1042 18.7073 18.292C18.8951 18.4798 19.0006 18.7344 19.0006 19C19.0006 19.2656 18.8951 19.5202 18.7073 19.708L10.7073 27.708C10.6144 27.8011 10.5041 27.875 10.3826 27.9254C10.2611 27.9758 10.1308 28.0018 9.99931 28.0018C9.86777 28.0018 9.73753 27.9758 9.61604 27.9254C9.49455 27.875 9.3842 27.8011 9.29131 27.708L1.29131 19.708C1.10354 19.5202 0.998047 19.2656 0.998047 19C0.998047 18.7344 1.10354 18.4798 1.29131 18.292C1.47908 18.1042 1.73376 17.9987 1.99931 17.9987C2.26486 17.9987 2.51954 18.1042 2.70731 18.292L8.99931 24.586V1C8.99931 0.734784 9.10467 0.48043 9.2922 0.292893C9.47974 0.105357 9.73409 0 9.99931 0Z"
            fill="white"
          />
        </svg>
      </motion.button>
    </motion.div>
  </section>
);

export default About;
