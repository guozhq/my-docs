import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    //"",
    //"portfolio",
    "roadmap",
    {
      text: "Java-基础进阶",
      icon: "devicon:java",
      prefix: "basic/",
      children: "structure",
    },
    {
      text: "Java-并发编程",
      icon: "streamline-freehand-color:workflow-branch",
      prefix: "concurrent/",
      children: "structure",
    },
    {
      text: "Java-JVM进阶",
      icon: "material-icon-theme:java",
      prefix: "jvm/",
      children: "structure",
    },
    // {
    //   text: "幻灯片",
    //   icon: "person-chalkboard",
    //   link: "https://ecosystem.vuejs.press/zh/plugins/markdown/revealjs/demo.html",
    // },
  ],
});
