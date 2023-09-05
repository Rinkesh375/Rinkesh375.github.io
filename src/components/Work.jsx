import React from "react";
import { data } from "../data/data.js";

const Work = () => {
  // projects file
  const project = data;
  //setProject(data);

  return (
    <div
      id="projects"
      name="work"
      className="w-full  sm:pt-10 md:pt-0 xl:pb-20 text-gray-300 bg-[#030519]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">
            I like to showcase my work and thus, you can see my projects hosted
            online. Each project is briefly described with links to code
            repositories and live demos in it.
          </p>
        </div>

        {/* container for projects */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 ">
          {/* Gird Item */}
          {project.map((item, index) => (
            <div
              className="project-card ease-in-out duration-300 hover:scale-105 "
              key={item.id}
              style={{
                backgroundImage:
                  "linear-gradient(to right,rgba(26, 37, 60, 0.8),hsla(243, 81%, 10%, 0.8))",
              }}
              // className="border-red-500  border-2 "
            >
              <div className="p-4">
                <img src={item.image} alt="" />
              </div>
              <div
                className="p-4"
                style={{
                  backgroundImage:
                    "linear-gradient(to right,rgba(26, 37, 60, 0.8),hsla(243, 81%, 10%, 0.8))",
                }}
              >
                <h3 className="project-title font-extrabold">{item.pName}</h3>
                <p className="project-description text-justify">
                  {item.pDesc.length > 150
                    ? item.pDesc.substring(0, 130) + "..."
                    : item.pDesc}
                </p>
                <div className="flex gap-2">
                  {item.tech.map((techStack, index) => {
                    return (
                      <p
                        key={techStack.color}
                        style={{ color: techStack.color }}
                        className={`mt-4 text-sm `}
                      >
                        {techStack.name}
                      </p>
                    );
                  })}
                </div>
                <div className="pt-8 text-center">
              
                  <a
                    className="project-github-link"
                    href={item.github}
                    target="_blank"
                  >
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                    >
                      Code
                    </button>
                  </a>
              
                  <a
                    className="project-deployed-link"
                    href={item.live}
                    target="_blank"
                  >
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                    >
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

export default Work;
