import ProjectCard from "@/components/project-card";
import { projects } from "@/db/projects";

export default function Projects() {
  return (
    <div className="mt-5">
      <h1 className="text-[2rem]  uppercase font-semibold">
        Back-end Projects
      </h1>

      <section className="flex gap-5 mt-5">
        {projects.map(
          (project) =>
            project.type === "BACK" && (
              <ProjectCard key={project.id} project={project} />
            )
        )}
      </section>
    </div>
  );
}
