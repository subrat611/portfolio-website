export const navItem = [
  { name: "About", route: "/" },
  {
    name: "Projects",
    route: "/projects",
  },
  {
    name: "Experience",
    route: "/experience",
  },
];

export const frontendTools = [
  {
    link: "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
    alt: "javascript",
  },
  {
    link: "https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white",
    alt: "typescript",
  },
  {
    link: "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
    alt: "react",
  },
  {
    link: "https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white",
    alt: "next.js",
  },
  {
    link: "https://img.shields.io/badge/vue.js-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D",
    alt: "vue.js",
  },
  {
    link: "https://img.shields.io/badge/Nuxt-002E3B?style=for-the-badge&logo=nuxt.js&logoColor=#00DC82",
    alt: "nuxt.js",
  },
  {
    link: "https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white",
    alt: "redux",
  },
  {
    link: "https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white",
    alt: "css3",
  },
  {
    link: "https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white",
    alt: "sass",
  },
  {
    link: "https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white",
    alt: "bootstrap",
  },
  {
    link: "https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white",
    alt: "mui",
  },
  {
    link: "https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white",
    alt: "tailwindcss",
  },
];

import {
  BootstrapIcon,
  CppIcon,
  CssIcon,
  ExpressjsIcon,
  FirebaseIcon,
  JavaScriptIcon,
  LinuxIcon,
  MaterialuiIcon,
  MongodbIcon,
  NextJsIcon,
  NodejsIcon,
  NuxtJsIcon,
  PostmanIcon,
  ReactJsIcon,
  ReduxIcon,
  ScssIcon,
  SupabaseIcon,
  TailwindcssIcon,
  TypescriptIcon,
  VueJsIcon,
} from "./icons";

export const frontendSkills = [
  {
    name: "JavaScript",
    icon: <JavaScriptIcon />,
  },
  {
    name: "TypeScript",
    icon: <TypescriptIcon />,
  },
  {
    name: "React.js",
    icon: <ReactJsIcon />,
  },
  {
    name: "Vue.js",
    icon: <VueJsIcon />,
  },
  {
    name: "Next.js",
    icon: <NextJsIcon />,
  },
  {
    name: "Nuxt.js",
    icon: <NuxtJsIcon />,
  },
  {
    name: "Redux-toolkit",
    icon: <ReduxIcon />,
  },
  {
    name: "CSS3",
    icon: <CssIcon />,
  },
  {
    name: "SCSS",
    icon: <ScssIcon />,
  },
  {
    name: "Tailwind CSS",
    icon: <TailwindcssIcon />,
  },
  {
    name: "Material UI",
    icon: <MaterialuiIcon />,
  },
  {
    name: "Bootstrap",
    icon: <BootstrapIcon />,
  },
];

export const backendSkills = [
  {
    name: "Node.js",
    icon: <NodejsIcon />,
  },
  {
    name: "Express.js",
    icon: <ExpressjsIcon />,
  },
  {
    name: "MongoDB",
    icon: <MongodbIcon />,
  },
  {
    name: "Postman",
    icon: <PostmanIcon />,
  },
  {
    name: "Supabase",
    icon: <SupabaseIcon />,
  },
  {
    name: "Firebase",
    icon: <FirebaseIcon />,
  },
  {
    name: "Linux",
    icon: <LinuxIcon />,
  },
  {
    name: "C++",
    icon: <CppIcon />,
  },
];

export const managementTools = [
  {
    link: "https://img.shields.io/badge/Git-fc6d26?style=for-the-badge&logo=git&logoColor=white",
    alt: "git",
  },
  {
    link: "https://img.shields.io/badge/jira-%230A0FFF.svg?style=for-the-badge&logo=jira&logoColor=white",
    alt: "jira",
  },
  {
    link: "https://img.shields.io/badge/Trello-%23026AA7.svg?style=for-the-badge&logo=Trello&logoColor=white",
    alt: "trello",
  },
  {
    link: "https://img.shields.io/badge/Notion-%23000000.svg?style=for-the-badge&logo=notion&logoColor=white",
    alt: "notion",
  },
];

import MarktineLogo from "../assets/marktine-logo.jpeg";
import GssocLogo from "../assets/gssoc.jpg";
import OyeBusyLogo from "../assets/oyebusy.jpeg";
import OpjuLogo from "../assets/opju.png";

export const experiences = [
  {
    imgpath: MarktineLogo,
    duration: "5 m",
    type: "Internship",
    name: "Marktine",
    position: "Frontend Developer",
    link: "https://marktine.com/",
    desc: [
      "Utilized Next.js, Material UI, Redux Saga, and Redux Toolkit to spearhead the development of vriti.ai, an AI-powered job portal.",
      "Implemented performance-enhancing features such as infinite scrolling pagination and the Render Props Pattern forreusable components.",
      "Developed features like real-time notifications (WebSocket), admin dashboard and connection features, while also resolving over 200+ bugs.",
    ],
  },
  {
    imgpath: GssocLogo,
    duration: "3 m",
    type: "Internship",
    name: "GirlScript Summer of Code",
    position: "Open Source Contributor",
    link: "https://gssoc.girlscript.tech/",
    desc: [
      "Contributed to the developer documentation and rectified 5+ bugs across various projects, earning a ranking of 329 for my contributions.",
    ],
  },
  {
    imgpath: OyeBusyLogo,
    duration: "5 m",
    type: "Internship",
    name: "OyeBusy Technologies Pvt. Ltd.",
    position: "Frontend Developer",
    link: "https://www.oyebusy.com/",
    desc: [
      "Developed a home service-providing platform utilizing Nuxt.js, Vue.js, and Vuex. Focused on key features including authentication via phone OTP, service listing, and user carts.",
      "Implemented best practices such as infinite scrolling pagination and crafted custom components for enhanced reusability. Designed responsive layouts to ensure optimal user experience across devices.",
    ],
  },
  {
    imgpath: OpjuLogo,
    duration: "1 yr 9 m",
    type: "Part-time",
    name: "OP Jindal University",
    position: "Frontend Developer",
    link: "https://www.opju.ac.in/",
    desc: [
      "Led the OP Jindal University web team, overseeing the development of responsive websites such as Technorollix2023, OTCON and ISMS2023.",
      "Enhanced website performance metrics: Lighthouse performance by 98%, Accessibility by 83%, Best Practices by 96%, and SEO by 80%.",
    ],
  },
];
