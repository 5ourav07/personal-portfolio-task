"use client";
import Image from "next/image";
import { SectionContainer } from "../Utils/Containers";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectsData from "@/constants/ProjectsData";

const ProjectCard = ({ image, title, description }) => (
  <div className="flex flex-col items-center sm:items-start">
    <Image
      src={image || "/assets/images/my-project.png"}
      alt={title}
      width={445}
      height={489}
      className="w-full h-auto"
    />
    <p className="my-project-title mt-6">{title}</p>
    <p className="my-project-description text-center">{description}</p>
  </div>
);

export default function MyProjectsSection() {
  return (
    <div>
      <SectionContainer className="mb-[60px] sm:mb-[139px]">
        <div className="text-center">
          <p className="section-title">My Projects</p>
          <p className="section-description max-w-[936px] mx-auto">
            Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam
            mauris est risus lectus. Phasellus consequat urna tellus
          </p>
        </div>

        <div className="mt-[59px]">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="flex justify-center gap-[17px] flex-wrap">
              <TabsTrigger className="my-project-tab mr-[5px]" value="all">
                All
              </TabsTrigger>
              <TabsTrigger className="my-project-tab" value="ui-ux">
                UI/UX
              </TabsTrigger>
              <TabsTrigger className="my-project-tab" value="web-design">
                Web Design
              </TabsTrigger>
              <TabsTrigger className="my-project-tab" value="app-design">
                App Design
              </TabsTrigger>
              <TabsTrigger className="my-project-tab" value="graphics-design">
                Graphic Design
              </TabsTrigger>
            </TabsList>

            {Object.entries(ProjectsData).map(([category, projects]) => (
              <TabsContent key={category} value={category}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-11">
                  {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </SectionContainer>
    </div>
  );
}
