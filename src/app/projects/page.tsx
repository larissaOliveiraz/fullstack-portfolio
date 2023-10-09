import ProjectCard from "@/components/project-card";
import { projects } from "@/db/projects";

export default function Projects() {
  return (
    <div className="flex flex-col gap-10 mt-5">
      <section>
        <h1 className="text-[2rem]  uppercase font-semibold">
          Back-end Projects
        </h1>

        <div className="flex gap-5 mt-2">
          {projects.map(
            (project) =>
              project.type === "BACK" && (
                <ProjectCard key={project.id} project={project} />
              )
          )}
        </div>
      </section>

      <section>
        <h1 className="text-[2rem]  uppercase font-semibold">
          Front-end Projects
        </h1>

        <div className="flex gap-5 mt-5">
          {projects.map(
            (project) =>
              project.type === "FRONT" && (
                <ProjectCard key={project.id} project={project} />
              )
          )}
        </div>
      </section>
    </div>
  );
}
