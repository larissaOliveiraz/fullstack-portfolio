import { Badge } from "@/components/ui/badge";
import { projects } from "@/db/projects";
import React from "react";

type ProjectType = {
  params: {
    id: string;
  };
};

export default function Project({ params }: ProjectType) {
  const [project] = projects.filter((item) => item.id === params.id);

  return (
    <div className="mt-5 w-[80%] m-auto">
      <h1 className="text-[2.5rem] font-bold flex justify-center">
        {project.title}
      </h1>

      <hr className="h-[2px] mt-2 bg-main" />

      <div className="flex justify-center mt-4">
        <div className="flex gap-2 mt-2">
          {project.stack.map((tech) => (
            <Badge key={tech} variant={"outline"} className="text-sm">
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-3">
        <div className="flex gap-2 mt-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant={"outline"} className="text-sm">
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      <div className="flex flex-col mt-10">
        <h2 className="text-[1.75rem] font-semibold">Introdução</h2>
        <p className="text-[1rem] mt-2">{project.introduction}</p>
      </div>

      <div className="flex flex-col mt-10">
        <h2 className="text-[1.75rem] font-semibold mb-2">Features</h2>
        {project.features.map((feature) => (
          <p key={feature} className="text-[1rem] flex items-center gap-2">
            <div className="w-[5px] h-[5px] rounded-full bg-main" /> {feature}
          </p>
        ))}
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}
