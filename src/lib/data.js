import { FaGraduationCap } from "react-icons/fa6";

export const links = [
  {
    name: "Home",
    hash: "home",
  },
  {
    name: "About",
    hash: "about",
  },
  {
    name: "Experience",
    hash: "experience",
  },
  {
    name: "Skills",
    hash: "skills",
  },
  {
    name: "Projects",
    hash: "projects",
  },
  {
    name: "Contact",
    hash: "contact",
  },
];

//skills data
export const skillsData = [
  {
    frontendSkills: [
      { name: "HTML5", icon: "/images/icons/html.webp", color: "#f9a58e6e" },
      { name: "CSS3", icon: "/images/icons/css.webp", color: "#63b0e96e" },
      {
        name: "JavaScript",
        icon: "/images/icons/javascript.webp",
        color: "#fff082d9",
      },
      { name: "React", icon: "/images/icons/react.webp", color: "#b8f0ff75" },
      {
        name: "Angular",
        icon: "/images/icons/angular.png",
        color: "#ed9a8fa8",
      },
      { name: "Vue.JS", icon: "/images/icons/vue.webp", color: "#0488044d" },
      { name: "TypeScript", icon: "/images/icons/ts.png", color: "#63b0e96e" },
      {
        name: "Bootstrap",
        icon: "/images/icons/bootstrap.webp",
        color: "#b496df45",
      },
      {
        name: "Tailwind CSS",
        icon: "/images/icons/tailwind.webp",
        color: "#97efff7d",
      },
      { name: "Redux", icon: "/images/icons/redux.png", color: "#783ab040" },
    ],
    backendSkills: [
      { name: "Node.JS", icon: "/images/icons/node.webp", color: "#BBF0BB" },
      { name: "Express", icon: "/images/icons/express.webp", color: "#BBBBBB" },
      { name: "MongoDB", icon: "/images/icons/mongodb.webp", color: "#AEEE9C" },
      { name: "MySql", icon: "/images/icons/mysql.webp", color: "#ABDCF2" },
    ],
    otherSkills: [
      { name: "Git", icon: "/images/icons/git.webp", color: "#ED9A8F" },
      { name: "GitHub", icon: "/images/icons/github.webp", color: "#D0D0D0" },
      { name: "GitLab", icon: "/images/icons/gitlab.webp", color: "#F69F8F" },
      { name: "JIRA", icon: "/images/icons/jira.webp", color: "#69A3F9" },
      { name: "NPM", icon: "/images/icons/npm.webp", color: "#FFBDBD" },
      { name: "VS Code", icon: "/images/icons/vscode.webp", color: "#61BFFF" },
      { name: "Postman", icon: "/images/icons/postman.webp", color: "#F7931E" },
      { name: "AWS Cloud", icon: "/images/icons/aws.webp", color: "#fcb96c" },
      {
        name: "WordPress",
        icon: "/images/icons/wordpress.webp",
        color: "#9AC3D0",
      },
      {
        name: "Firease",
        icon: "/images/icons/firebase.png",
        color: "#fcb96ca3",
      },
      {
        name: "RESTful APIs",
        icon: "/images/icons/restapi.png",
        color: "#0c85c236",
      },
      { name: "Figma", icon: "/images/icons/figma.webp", color: "#0acf834f" },
      {
        name: "Photoshop",
        icon: "/images/icons/photoshop.png",
        color: "#00112557",
      },
      { name: "Illustrator", icon: "/images/icons/ai.png", color: "#f594025e" },
    ],
  },
];

// experince data
export const experiencesData = [
  {
    title: "Associate Front End Developer",
    company: "AppsSoft SD PVT LTD",
    location: "Colombo | Sri Lanka",
    type: "Remote",
    description:
      "Developed and enhanced web interfaces using HTML, CSS, and JavaScript, resulting in a 25% increase in user engagement and a 20% boost in revenue within six months",
    description2:
      "Developed and optimized a POS system by writing efficient client-side code and implementing UI/UX improvements, resulting in a 30% improvement in overall application performance.",
    description3:
      "Worked collaboratively with team members to integrate third-party services and APIs seamlessly, reducing development time by 15% and ensuring smooth application functionality",
    image: "/images/experience/apssoft.png",
    date: "07/2023 – present",
  },
  {
    title: "Junior Software Developer",
    company: "Maytech Technologies PVT LTD",
    location: "Colombo | Sri Lanka",
    type: "On Site",
    description:
      "Developed and maintained web applications using HTML, CSS JavaScript,, and Angular, enhancing overall performance by 25%.",
    description2:
      "Collaborated with cross-functional teams to implement MongoDB, Express, and Node.js for backend development, improving data processing speed by 20%.",
    description3:
      "Improved user interfaces and improved user experience, leading to a 30% increase in user satisfaction scores. Assisted in the deployment and maintenance of cloud-based applications, achieving a 15% reduction in server downtime.",
    icon: <FaGraduationCap />,
    image: "/images/experience/maytech.png",
    date: "05/2021 – 02/2023",
  },
  {
    title: "Front End Developer Intern",
    company: "Ecom Services Lanka (PVT) LTD",
    location: "Colombo | Sri Lanka",
    type: "On Site",
    description:
      "Collaborated with senior developers to enhance front-end components using Angular, resulting in a 15% improvement in user engagement metrics.",
    description2:
      "Implemented responsive design principles and streamlined codebase leading to a 10% increase in website performance and loading speed.",
    description3:
      "Assisted in integrating performance monitoring tools and conducting optimizations, resulting in a 20% reduction in frontend-related issues reported by users.",
    icon: <FaGraduationCap />,
    image: "/images/experience/ecom-service.png",
    date: "05/2021 – 02/2023",
  },
];

export const educationData = [
  {
    image: <FaGraduationCap />,
    name: "BTECH Higher National Diploma In Software Engineering",
    collage: "BTEC Pearson UK",
    date: "Jan 2021 - Jul 2023",
    location: "Colombo | Sri lanka",
  },
  {
    image: <FaGraduationCap />,
    name: "DITEC Assured Diploma In Information Technology.",
    collage: "BTEC Pearson UK",
    date: "Jan 2019 - Feb 2020",
    location: "Colombo | Sri lanka",
  },
  {
    image: <FaGraduationCap />,
    name: "WordPress Development Course.",
    collage: "FIND X Pvt LTD",
    date: "Feb 2023 - Sep 2023",
    location: "Colombo | Sri lanka",
  },
  {
    image: <FaGraduationCap />,
    name: "English Diploma Course.",
    collage: "Sathsahana Foundation ",
    date: "Jan 2018 - Jul 2018",
    location: "Nehombo | Sri lanka",
  },
  {
    image: <FaGraduationCap />,
    name: "Computer Diploma Course.",
    collage: "Sathsahana Foundation ",
    date: "Jan 2018 - Jul 2018",
    location: "Nehombo | Sri lanka",
  },
];
