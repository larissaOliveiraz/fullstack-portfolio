import { Project } from "@/types/project";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";
import Image from "next/image";

type ProjectCardType = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardType) {
  const custom = {
    bg: `bg-[${project.bg}]`,
    color: `text-[${project.color}]`,
  };

  return (
    <div
      style={{ backgroundColor: project.bg, color: project.color }}
      className="max-w-xs p-4 rounded-lg"
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
