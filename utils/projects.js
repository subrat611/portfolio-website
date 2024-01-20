import {
  FirebaseIcon,
  JavaScriptIcon,
  NextJsIcon,
  ReactJsIcon,
  ReactRouterIcon,
  ScssIcon,
  TailwindcssIcon,
} from "./icons";

const pinnedProjects = [
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
    video:
      "https://res.cloudinary.com/dr1dgktil/video/upload/f_auto:video,q_auto/v1/portfolio/q5uy8i7csf4vsenudktg",
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
  },
];

export default pinnedProjects;
