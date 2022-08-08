import React from "react";

const About = () => {
  return (
    <div
      name="Sobre mi"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline flex justify-center border-b-4 border-gray-500">
            Sobre mi
          </p>
        </div>

        <p className="text-xl mt-20">
        Soy Desarrollador Front End en formacion.
        Me gusta estudiar de forma autodidacta y aprender
        constantemente, tambien estudio formalmente en CODERHOUSE.
        </p>

        <br />

        <p className="text-xl">
          Mí objetivo es obtener mí primer
          experiencia laboral para poder desarrollar todo lo
          aprendido hasta el momento y también continuar
          expandiendo mis conocimientos.
        </p>
      </div>
    </div>
  );
};

export default About;
