import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { experienceData } from "../data/data";
import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
  return (
    <div
      id="experience"
      name="experience"
      className="max-w-[1000px] mx-auto  p-4 w-full h-screen xs:h-full xs:pt-[100px] md:pt-[200px] lg:pt-52 lg:pb-40 xl:pt-0 bg-[#030519] text-gray-300"
    >
      <div className="pb-[6rem] xs:pb-[0rem]">
        <p className="text-4xl font-bold inline border-b-4 border-pink-600">
          Experience
        </p>
      </div>
      <div className="max-w-[1000px] mx-auto w-full h-screen xs:h-full xs:pt-[100px] md:pt-[200px] lg:pt-40 xl:pt-0 bg-[#030519] lg:flex flex-col justify-center items-center text-gray-300">
        <div>
          <VerticalTimeline>
            {experienceData.map((job) => (
              <ExperienceCard key={job.title} job={job} />
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

const ExperienceCard = ({ job }) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "17px solid #232631" }}
      iconStyle={{ background: job.iconBg }}
      date={job.date}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={job.image}
            alt={job.company}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{job.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {job.company}
        </p>
      </div>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {job.work.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

export default Experience;
