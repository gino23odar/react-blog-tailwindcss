import styles from '../style';

const Start = () => (
  <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-3xl bg-blue-gradient p-[4px] cursor-pointer`}>
    <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-3xl`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className='font-poppins font-medium text-[18px] text-center leading-[23px]'>
          <span className='text-gradient'>sobre el <br/> autor</span>
        </p>
      </div>
    </div>
  </div>
)

export default Start