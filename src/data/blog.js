import logo from "../assets/logo.svg";

const blogData = {
  name: "Overreacted",
  image: logo,
  about: "Personal blog by Dan Abramov .I explain with words and code.",
  posts: [
    {
      id: 1,
      title: "npm audit: Broken by Design",
      date:" July 7, 2021 • ☕️☕️☕️ 14 min read",
      preview: "Found 99 vulnerabilities (84 moderately irrelevant, 15 highly irrelevant)",
      minutes: 14,
    },
    {
      id: 2,
      title: "Before You memo()",
      date: "February 23, 2021 ",
      preview: "Rendering optimizations that come naturally.",
      minutes: 5,
    },
    {
      id: 3,
      title: "The WET Codebase",
      preview: "Come waste your time with me.",
      minutes: 1,
    },
    {id: 4,
    title: "Goodbye,Clean Code",
    date:"January 11,2020",
    preview: "Let clean code guide you. Then let it go.",
    minutes: 5,
    },
    {id:5,
    title:"My Decade in Review",
    date:"January1,2020",
  preview:"A personal reflection",
minutes:26}
  ],
};

export default blogData;
