import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    title: "Gympass Fast",
    stack: [
      "Typescript",
      "Javascript",
      "Node.js",
      "Fastify",
      "PostgreSQL",
      "Prisma",
      "Vitest",
    ],
    tags: [
      "API",
      "S.O.L.I.D",
      "Rest",
      "JWT",
      "Zod Validation",
      "Unit Test",
      "E2E Test",
    ],
    introduction: "This API project allows the user to use gym-passes.",
    features: [
      "Sign-up and sign-in to the application.",
      "Access personal account details. (Authenticated)",
      "Check-in to a gym. (Authenticated)",
      "Validate check-in. (Authenticated)",
      "Access personal check-in count and history. (Authenticated)",
      "Register a new gym.",
      "Search gyms near you or by name. (Authenticated)",
    ],
    resources: [
      {
        endpoint: "/me",
        verb: "GET",
        auth: true,
        image: "",
        response: {
          status: "200",
          body: [
            { field: "id", value: "cdb6c0e0-ba35-44c4-ab32-0f4342d9d3f7" },
            { field: "name", value: "Jane" },
            { field: "email", value: "jane@example.com" },
            { field: "created_at", value: "2023-10-02T19:32:24.432Z" },
          ],
        },
      },
    ],
  },
];
