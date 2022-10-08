import styles from '../style';
import {shield} from '../assets';
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
      <h1 className='font-poppins font-semibold ss:text-[42px] text-[52px] text-white ss:leading-[70px] leading-[60px] w-full'>
        Pocos entienden <br className='sm:block hidden'/>que pasa por aqui
      </h1>
      <p className={`${styles.paragraph} max-w-[450px] mt-5`}>
        Esto es texto random.Esto es texto random. <br/>
        Esto es texto random.Esto es texto random. <br/>
        Esto es texto random.Esto es texto random. <br/>
        Esto es texto random.Esto es texto random. <br/>
        Esto es texto random. <br/>
      </p>
    </div>
    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
    <img src={shield} alt="shield" className="w-1/5 md:w-1/3 lg:w-4/6 relative z-[5]" />
        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
    </div>
    <div className={`ss:hidden ${styles.flexCenter}`}>
      <Start/>
    </div>
  </section>
)

export default Hero