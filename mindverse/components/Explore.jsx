'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { TypingText, TitleText } from '../components/CustomTexts';
import ExploreCard from './ExploreCard';
import { exploreWorlds } from '@/constants';
import styles from '@/styles';
import { staggerContainer } from '@/Utils/motions';
import World from '@/sections/World';

const Explore = () => {
  const [active, setactive] = useState('world-2');
  return (
    <section className={`${styles.paddings} `}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex flex-col`}
      >
        <TypingText title="| The Virtual World" textStyles="text-center" />
      </motion.div>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto lg:p-10  flex flex-col`}
      >
        <TitleText
          title={
            <>
              Choose The world you want <br className="md:block hidden" />
              to explore
            </>
          }
          textStyles="text-center"
        />
        <div className=" flex lg:flex-row flex-col mt-[50px] gap-5 min-h-[70vh]">
          {exploreWorlds.map((world, index) => (
            <ExploreCard key={world.id} {...world} index={index} active={active} handleClick={setactive} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
