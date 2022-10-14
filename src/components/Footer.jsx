import styles from "../style";
import { logo } from "../assets";
import { socialMedia } from "../constants";

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
    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <div className="flex flex-row md:mt-0 mt-6">
        <ul className='animated-list'>
          {socialMedia.map((social, index) => (
            <li>
              <div>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <img
                key={social.id}
                src={social.icon}
                alt={social.id}
                className={`w-[48px] h-[48px] object-contain cursor-pointer svg-color`}
                onClick={() => window.open(social.link)}
                />
              </div> 
            </li>
          ))}
        </ul>
      </div>
    </div>
    
  </section>
)

export default Footer