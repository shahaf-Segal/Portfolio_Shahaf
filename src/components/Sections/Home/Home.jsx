// src/components/Sections/Home/Home.jsx

import Styles from "./Home.module.scss";

import Hero from "./Hero";
function Home() {
  return (
    <div className={Styles.section_home}>
      <Hero />
      <img
        src="/images/demo_profilepic.png"
        alt="Profile Picture"
        className={Styles.profile_picture}
      />
    </div>
  );
}

export default Home;
