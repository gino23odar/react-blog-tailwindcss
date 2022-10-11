import { authorQuotes } from '../constants';
import styles from '../style';
import TopicCard from './TopicCard';

const quotesSelection = (arr) =>{
  let currentIndex = arr.length,  randomIndex;
  while(currentIndex != 0){
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [arr[currentIndex], arr[randomIndex]] = [
      arr[randomIndex], arr[currentIndex]];
  }
  return arr.slice(0, 3);
}

const Quotes = () => (
  <section id='authors' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
    <div />
    <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
      <div className='w-full md:mt-0 mt-6'>
        <p className={`${styles.paragraph} text-left max-w-[450px] ml-[10%]`}>La mayoria son citados de conocidos estoicos, pero los podemos cambiar</p>
      </div>
      <h2 className={`${styles.heading2} ml-[25%]`}>Citados para <br className='sm:block hidden' />tener en mente</h2>
    </div>
    <div className='flex flex-wrap sm:justify-start justify-center w-full topic-container relative z-[1]'>
      {quotesSelection(authorQuotes).map((card)=> <TopicCard key={card.id} {...card}/>)}
    </div>
  </section>
)

export default Quotes