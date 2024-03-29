import React from "react";
import contarClicks from "../assets/portfolio/contarClicks.png";
import climaApp from "../assets/portfolio/climaApp.png";
import toDoList from "../assets/portfolio/toDoList.png";
import calculadora from "../assets/portfolio/calculadora.png";
import relojjs from "../assets/portfolio/relojs-js.png";
import pokedex from "../assets/portfolio/pokedexApp.png";
import climaReact from "../assets/portfolio/climaReact.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: contarClicks,
      nombre:"Contador de Clicks",
      link:"https://contarclicks.netlify.app/",
      link2:"https://github.com/emaaa182/contador-clicks-vanilla-js"
     
    },
    {
      id: 2,
      src: calculadora,
      nombre:"Calculadora",
      link:"https://calculadora-basica-demo.netlify.app/",
      link2:"https://github.com/emaaa182/basic-calculator-js"
    },
    
    {
      id: 3,
      src: toDoList,
      nombre:"Lista de Tareas",
      link:"https://lista-de-tareas-demo.netlify.app/",
      link2:"https://github.com/emaaa182/to-do-list"
    },
    {
      id: 4,
      src: relojjs,
      nombre:"Reloj Básico",
      link:"https://reloj-js-demo.netlify.app/",
      link2:"https://github.com/emaaa182/reloj-JS"
    },
    {
      id: 5,
      src: climaApp,
      nombre:"ClimaApi",
      link:"https://clima-app-demo.netlify.app/",
      link2:"https://github.com/emaaa182/weather-app-js"
    },
    {
      id: 6,
      src: pokedex,
      nombre:"PokedexApi",
      link:"https://pokedex-api-demo.netlify.app/",
      link2:"https://github.com/emaaa182/pokedex"
    },
    {
      id: 7,
      src: climaReact,
      nombre:"ClimaApi con searchBar",
      link:"https://climaapp-react-demo.netlify.app/",
      link2:"https://github.com/emaaa182/weather-app-reactjs"
    },

  ];

  return (
    <div
      name="Portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-6 " >
          <p className="text-4xl flex justify-center font-bold border-b-4 border-gray-500 p-3 ">
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
