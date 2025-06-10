export const navItems = [
  { name: "Home", link: "#hero" },
  { name: "About", link: "#about" },
  { name: "Skills", link: "#skills" },
  { name: "Projects", link: "#projects" },
  // { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];
export const links = [
  {
    name: "Home",
    hash: "#hero",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

interface Project {
  id: number;
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  link: string;
  github: string;
}

export const projects = [
  {
    id: 1,
    title: "Game Explorer Web Application",
    des: "Browse a vast collection of games with detailed descriptions, genres, and ratings.",
    img: "/p1.png",
    iconLists: ["/re.svg", "/chakra.svg", "/ts.svg"],
    link: "https://game-hubbb.vercel.app/",
    github: "https://github.com/lohitkumar1914/Game-Explorer-Web-Application",
  },
  {
    id: 2,
    title: "Studio management project",
    des: "A web application for managing a studio's projects, employees, and clients.",
    img: "/p2.png",
    iconLists: ["/tail.svg", "/ts.svg", "/supabase.svg"],
    link: "https://lohitworks2.netlify.app/",
    github: "https://github.com/lohitkumar1914/Studio-Project-Management",
  },
  {
    id: 3,
    title: "SekharAlbums",
    des: "Sekhar Albums is a website that showcases the organization's works and allows users to contact them easily.",
    img: "/sekharalbums.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    link: "https://www.sekharalbums.in/",
    github: "https://github.com/lohitkumar1914/Sekhar-albums",
  },

  {
    id: 4,
    title: "guess the word game",
    des: "A word guessing game where players try to guess a word by suggesting letters within a limited number of attempts.",
    img: "/p4.png",
    iconLists: ["/re.svg", "/CSS.svg", "/js.svg"],
    link: "https://guess-the-word-game-weld.vercel.app/",
    github: "https://github.com/lohitkumar1914/Guess-the-word-game",
  },
  {
    id: 5,
    title: "password generator",
    des: "A web application that generates secure passwords based on user-defined criteria.",
    img: "/p3.png",
    iconLists: ["/HTML.svg", "/CSS.svg", "/JS.svg"],
    link: "https://lohitkumar1914.github.io/project-1-Password-generator/",
    github: "https://github.com/lohitkumar1914/project-1-Password-generator",
  },
  {
    id: 6,
    title: "AI Article Summarizer",
    des: "A Chrome extension that summarizes articles using Google Gemini AI into brief, detailed, or bullet-point formats instantly.",
    img: "/p5.png",
    iconLists: ["/HTML.svg", "/CSS.svg", "/JS.svg", " /ai.svg"],
    link: "https://github.com/lohitkumar1914/ai-article-summarizer.git",
    github: "https://github.com/lohitkumar1914/ai-article-summarizer.git",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  {
    id: 4,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
];

export const socialMedia = [
  {
    id: "github",
    img: "/git.svg",
    url: "https://github.com/lohitkumar1914",
  },
  {
    id: "twitter",
    img: "/twit.svg",
    url: "https://x.com/lohit2k04",
  },
  {
    id: "linkedin",
    img: "/link.svg",
    url: "https://www.linkedin.com/in/naram-lohit-kumar",
  },
];

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Express",
  "MYSQL",
  "java",
  "Python",
  "DSA in java",
] as const;
