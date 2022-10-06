import styles from '../style';

const Hero = () => (
  <section id='home' className={` flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
        <p className={`${styles.paragraph} ml-2`}>
          <span className='text-white'>top-message:</span>
            JUAT
        </p>
      </div>
    </div>
  </section>
)

export default Hero