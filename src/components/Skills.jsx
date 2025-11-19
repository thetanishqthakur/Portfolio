const Skills = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Node.js",
    "Git",
    "Express.Js",
    "Next.Js",
    "API Integration",
    "MongoDb",
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-black to-purple-900 text-white px-10"
    >
      <h2 className="text-4xl font-bold mb-10 text-purple-300">Skills</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <div
            key={skill}
            className="p-4 bg-black/40 backdrop-blur-lg rounded-xl border border-purple-600 hover:scale-105 transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
