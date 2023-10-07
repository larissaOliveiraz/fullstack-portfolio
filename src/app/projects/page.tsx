import ProjectCard from "@/components/project-card";
import { projects } from "@/db/projects";

export default function Projects() {
  return (
    <div className="mt-5">
      <h1 className="text-[2rem]  uppercase font-semibold">
        Front-end Projects
      </h1>

      <section className="mt-5">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>
    </div>
  );
}
