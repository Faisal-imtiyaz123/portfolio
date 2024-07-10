"use client"
import { githubBase, projectsData } from "@/utils/data/projects-data";
import GlowCard from "../../helper/glow-card";
import { BsGithub } from "react-icons/bs";
import Image from "next/image";
import { skillsImage } from "@/utils/skill-image";
import Link from "next/link";
import { Globe } from "lucide-react";

const Projects = () => {
  return (
    <div id="projects" className="relative z-50  my-12 lg:my-24">
      <div className="sticky top-10">
        <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl  opacity-30"></div>
        <div className="flex items-center justify-start relative">
          <span className="bg-[#1a1443] absolute left-0  w-fit text-white px-5 py-3 text-xl rounded-md">
            PROJECTS
          </span>
          {/* <span className="w-full h-[2px] bg-[#1a1443]"></span> */}
        </div>
      </div>

      <div className="pt-24">
        <div className="grid grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <div
              id={`sticky-card-${index + 1}`}
              key={index}
              className="sticky-card w-full mx-auto max-w-2xl sticky"
            >
              <GlowCard
                key={project.id}
                identifier={`experience-${project.id}`}
              >
                <div className="p-4 ">
                  <Image
                    src="/blur-23.svg"
                    alt="Hero"
                    width={1080}
                    height={200}
                    className="absolute bottom-0 opacity-80"
                  />
                  <div className="flex flex-col gap-8 p-2">
                    <div className="flex flex-col gap-8">
                      <span className="text-xl">{project.name}</span>
                      <p className="h-[3rem]">{project.description}</p>
                    </div>
                    <p className="flex gap-4">
                      {" "}
                      {project.tools.map((tool, index) => (
                        <Image
                          key={index}
                          src={skillsImage(tool)?.src}
                          alt={tool}
                          width={24}
                          height={24}
                        />
                      ))}
                    </p>
                    <div className="flex gap-6">
                    <Link
                      href={`${githubBase}${project.github}`}
                      className=" transition-all  hover:scale-150 duration-300 text-pink-500 z-[100] "
                    >
                      <BsGithub size={24} />
                    </Link>       
                    <Link className="z-[100] transition-all text-pink-500 hover:scale-150 duration-300" href={project.live||""}>
                    <Globe color="#ec4899"/>
                    </Link>
                    </div>
                  </div>
                  {/* <div className="flex p-2">
                        <p className="text-xs sm:text-sm text-[#16f2b3]">
                          {experience.duration}
                        </p>
                      </div>
                      <div className="flex items-center gap-x-8 px-3 py-5">
                        <div className="text-violet-500  transition-all duration-300 hover:scale-125">
                          <BsPersonWorkspace size={36} />
                        </div>
                        <div>
                          <p className="text-base sm:text-xl mb-2 font-medium">
                            {experience.title}
                          </p>
                          <p className="text-sm sm:text-base">
                            {experience.company}
                          </p>
                        </div>
                      </div> */}
                </div>
              </GlowCard>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
