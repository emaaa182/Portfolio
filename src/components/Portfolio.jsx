import React from "react";
import climaApp from "../assets/portfolio/climaApp.png";
import toDoList from "../assets/portfolio/toDoList.png";
import calculadora from "../assets/portfolio/calculadora.png";
import relojjs from "../assets/portfolio/relojs-js.png";
import pokedex from "../assets/portfolio/pokedexApp.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: calculadora,
      nombre:"Calculadora",
      link:"https://calculadora-basica-demo.netlify.app/",
      link2:"https://github.com/emaaa182/basic-calculator-js"
    },
    {
      id: 2,
      src: toDoList,
      nombre:"Lista de Tareas",
      link:"https://lista-de-tareas-demo.netlify.app/",
      link2:"https://github.com/emaaa182/to-do-list"
    },
    {
      id: 3,
      src: relojjs,
      nombre:"Reloj Basico",
      link:"https://reloj-js-demo.netlify.app/",
      link2:"https://github.com/emaaa182/reloj-JS"
    },
    {
      id: 4,
      src: climaApp,
      nombre:"ClimaApi",
      link:"https://clima-app-demo.netlify.app/",
      link2:"https://github.com/emaaa182/weather-app-js"
    },
    {
      id: 5,
      src: pokedex,
      nombre:"PokedexApi",
      link:"https://pokedex-api-demo.netlify.app/",
      link2:"https://github.com/emaaa182/pokedex"
    },
  ];

  return (
    <div
      name="Portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-4">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,nombre, link,link2 }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <h3>{nombre}</h3>
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
              <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={link} target="blank">Demo</a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={link2} target="blank">Code</a>
                </button>
            
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
