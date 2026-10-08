import calculatorImage from "../assets/images/projects/calculator.png";
import chessImage from "../assets/images/projects/chess-game.png";
import eliteSchoolImage from "../assets/images/projects/elite-school.png";
import silverpolyImage from "../assets/images/projects/silverpoly.png";

// type: "product" = real products (shown big at the top)
// type: "practice" = earlier projects (shown in the grid)
// image, live and github are optional. Add them when you have them.
// When you add a picture, import it above and set `image: yourImage`.

export const projects = [
  {
    slug: "noted",
    type: "product",
    title: "Noted",
    description:
      "An AI learning platform for schools. Teachers let AI set tests and quizzes, or write their own questions. Students turn their notes into summaries, music and short videos, chat with an AI tutor, and battle each other in an arena for XP.",
    role: "Full stack developer",
    status: "Live",
    highlight: "Used by 20+ teachers across 2 schools",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.io",
      "Tailwind",
      "AI APIs",
    ],
    featured: true,
    live: "https://noted-lemon.vercel.app/",
    github: "https://github.com/mickeyweb1/Noted",
    // image: notedImage,
  },
  {
    slug: "workwave",
    type: "product",
    title: "WorkWave",
    description:
      "A SaaS app for business owners to run every branch from one place: sales, expenses, stock, goods in and out, and products.",
    role: "Full stack developer",
    technologies: ["React", "CSS", "MongoDB", "Node.js", "Express"],
    live: "https://work-wave-zeta.vercel.app/",
    github: "https://github.com/mickeyweb1/WorkWave",
    featured: true,
    // image: workwaveImage,
  },
  {
    slug: "nuvora",
    type: "product",
    title: "Nuvora",
    description:
      "A school management website for student fees, staff, money and expenses, so schools spend less time on paperwork.",
    role: "Frontend developer, team of three",
    technologies: ["React", "CSS", "Node.js", "Express", "SQL"],
    live: "https://petra-school-project.vercel.app/",
    github: "https://github.com/Michael-aal/petra-school-project",
    featured: true,
    // image: nuvoraImage,
  },

  {
    slug: "elite-school",
    type: "practice",
    title: "Elite School Website",
    description: "A modern responsive school website built with React and CSS.",
    image: eliteSchoolImage,
    technologies: ["React", "CSS"],
    github: "https://github.com/mickeyweb1/Elite-school",
    live: "https://elite-school-site.vercel.app",
    featured: true,
  },
  {
    slug: "chess-game",
    type: "practice",
    title: "Chess Game",
    description: "A browser chess game built with HTML, CSS and JavaScript.",
    image: chessImage,
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/mickeyweb1/Chess-Game",
    live: "https://mickeyweb1.github.io/Chess-Game/",
    featured: true,
  },
  {
    slug: "calculator",
    type: "practice",
    title: "Calculator",
    description:
      "A collaborative calculator project built with HTML, CSS and JavaScript.",
    image: calculatorImage,
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/mickeyweb1/Colab-Project",
    live: "https://mickeyweb1.github.io/Colab-Project/",
    featured: true,
  },
  {
    slug: "silverpoly",
    type: "practice",
    title: "Silverpoly",
    description: "Responsive business landing page built using HTML and CSS.",
    image: silverpolyImage,
    technologies: ["HTML", "CSS"],
    github: "https://github.com/mickeyweb1/Silverpoly",
    live: "https://mickeyweb1.github.io/Silverpoly/",
    featured: true,
  },
];
