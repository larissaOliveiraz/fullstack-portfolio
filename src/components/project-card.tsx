"use client";
import { Project } from "@/types/project";
import { Badge } from "./ui/badge";
import Image from "next/image";
import { useRouter } from "next/navigation";

type ProjectCardType = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardType) {
  const router = useRouter();

  return (
    <div
      className="max-w-[20rem] p-4 transition-all border-2 rounded-2xl cursor-pointer hover:scale-105"
      onClick={() => router.push(`/projects/${project.id}`)}
    >
      <div className="mb-4">
        <Image
          src={project.image}
          alt=""
          width={290}
          height={200}
          className="rounded-lg"
        />
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-[1.25rem] font-semibold">{project.title}</h2>
        <div className="flex gap-2">
          {project.badge.map((item) => (
            <Badge key={item} variant={"outline"}>
              {item}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
