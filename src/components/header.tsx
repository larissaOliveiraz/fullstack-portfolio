"use client";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Header() {
  const pathname = usePathname();

  const homePage = pathname === "/";
  const projectsPage = pathname === "/projects";

  return (
    <header className="flex items-center justify-between py-3">
      <h1 className="text-[2.5rem] font-bold">Larissa Oliveira</h1>
      <nav className="flex items-center gap-2 px-2 py-1 border-2 rounded-full">
        <Button
          asChild
          variant={"ghost"}
          size={"sm"}
          className={cn(homePage && "bg-main", "hover:opacity-90")}
        >
          <Link href="/" className="text-[1rem]">
            Home
          </Link>
        </Button>

        <Button
          asChild
          variant={"ghost"}
          size={"sm"}
          className={cn(projectsPage && "bg-main")}
        >
          <Link href="/projects" className="text-[1rem]">
            Projects
          </Link>
        </Button>

        <Button variant={"ghost"} size={"icon"}>
          <Link href="https://github.com/larissaOliveiraz">
            <Github />
          </Link>
        </Button>

        <Button variant={"ghost"} size={"icon"}>
          <Link href="https://www.linkedin.com/in/larissaoliveiraz/">
            <Linkedin />
          </Link>
        </Button>

        <Button variant={"ghost"} size={"icon"}>
          <Link href="mailto:oliveira.larissa.dv@gmail.com">
            <Mail />
          </Link>
        </Button>
      </nav>
    </header>
  );
}
