import styles from "./ExperienceSection.module.css";

const ExperienceSection = () => {
  return (
    <section className={styles.Wrapper}>
      <p className={styles.experienceTitle}>
        Experience <span className={styles.experienceDot}></span>
      </p>

      {/* Marktine Experience */}
      <div className={styles.experienceCardContainer}>
        <div className={styles.experienceCard}>
          <p className={styles.workingDate}>Jun 2023 - Present</p>
          <p className={styles.companyTitle}>
            Marktine Technology Solution Pvt. Ltd.
          </p>
          <p className={styles.workingDesignation}>FrontEnd Developer Intern</p>
          <div className={styles.workTimeline}>
            <span>Internship</span>
            <span>Present</span>
            {/* <a
              href="https://drive.google.com/file/d/1NXXoV24viTdjd0vd7DKXlw9-agY1Xd_D/view?usp=sharing"
              target="_blank"
            >
              <svg
                width="512"
                height="512"
                viewBox="0 0 256 256"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  d="M248 128a56 56 0 1 0-96 39.14V224a8 8 0 0 0 11.58 7.16L192 216.94l28.42 14.22A8 8 0 0 0 232 224v-56.86A55.81 55.81 0 0 0 248 128Zm-56-40a40 40 0 1 1-40 40a40 40 0 0 1 40-40Zm3.58 112.84a8 8 0 0 0-7.16 0L168 211.06v-32.47a55.94 55.94 0 0 0 48 0v32.47ZM136 192a8 8 0 0 1-8 8H40a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16a8 8 0 0 1-16 0H40v128h88a8 8 0 0 1 8 8Zm-16-56a8 8 0 0 1-8 8H72a8 8 0 0 1 0-16h40a8 8 0 0 1 8 8Zm0-32a8 8 0 0 1-8 8H72a8 8 0 0 1 0-16h40a8 8 0 0 1 8 8Z"
                />
              </svg>
            </a> */}
          </div>
          <ul className={styles.workingListContainer}>
            <li>
              Frontend development using{" "}
              <strong>
                React, Next Js, hooks, Formik, Material UI, REST api, web
                socket, state management tools redux, Redux-toolkit, redux-saga,
                redux-thunk
              </strong>
              .
            </li>
            <li>
              Developed <strong>custom and reusable components</strong> using
              material ui.
            </li>
            <li>
              Data fetching using{" "}
              <strong>middleware redux-saga, redux-thunk toolkit</strong>.
            </li>
            <li>
              Woked with <strong>Agile methodology</strong> to efficiently
              deliver products on time.
            </li>
          </ul>
        </div>
      </div>

      {/* OyeBusy Experience */}
      <div
        className={`${styles.experienceCardContainer} ${styles.justifyRight}`}
      >
        <div className={styles.experienceCard}>
          <p className={styles.workingDate}>Jul 2022 - Nov 2022</p>
          <p className={styles.companyTitle}>OyeBusy Technologies Pvt. Ltd</p>
          <p className={styles.workingDesignation}>Web Developer Intern</p>
          <div className={styles.workTimeline}>
            <span>Internship</span>
            <span>5 months</span>
            <a
              href="https://drive.google.com/file/d/1NXXoV24viTdjd0vd7DKXlw9-agY1Xd_D/view?usp=sharing"
              target="_blank"
            >
              <svg
                width="512"
                height="512"
                viewBox="0 0 256 256"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  d="M248 128a56 56 0 1 0-96 39.14V224a8 8 0 0 0 11.58 7.16L192 216.94l28.42 14.22A8 8 0 0 0 232 224v-56.86A55.81 55.81 0 0 0 248 128Zm-56-40a40 40 0 1 1-40 40a40 40 0 0 1 40-40Zm3.58 112.84a8 8 0 0 0-7.16 0L168 211.06v-32.47a55.94 55.94 0 0 0 48 0v32.47ZM136 192a8 8 0 0 1-8 8H40a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16a8 8 0 0 1-16 0H40v128h88a8 8 0 0 1 8 8Zm-16-56a8 8 0 0 1-8 8H72a8 8 0 0 1 0-16h40a8 8 0 0 1 8 8Zm0-32a8 8 0 0 1-8 8H72a8 8 0 0 1 0-16h40a8 8 0 0 1 8 8Z"
                />
              </svg>
            </a>
          </div>
          <ul className={styles.workingListContainer}>
            <li>
              Work on <strong>high-performance</strong> web applications using{" "}
              <strong>Nuxt.js</strong>. Implementing essential features such as{" "}
              <strong>cart functionality, Google Maps, authentication</strong>.
            </li>
            <li>
              Implement best practices for CSS organization and component
              structuring, resulting in improved code maintainability and
              reduced development time by 70%.
            </li>
            <li>
              Troubleshooting issues and providing creative solutions to improve
              site performance and user experience.
            </li>
          </ul>
        </div>
      </div>

      {/* O.P Jindal University Experience */}
      <div className={styles.experienceCardContainer}>
        <div className={styles.experienceCard}>
          <p className={styles.workingDate}>Jan 2021 - Dec 2023</p>
          <p className={styles.companyTitle}>O.P. Jindal University, Raigarh</p>
          <p className={styles.workingDesignation}>FrontEnd Developer Intern</p>
          <div className={styles.workTimeline}>
            <span>Internship</span>
            <span>2 years</span>
            {/* <a
              href="https://drive.google.com/file/d/1NXXoV24viTdjd0vd7DKXlw9-agY1Xd_D/view?usp=sharing"
              target="_blank"
            >
              <svg
                width="512"
                height="512"
                viewBox="0 0 256 256"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  d="M248 128a56 56 0 1 0-96 39.14V224a8 8 0 0 0 11.58 7.16L192 216.94l28.42 14.22A8 8 0 0 0 232 224v-56.86A55.81 55.81 0 0 0 248 128Zm-56-40a40 40 0 1 1-40 40a40 40 0 0 1 40-40Zm3.58 112.84a8 8 0 0 0-7.16 0L168 211.06v-32.47a55.94 55.94 0 0 0 48 0v32.47ZM136 192a8 8 0 0 1-8 8H40a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16a8 8 0 0 1-16 0H40v128h88a8 8 0 0 1 8 8Zm-16-56a8 8 0 0 1-8 8H72a8 8 0 0 1 0-16h40a8 8 0 0 1 8 8Zm0-32a8 8 0 0 1-8 8H72a8 8 0 0 1 0-16h40a8 8 0 0 1 8 8Z"
                />
              </svg>
            </a> */}
          </div>
          <ul className={styles.workingListContainer}>
            <li>
              Developed and maintain several frontend projects OTCON 2.0, OTCON
              3.0, Technorollix 2023 using Vue JS, Nuxt Js, React JS, Next JS.
            </li>
            <li>
              Enhance the user experience and performance of the site by
              contributing to several projects.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
