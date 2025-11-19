import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-br from-black via-purple-900 to-black text-white"
    >
      <h1 className="text-5xl font-extrabold leading-snug">
        Hi, I'm <span className="text-purple-400">Tanishq</span> <br />A Web
        Developer
      </h1>
      <p className="mt-4 text-gray-300 max-w-xl">
        I build beautiful interfaces and modern web experiences using React,
        Tailwind CSS, and other powerful tools.
      </p>

      <a
        href="#projects"
        className="mt-6 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-lg rounded-lg shadow-lg transition-all"
      >
        View My Work
      </a>
    </section>
  );
};

export default Hero;
