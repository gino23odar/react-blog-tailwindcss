import {topics} from '../constants';
import styles, {layout} from '../style';

const TopicCard = ( {title, content, index}) =>(
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== topics.length - 1 ? 'mb-6' : 'mb-0'} topic-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
    {/* insert logos or images */}
    </div>
    <div className='flex-1 flex flex-col ml-3'>
      <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1'>
        {title}
      </h4>
      <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px]'>
        {content}
      </p>
    </div>
  </div>
)

const Info = () => {
  return (
    <section id='info' className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Sobre lo que puedes 
        <br className='sm:block hidden'/>
        encontrar aqui</h2>
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
      {topics.map((topic, index) => (
        <TopicCard key={topic.id} {...topic} index={index} />
      ))}
    </div>
    </section>
  )
}

export default Info