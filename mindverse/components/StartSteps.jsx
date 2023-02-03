import styles from '@/styles';

const StartSteps = ({ number, text }) => (
  <div className={`${styles.flexCenter} flex-row`}>
    <div className={`${styles.flexCenter} w-16 h-16 rounded-2xl bg-[#323f5d] `}>
      <p className="font-bold text-base text-white">0{number}</p>
    </div>
    <p className=" flex flex-1 ml-8 text-base font-normal text-slate-300 leading-8 ">{text}</p>
  </div>
);

export default StartSteps;
