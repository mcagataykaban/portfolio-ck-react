import newyearlogo from "../images/neyyearlogo.png";
import blog from "../images/blog.png";
import blog2 from "../images/blog2.png";
import bootstraplogo from "../images/bootstraplogo.png";
import html5logo from "../images/html5logo.png";
import jslogo from "../images/jslogo.png";
import css3logo from "../images/css3logo.webp";
import bloglogo from '../images/bloglogo.png'
import recipelogo from '../images/recipeappl.png'
import recipeapp1 from '../images/recipeapp1.png'
import recipeapp2 from '../images/recipeapp2.png'
import borc from "../images/borc.png";
import logoborc from "../images/logoborc.png";
import logonot from "../images/logonot.png";
import arayuz from "../images/borc-arayuz.png";
import netlogo from "../images/netlogo.png";
import reactlogo from "../images/reactlogo.png";
import awsamp from "../images/awsamplogo.png";
import notgiris from "../images/notgiris.png";
import notarayuz from "../images/notarayuz.png";
import kartlar from "../images/kartlar.png";
import kartlar2 from "../images/kartlar2.png";
import React from 'react'


export const PROJECTS = [
    {
      id: "1",
      logo: logoborc,
      username: "kayit@a.com",
      password: "Ankara1.",
      desc: "A single page application where you can manage your debts",
      url: "https://master.d2h8q9uuq93eql.amplifyapp.com/",
      resimler: [borc, arayuz],
      logolar: [
        { logo: netlogo, techName: ".Net" },
        { logo: reactlogo, techName: "ReactJS" },
        { logo: awsamp, techName: "AWS Amplify" },
      ],
    },
    {
      id: "2",
      logo: logonot,
      username: "ornek@gmail.com",
      password: "Ankara1.",
      desc: "A single page application where you can manage your notes",
      url: "https://master.d2d8m0hh2veuij.amplifyapp.com/",
      resimler: [notgiris, notarayuz],
      logolar: [
        { logo: netlogo, techName: ".Net" },
        { logo: reactlogo, techName: "ReactJS" },
        { logo: awsamp, techName: "AWS Amplify" },
      ],
    },
    {
      id: "3",
      logo: newyearlogo,
      desc: "An mvc application where you can prepare a new year card.",
      url: "https://kartlar.cagataykaban.com/",
      resimler: [kartlar, kartlar2],
      logolar: [
        { logo: netlogo, techName: ".Net" },
        { logo: html5logo, techName: "HTML" },
        { logo: css3logo, techName: "CSS" },
        { logo: bootstraplogo, techName: "Bootstrap" },
        { logo: jslogo, techName: "JS" },
      ],
    },
    {
      id: "4",
      logo: bloglogo,
      desc: "A multi-user MVC application where you can share your blog post.",
      url: "https://blog.cagataykaban.com/",
      resimler: [blog, blog2],
      username: 'example@example.com',
      password: 'Ankara1.',
      logolar: [
        { logo: netlogo, techName: ".Net" },
        { logo: html5logo, techName: "HTML" },
        { logo: css3logo, techName: "CSS" },
        { logo: bootstraplogo, techName: "Bootstrap" },
        { logo: jslogo, techName: "JS" },
      ],
    },
    {
      id: "5",
      logo: recipelogo,
      desc: "A mobile application that hosts recipes.",
      resimler: [recipeapp1, recipeapp2],
      logolar: [
        { logo: reactlogo, techName: "React Native" },

      ],
    },
  ];
export default {
  PROJECTS,
}



 