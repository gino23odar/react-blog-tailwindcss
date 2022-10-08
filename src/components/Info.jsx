import {topics} from '../constants';
import styles, {layout} from '../style';

const Info = () => {
  return (
    <section id='info' className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Sobre lo que puedes 
        <br className='sm:block hidden'/>
        encontrar aqui</h2>
      </div>
    </section>
  )
}

export default Info