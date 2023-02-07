'use client';
import { motion } from 'framer-motion';
import styles from '@/styles';
import { staggerContainer } from '@/Utils/motions';
import { TitleText, TypingText } from './CustomTexts';
import { insights } from '@/constants';
import InsightCard from './InsightCard';

const Insights = () => (
  <section className={`${styles.paddings} xs:mx-10 flex justify-between relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: 'false', amount: 0.25 }}
      className={`${styles.flexCenter} mx-auto flex flex-col items-center  `}
    >
      <TypingText title="| Insight" textStyles="text-center" />
      <TitleText title={<>Insights about Mindverses</>} textStyles="text-center" />
      <div className=" mt-12 flex flex-col gap-8 ">
        {insights.map((insight, index) => (
          <InsightCard key={`insight-${index}`} {...insight} index={index + 1} />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Insights;
