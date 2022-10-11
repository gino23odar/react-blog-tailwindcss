import styles from "../style";
import { logo } from "../assets";

const Footer = () =>(
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-[1] flex flex-col justify-start mr-10">
        <img
          src={logo}
          alt="blogAncestro"
          className="w-[130px] h-[100px] rounded-3xl object-fill"
        />
      </div>
    </div>
  </section>
)

export default Footer