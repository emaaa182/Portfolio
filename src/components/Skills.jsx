import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import Git from "../assets/Git.png";
import bootstrap1 from "../assets/bootstrap1.png"
import sass from "../assets/sass.png"
const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 7,
      src: Git,
      title: "Git",
      style:"shadow-orange-600"
    },
    {
      id:8,
      src:bootstrap1,
      title:"Bootstrap",
      style: "shadow-violet-600"
    },
    {
      id:9,
      src:sass,
      title:"Sass",
      style: "shadow-pink-400"
    }
  ];

  return (
    <div
      name="Conocimientos"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen "
    >
      <div className="max-w-screen-lg mx-auto  flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl flex justify-center font-bold border-b-4 border-gray-500 p-3 ">
            Conocimientos
          </p>
          <p className="py-6 flex justify-center" >Cuento con los siguientes conocimientos</p>
        </div>

        <div className="w-full grid grid-cols-3 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
