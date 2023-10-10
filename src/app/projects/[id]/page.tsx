import Bullet from "@/components/bullet";
import ResourceAccordion from "@/components/resource-accordion";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/db/projects";
import { separateResourceByCategory } from "@/utils/separate-resource-by-category";
import { randomInt, randomUUID } from "crypto";
import Link from "next/link";
import React from "react";

type ProjectType = {
  params: {
    id: string;
  };
};

export default function Project({ params }: ProjectType) {
  const [project] = projects.filter((item) => item.id === params.id);
  const organizedResources = separateResourceByCategory(project.resources);

  return (
    <div className="mt-5 w-[80%] m-auto mb-[5rem]">
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
        <h2 className="text-[1.75rem] font-semibold">Links</h2>
        <Link
          href={project.github}
          className="text-[1rem] mt-2 flex items-center gap-2 hover:underline"
        >
          <Bullet /> Repositório no Github
        </Link>
      </div>

      <div className="flex flex-col mt-10">
        <h2 className="text-[1.75rem] font-semibold">Introdução</h2>
        <p className="text-[1rem] mt-2">{project.introduction}</p>
      </div>

      <div className="mt-10">
        <h2 className="text-[1.75rem] font-semibold mb-2">Features</h2>
        {project.features.map((feature) => (
          <p key={feature} className="text-[1rem] flex items-center gap-2">
            <Bullet /> {feature}
          </p>
        ))}
      </div>

      <div className="mt-10">
        <h2 className="text-[1.75rem] font-semibold mb-2">Endpoints</h2>
        <div className="flex flex-col gap-2">
          {organizedResources.map((resource) => (
            <div key={randomUUID()} className="flex flex-col gap-2 mb-4">
              <div className="flex items-center gap-2">
                <Bullet />
                <h2 className="capitalize text-[1.25rem]">{resource.key}</h2>
              </div>
              {resource.value.map((item) => (
                <ResourceAccordion key={item.id} resource={item} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}
