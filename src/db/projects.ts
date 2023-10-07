import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "1",
    type: "BACK",
    title: "Gympass Fast",
    badge: ["API", "Fastify", "Typescript", "Node.js"],
    stack: [
      "Typescript",
      "Node.js",
      "Fastify",
      "Javascript",
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
    image: "/gympass.jpg",
    introduction:
      "Essa API se baseia nas funcionalidades do benefício comporativo 'gympass'. Ela oferece a possibilidade de acessar academias próximas ao usuário por meio de passes de entrada.",
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
        id: "1",
        endpoint: "/me",
        verb: "GET",
        auth: true,
        description: [],
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
