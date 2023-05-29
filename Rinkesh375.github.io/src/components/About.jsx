import React from "react";



const About = () => {
  return (
    <div
      id="about"
      name="about"
      className="w-full xl:h-screen md:h-30   bg-[#030519] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p
              id="about"
              className="about section text-4xl font-bold inline border-b-4 border-pink-600"
            >
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Rinkesh , nice to meet you. Please take a look around.</p>
          </div>

          <div>
            <p id="user-detail-intro">
              A dedicated and ambitious Full Stack Web Developer seeking a
              role in an organization to utilize skills and experience to
              contribute to the success of the organization while
              continuously developing his knowledge and expertise. Strong
              desire to work in a collaborative and innovative environment.
              Proficient in developing websites using HTML, CSS, JavaScript,
              React, Redux, and Chakra UI.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
