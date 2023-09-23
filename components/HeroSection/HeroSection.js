import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <section className={styles.Wrapper}>
      <div className={styles.magicpattern}></div>
      <div className={styles.heroContainer}>
        <p className={styles.heroTitle}>
          Subrat Jena
          <span className={styles.professionText}>A Software Developer</span>
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
