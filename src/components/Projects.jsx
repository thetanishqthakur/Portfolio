import React from "react";

import genuilogo from "../assets/genuilogo.png";


export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-10 text-center">My Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* --- GEN UI PROJECT CARD --- */}
          <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:scale-[1.03] transition-all duration-300 border border-gray-700">
            <img
              src={genuilogo}
              alt="GEN UI Preview"
              className="w-full h-48 object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">Gen-UI</h3>
              <p className="text-gray-300 text-sm mb-4">
                An AI-powered Code Generator that builds HTML, CSS, JS, and UI
                components instantly. Built with React, Tailwind, Monaco Editor,
                and Google Gemini API.
              </p>

              <div className="flex gap-3 mt-4">
                <a
                  href="https://gen-ui-puce.vercel.app/"
                  target="_blank"
                  className="px-4 py-2 bg-purple-600 hover:bg-purple-700 transition rounded-lg text-sm"
                >
                  Live Demo
                </a>

                <a
                  href="https://github.com/thetanishqthakur/GenUi/tree/main"
                  target="_blank"
                  className="px-4 py-2 bg-gray-700 hover:bg-gray-600 transition rounded-lg text-sm"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
