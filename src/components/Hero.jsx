import styles from '../style';
import Start from './Start'

const Hero = () => (
  <section id='home' className={` flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
        <p className={`${styles.paragraph} ml-2`}>
          <span className='text-white'>top-message:</span> JUAT
        </p>
      </div>
      <div className='flex flex-row justify-between items-center w-full'>
        <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>
          EL BLOG <br className='sm:block hidden'/>{' '}
          DEL <span className='text-gradient'>ANCESTRO</span>
        </h1>
        <div className='ss:flex hidden md:mr-4 mr-0'>
          <Start/>
        </div>
      </div>
    </div>
  </section>
)

export default Hero