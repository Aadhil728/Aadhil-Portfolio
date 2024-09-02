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
      { name: "HTML5", icon: "/images/icons/html.png", color: "#f9a58e6e" },
      { name: "CSS3", icon: "/images/icons/css.png", color: "#63b0e96e" },
      {
        name: "JavaScript",
        icon: "/images/icons/js.png",
        color: "#fff082d9",
      },
      {
        name: "React Js",
        icon: "/images/icons/react.png",
        color: "#b8f0ff75",
      },
      {
        name: "Angular",
        icon: "/images/icons/angular.png",
        color: "#ed9a8fa8",
      },
      { name: "Vue Js", icon: "/images/icons/vue.png", color: "#0488044d" },
      { name: "Next Js", icon: "/images/icons/next.png", color: "#27302733" },
      { name: "TypeScript", icon: "/images/icons/ts.png", color: "#63b0e96e" },
      {
        name: "Bootstrap",
        icon: "/images/icons/bootstrap.png",
        color: "#b496df45",
      },
      {
        name: "Tailwind CSS",
        icon: "/images/icons/tailwind.png",
        color: "#97efff7d",
      },
      {
        name: "Redux Toolkit",
        icon: "/images/icons/redux.png",
        color: "#783ab040",
      },
      { name: "JQuery", icon: "/images/icons/jquery.png", color: "#0b69ad4a" },
      { name: "PHP", icon: "/images/icons/php.png", color: "#767bb38f" },
      { name: "JSON", icon: "/images/icons/json.png", color: "#783ab040" },
    ],
    backendSkills: [
      { name: "Node.JS", icon: "/images/icons/nodejs.png", color: "#BBF0BB" },
      { name: "Express", icon: "/images/icons/express.png", color: "#BBBBBB" },
      {
        name: "MongoDB",
        icon: "/images/icons/mongodb.png",
        color: "#40963161",
      },
      { name: "MySQL", icon: "/images/icons/mysql.png", color: "#ABDCF2" },
      { name: "PHP", icon: "/images/icons/php.png", color: "#767bb38f" },
      { name: "Laravel", icon: "/images/icons/larava.png", color: "#ce8b9654" },
      {
        name: "Firebase",
        icon: "/images/icons/firebase.png",
        color: "#fdc30054",
      },
    ],
    otherSkills: [
      { name: "Git", icon: "/images/icons/git.png", color: "#ed9a8f82" },
      { name: "GitHub", icon: "/images/icons/github.png", color: "#D0D0D0" },
      { name: "GitLab", icon: "/images/icons/gitlab.png", color: "#e343293d" },
      { name: "JIRA", icon: "/images/icons/jira.png", color: "#085cd857" },
      { name: "NPM", icon: "/images/icons/npm.png", color: "#cc38384a" },
      { name: "VS Code", icon: "/images/icons/vscode.png", color: "#277cb54a" },
      { name: "Postman", icon: "/images/icons/postman.png", color: "#fd6c3557" },
      { name: "AWS Cloud", icon: "/images/icons/aws.png", color: "#fb9f2f4f" },
      {
        name: "WordPress",
        icon: "/images/icons/wordpress.png",
        color: "#21759a40",
      },
      {
        name: "RESTful APIs",
        icon: "/images/icons/restapi.png",
        color: "#0c85c236",
      },
      { name: "Figma", icon: "/images/icons/figma.png", color: "#0acf834f" },
      {
        name: "Adobe Photoshop",
        icon: "/images/icons/photoshop.png",
        color: "#00112557",
      },
      {
        name: "Adobe Illustrator",
        icon: "/images/icons/ai.png",
        color: "#f594025e",
      },
      { name: "Canva", icon: "/images/icons/canva.png", color: "#0cb4cf2e" },
    ],
  },
];

// experince data
export const experiencesData = [
  {
    title: "Graphic Designer",
    company: "Freelancer",
    location: "Doha | Qatar",
    type: "Remote",
    description:
      "Created visually appealing graphic design materials, such as logos, social media graphics, and marketing collateral, leading to a 40% increase in client engagement and brand visibility across digital platforms.",
    description2:
      "Enhanced brand identity and visual storytelling for clients through custom graphic design solutions, achieving a 30% improvement in overall client satisfaction and a 25% growth in repeat business.",
    image: "/images/experience/freelance.png",
    date: "Apr 2023 - Present",
    skillset: ["Photoshop", "Illustrator", "Canva", "Pixels"],
  },
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
    date: "Apr 2023 - Apr 2024",
    skillset: [
      "JavaScript",
      "React",
      "Vue Js",
      "Laravel",
      "Alpine Js",
      "TypeScript",
      "Tailwind CSS",
      "Redux",
    ],
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
    date: "June 2020 - Feb 2023",
    skillset: [
      "TypeScript",
      "Angular",
      "Bootstrap",
      "JSON",
      "Node Js",
      "Express",
      "Mongo DB",
      "MYSQL",
    ],
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
    date: "Jan 2021 – Aug 2023",
    skillset: ["Html / Css", "Javascript", "Bootstrap", "JSON", "Shopify"],
  },
];

export const educationData = [
  {
    image: <FaGraduationCap />,
    name: "BTECH Higher National Diploma In Software Engineering",
    collage: "BTEC Pearson UK",
    date: "Jan 2021 - Jul 2023",
    location: "Colombo | Sri Lanka",
  },
  {
    image: <FaGraduationCap />,
    name: "DITEC Assured Diploma In Information Technology.",
    collage: "BTEC Pearson UK",
    date: "Jan 2019 - Feb 2020",
    location: "Colombo | Sri Lanka",
  },
  {
    image: <FaGraduationCap />,
    name: "WordPress Development Course.",
    collage: "FIND X Pvt LTD",
    date: "Feb 2023 - Sep 2023",
    location: "Colombo | Sri Lanka",
  },
  {
    image: <FaGraduationCap />,
    name: "English Diploma Course.",
    collage: "Sathsahana Foundation ",
    date: "Jan 2018 - Jul 2018",
    location: "Negombo | Sri Lanka",
  },
  {
    image: <FaGraduationCap />,
    name: "Computer Diploma Course.",
    collage: "Sathsahana Foundation ",
    date: "Jan 2018 - Jul 2018",
    location: "Negombo | Sri Lanka",
  },
];

export const servicesData = [
  {
    image: "/images/services/web_dev.png",
    title: "Web Development",
    description:
      "Building and maintaining websites with a focus on functionality, performance, and user experience using technologies like HTML, CSS, JavaScript, and various frameworks.",
  },
  {
    image: "/images/services/e-commerce.png",
    title: "E-Commerce development",
    description:
      "Creating online platforms for businesses to sell products and services, incorporating features like product listings, shopping carts, payment gateways, and order management.",
  },
  {
    image: "/images/services/mobile_dev.png",
    title: "Mobile Development",
    description:
      "Developing applications for mobile devices using native (Swift for iOS, Kotlin for Android) or cross-platform technologies (React Native, Flutter) to deliver a seamless user experience.",
  },
];
