'use client';
import { motion } from 'framer-motion';
import { textContainer, textVariant2 } from '@/Utils/motions';
export const TypingText = ({ title, textStyles }) => (
  <motion.p variants={textContainer} className={'text-[15px] font-normal text-slate-200 ${textStyles} '}>
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = () => <h2>Title Text</h2>;
