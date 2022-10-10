import { authorQuotes } from '../constants';
import styles from '../style';

const Quotes = () => (
  <section id='authors' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
    <div />
    <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
      <div className='w-full md:mt-0 mt-6'>
        <p className={`${styles.paragraph} text-left max-w-[450px] ml-[10%]`}>La mayoria son citados de conocidos estoicos, pero los podemos cambiar</p>
      </div>
      <h2 className={`${styles.heading2} ml-[25%]`}>Citados para <br className='sm:block hidden' />tener en mente</h2>
    </div>
  </section>
)

export default Quotes