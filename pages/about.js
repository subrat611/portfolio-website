import Header from "@/components/Header/Header";

const About = () => {
  return (
    <section className="bg-slate-950 pb-6 h-full min-h-screen">
      <Header />
      <div className="w-11/12 max-w-[780px] mx-auto">
        <p className="text-slate-50 font-semibold text-3xl">About me</p>
        <p className="text-gray-300 text-lg mt-2">
          <span className="text-cyan-300">
            🚀 Passionate Frontend Developer | Open Source Enthusiast{" "}
          </span>
          <br />
          <span>
            Hello there! I'm Subrat Kumar Jena, a final year B.Tech student with
            a keen passion for front-end development and a touch of backend
            expertise. I thrive in the world of web technologies, specializing
            in crafting seamless user experiences and robust applications.
          </span>
          <br />
          <div className="mt-3">
            💻 Technical Expertise: <br />
            Languages:{" "}
            <span className="text-cyan-300">
              C++, JavaScript, TypeScript, and Java.
            </span>
            <br />
            Front-end technologies:{" "}
            <span className="text-cyan-300">
              React.js, Vue.js, HTML, CSS, SCSS, Material UI, Next.js, Nuxt.js,
              and Redux Toolkit
            </span>
            <br />
            Backend technologies:{" "}
            <span className="text-cyan-300">Node.js, MongoDB.</span> <br />
            I'm well-versed in version control systems like Git and platforms
            like GitHub and Bitbucket. Additionally, I also have some
            familiarity with Docker and Firebase.
          </div>
        </p>
        <p className="text-gray-300 mt-3">
          With 2 impactful 6-month internships under my belt, I've honed my
          skills in real-world scenarios, working extensively with the
          technologies mentioned above. During my internships, I not only
          developed robust applications but also collaborated with
          cross-functional teams, ensuring seamless project delivery. Outside of
          work, I'm proud to have contributed to open-source initiatives like
          HackOctoberFest and GSSOC 2023, where I collaborated with fellow
          developers on meaningful projects.
        </p>
      </div>
    </section>
  );
};

export default About;
