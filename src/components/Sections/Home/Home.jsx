import Styles from "./Home.module.scss";
import SelfIntroduction from "./SelfIntroduction/SelfIntroduction";

import Hero from "./Hero";
function Home() {
  return (
    <div className={Styles.section_home}>
      <div className={Styles.top_section}>
        <Hero />
        <img
          src="/images/demo_profilepic.png"
          alt="Profile Picture"
          className={Styles.profile_picture}
        />
      </div>
      <SelfIntroduction />
    </div>
  );
}

export default Home;
