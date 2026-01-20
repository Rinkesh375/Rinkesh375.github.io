import { data } from "../data/data.js";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const Projects = () => {
  const projects = data;

  return (
    <div
      id="projects"
      name="projects"
      className="w-full min-h-screen sm:pt-10 md:pt-20 xl:pb-20 text-gray-300 bg-[#030519]"
    >
      <div className="max-w-[1200px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Projects
          </p>
          <p className="py-6 text-lg">
            Check out some of my recent work. Each project is built with modern
            technologies and best practices, featuring clean code and responsive
            design.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2  gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-pink-500 hover:shadow-xl hover:shadow-pink-500/20 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="relative overflow-hidden h-48 bg-gray-800">
                <img
                  src={project.image}
                  alt={project.pName}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="project-title text-2xl font-bold mb-3 text-white group-hover:text-pink-400 transition-colors duration-300">
                  {project.pName}
                </h3>

                <p className="project-description text-gray-400 text-base mb-4 leading-relaxed">
                  {project.pDesc.length > 120
                    ? project.pDesc.substring(0, 120) + "..."
                    : project.pDesc}
                </p>

                <div className="flex flex-wrap gap-2 mb-6 text-lg">
                  {project.tech.map((techStack, index) => (
                    <span
                      key={index}
                      style={{
                        backgroundColor: `${techStack.color}20`,
                        borderColor: techStack.color,
                        color: techStack.color,
                      }}
                      className="px-3 py-1 text-xs font-semibold rounded-full border"
                    >
                      {techStack.name}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    className="project-github-link flex-1"
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="w-full flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 hover:scale-105">
                      <FiGithub className="text-lg" />
                      Code
                    </button>
                  </a>

                  <a
                    className="project-deployed-link flex-1"
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="w-full flex items-center justify-center gap-2 bg-pink-600 hover:bg-pink-500 text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 hover:scale-105">
                      <FiExternalLink className="text-lg" />
                      Live
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
