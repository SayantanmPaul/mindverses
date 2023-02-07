'use client';
import { motion } from 'framer-motion';
import { textContainer, textVariant2 } from '@/Utils/motions';
import styles from '@/styles';
export const TypingText = ({ title, textStyles }) => (
  <motion.p variants={textContainer} className={'text-[15px] font-normal text-slate-200 ${textStyles} '}>
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({ title, textStyles }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[10px] font-bold md:text-[44px] text-[33px] text-white ${textStyles}`}
  >
    {title}
  </motion.h2>
);
