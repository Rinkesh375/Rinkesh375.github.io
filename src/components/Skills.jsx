import { skillCategories } from "../constants/skills";

const Skills = () => {
  return (
    <div
      id="skills"
      name="skills"
      className="w-full min-h-screen xs:pt-20 sm:pt-10 bg-[#030519] text-gray-300"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
          <p className="py-4">These are the technologies I've worked with</p>
        </div>

        {skillCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-8">
            <h3 className="text-2xl font-semibold text-pink-500 mb-4">
              {category.title}
            </h3>
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 text-center">
              {category.skills.map((skill, index) => (
                <div
                  key={index}
                  className="skills-card bg-white/10 backdrop-blur-sm border border-gray-700 hover:border-pink-500 shadow-lg hover:shadow-pink-500/20 hover:scale-105 duration-300 p-6 rounded-lg transition-all"
                >
                  <div className="bg-white rounded-lg p-3 mb-3 flex items-center justify-center h-20">
                    <img
                      className="skills-card-img w-16 h-16 object-contain"
                      src={skill.img}
                      alt={`${skill.name} icon`}
                    />
                  </div>
                  <p className="skills-card-name text-sm font-medium">
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
