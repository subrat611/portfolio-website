import {
  FirebaseIcon,
  JavaScriptIcon,
  NextJsIcon,
  ReactJsIcon,
  ReactRouterIcon,
  ScssIcon,
  TailwindcssIcon,
  TypescriptIcon,
  ViteJsIcon,
} from "./icons";

const projects = [
  {
    project_name: "Leetcode Tree Visualizer",
    description:
      "It enables you to view the tree that corresponds to the array of test cases.",
    tech: [
      {
        name: "TypeScript",
        icon: <TypescriptIcon />,
      },
      {
        name: "Vite Js",
        icon: <ViteJsIcon />,
      },
      {
        name: "Tailwind CSS",
        icon: <TailwindcssIcon />,
      },
      {
        name: "HTML 5 Canvas",
      },
    ],
    gitLink: "https://github.com/subrat611/leetcode-tree-visualizer",
    liveLink: "https://leetcode-tree-visualizer.vercel.app/",
    images: [
      "https://res.cloudinary.com/dr1dgktil/image/upload/f_auto,q_auto/v1/portfolio/tx9wdud4r35e3ug90n5l",
      "https://res.cloudinary.com/dr1dgktil/image/upload/f_auto,q_auto/v1/portfolio/xpnzmt8ydlgbd1sy4hlf",
    ],
  },
  {
    project_name: "NxDraw",
    description: "An online whiteboard application built with Next.js.",
    tech: [
      {
        name: "JavaScript",
        icon: <JavaScriptIcon />,
      },
      {
        name: "Next.js",
        icon: <NextJsIcon />,
      },
      {
        name: "Tailwind CSS",
        icon: <TailwindcssIcon />,
      },
      {
        name: "HTML 5 Canvas",
      },
    ],
    gitLink: "https://github.com/subrat611/NxDraw",
    liveLink: "https://nxdraw.vercel.app/",
    images: [
      "https://res.cloudinary.com/dr1dgktil/image/upload/f_auto,q_auto/v1/portfolio/znykagsvorr1jgdfta1s",
      "https://res.cloudinary.com/dr1dgktil/image/upload/f_auto,q_auto/v1/portfolio/d84aayyiundlcairxx6h",
    ],
  },
  {
    project_name: "ColdBurnChat",
    description:
      "A chat application where user can login anonymously and create chat rooms, talk with each others in that group.",
    tech: [
      {
        name: "React.js",
        icon: <ReactJsIcon />,
      },
      {
        name: "SCSS",
        icon: <ScssIcon />,
      },
      {
        name: "React Router",
        icon: <ReactRouterIcon />,
      },
      {
        name: "Firebase",
        icon: <FirebaseIcon />,
      },
    ],
    gitLink: "https://github.com/subrat611/ColdBurnChat",
    liveLink: "https://cold-burn-chat.vercel.app/",
    video: "",
    images: [
      "https://res.cloudinary.com/dr1dgktil/image/upload/f_auto,q_auto/v1/portfolio/cht2czukb7gibjxy5fel",
      "https://res.cloudinary.com/dr1dgktil/image/upload/f_auto,q_auto/v1/portfolio/lmotfkbv9blwpdqvkiza",
      "https://res.cloudinary.com/dr1dgktil/image/upload/f_auto,q_auto/v1/portfolio/mo5vode5r3ksw4ig7rlh",
    ],
  },
];

export default projects;
