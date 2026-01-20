import Rinkesh_Image from "../assets/Rinkesh image.jpg";

const About = () => {
  return (
    <div
      id="about"
      name="about"
      className="w-full xl:h-screen md:h-30 bg-[#030519] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>

        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi, I’m Rinkesh. Nice to meet you feel free to explore my work.
            </p>
          </div>

          <div>
            <p id="user-detail-intro" className="text-lg">
              I’m a Full Stack Web Developer with around <strong>2 years of professional experience</strong>
              building scalable, production-ready web applications. I’ve worked
              on projects end to end from frontend architecture and state
              management to backend APIs, performance optimization, and cloud
              deployment.
              <br /><br />
              I enjoy working in collaborative team environments, taking
              ownership of features, and solving real-world problems that create
              meaningful impact. My core tech stack includes <strong>React.js,
              Next.js, TypeScript, Node.js, NestJS, Express.js, MongoDB,
              PostgreSQL, MySQL, AWS, Docker</strong>, along with modern UI tools
              like Tailwind CSS, shadcn/ui, Redux, Zustand, and TanStack.
            </p>
          </div>
        </div>

        <div style={{ marginTop: "5rem" }}>
          <img
            style={{ objectFit: "contain" }}
            className="home-img rounded-full xs:w-[200px] xs:h-[200px] md:w-[400px] md:h-[400px] bg-white"
            src={Rinkesh_Image}
            alt="Rinkesh Profile"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
