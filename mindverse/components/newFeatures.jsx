import styles from '@/styles';
import Image from 'next/image';

const NewFeatures = ({ imgUrl, title, subtitle }) => (
  <div className="  flex-1 flex  flex-col sm:max-w-[300px] min-w-[300px] ">
    <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-2xl bg-[#323f5d]`}>
      <Image src={imgUrl} width={200} height={200} alt="icon" className="w-1/2 h-1/2  object-contain" />
    </div>
    <h1 className=" mt-7 font-bold text-lg leading-8 text-white "> {title} </h1>
    <p className=" flex-1 mt-4 font-normal text-[18px] text-slate-400 leading-8">{subtitle}</p>
  </div>
);

export default NewFeatures;
