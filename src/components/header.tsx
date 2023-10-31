"use client";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Header() {
  const pathname = usePathname();

  const homePage = pathname === "/";
  const projectsPage = pathname.includes("/projects");

  return (
    <header className="flex items-center justify-between py-4 mb-5">
      <div className="flex items-center">
        <h1 className="text-[2rem] font-bold">Larissa Oliveira</h1>
        {/* <div className="w-[15rem] mt-1 h-[2px] -ml-[2px] bg-main" /> */}
      </div>

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
