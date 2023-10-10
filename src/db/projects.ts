import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "1",
    type: "BACK",
    title: "Gympass Fast",
    github: "https://github.com/larissaOliveiraz/gympass-solid-api",
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
      "Sign-up e sign-in do usuário na aplicação.",
      "Acessar informações do perfil do usuário. (Autenticado)",
      "Realizar check-in em uma academia. (Autenticado)",
      "Validar o check-in realizado. (Autenticado)",
      "Acessar o histórico e a contagem de check-ins realizados pelo usuário. (Autenticado)",
      "Cadastrar uma nova academia. (Autenticado)",
      "Pesquisar academias pelo nome ou pela proximidade. (Autenticado)",
    ],
    resources: [
      {
        id: "1",
        endpoint: "/me",
        category: "user",
        verb: "GET",
        auth: true,
        description: [
          "Essa rota permite que o usuário acesse todas as informações sobre sua conta.",
          "O usuário deve estar autenticado para utilizar essa rota.",
        ],
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
      {
        id: "2",
        endpoint: "/users",
        category: "user",
        verb: "POST",
        auth: false,
        description: [
          "Essa rota permite que o usuário crie sua conta",
          "Todos os campos da requisição são obrigatórios",
        ],
        request: {
          type: "BODY",
          body: [
            { field: "name", value: "Jane", required: true },
            { field: "email", value: "jane@example.com", required: true },
            { field: "password", value: "123", required: true },
          ],
        },
      },
      {
        id: "3",
        endpoint: "/sessions",
        category: "user",
        verb: "POST",
        auth: false,
        description: [
          "Essa rota permite que o usuário faça login com os dados da sua conta.",
          "Todos os campos da requisição são obrigatórios",
          "O e-mail e a senha informados devem ser válidos",
        ],
        request: {
          type: "BODY",
          body: [
            { field: "email", value: "jane@example.com", required: true },
            { field: "password", value: "123", required: true },
          ],
        },
        response: {
          status: "200",
          body: [{ field: "token", value: "token gerado pela API" }],
        },
      },
      {
        id: "4",
        endpoint: "/gyms",
        category: "gym",
        verb: "POST",
        auth: false,
        description: [
          "Essa rota é responsável pela criação de uma academia.",
          "Todos os campos da requisição são obrigatórios",
          "O usuário deve estar autenticado para utilizar essa rota.",
        ],
        request: {
          type: "BODY",
          body: [
            { field: "title", value: "Fit Gym", required: true },
            { field: "description", value: "Gym description", required: true },
            { field: "phone", value: "9999999999", required: true },
            {
              field: "latitude",
              value: "latitude da academia",
              required: true,
            },
            {
              field: "longitude",
              value: "longitude da academia",
              required: true,
            },
          ],
        },
      },
      {
        id: "5",
        endpoint: "/gyms/nearby",
        category: "gym",
        verb: "GET",
        auth: false,
        description: [
          "Essa rota é responsável por encontrar academias que estejam próximas ao usuário.",
          "Os campos 'latitude' e 'longitude' devem ser informados como queries da url.",
          "Todos os campos da requisição são obrigatórios",
          "O usuário deve estar autenticado para utilizar essa rota.",
        ],
        request: {
          type: "QUERY",
          body: [
            { field: "latitude", value: "-3126516", required: true },
            { field: "longitude", value: "-5648165", required: true },
          ],
        },
      },
      {
        id: "6",
        endpoint: "/gyms/search",
        category: "gym",
        verb: "GET",
        auth: false,
        description: [
          "Essa rota é responsável por encontrar academias de acordo com a pesquisa do usuário.",
          "Os campos 'q' e 'page' devem ser informados como queries da url.",
          "O campo page é responsável por fazer a paginação da pesquisa",
          "O usuário deve estar autenticado para utilizar essa rota.",
        ],
        request: {
          type: "QUERY",
          body: [
            { field: "q", value: "Fit Gym", required: true },
            { field: "page", value: "1", required: false },
          ],
        },
      },
      {
        id: "7",
        endpoint: "/gyms/:gymId/check-ins",
        category: "check-in",
        verb: "POST",
        auth: false,
        description: [
          "Essa rota é responsável por realizar o check-in em uma academia.",
          "É necessário informar, como paramêtro de rota, o id da academia na qual o usuário está fazendo o check-in",
          "Também é necessário informar a localização do usuário para que seja verificado se ele tem acesso aquela academia.",
          "O usuário deve estar autenticado para utilizar essa rota.",
        ],
        request: {
          type: "BODY",
          body: [
            {
              field: "latitude",
              value: "latitude da residência do usuário",
              required: true,
            },
            {
              field: "longitude",
              value: "longitude da residência do usuário",
              required: false,
            },
          ],
        },
      },
      {
        id: "8",
        endpoint: "/check-ins/:checkInId/validate",
        category: "check-in",
        verb: "POST",
        auth: false,
        description: [
          "Essa rota é responsável por validar o check-in.",
          "É necessário informar, como paramêtro de rota, o id do check-in a ser validado.",
          "O usuário deve estar autenticado para utilizar essa rota.",
          "Essa ação só pode ser efetuada por usuários com permissão de 'ADMIN'",
        ],
      },
      {
        id: "9",
        endpoint: "/check-ins/history",
        category: "check-in",
        verb: "GET",
        auth: true,
        description: [
          "Essa rota é responsável por exibir o histórico de check-ins do usuário.",
          "O usuário deve estar autenticado para utilizar essa rota.",
          "A resposta é uma lista com as informações de todos os check-ins que o usuário realizou.",
        ],
        response: {
          status: "200",
          body: [
            { field: "id", value: "9f4857d5-02b4-4e4f-8497-809559fe155b" },
            { field: "user_id", value: "0b0c6d4b-2d88-47ae-bd39-1f84891b05f1" },
            { field: "gym_id", value: "de240ca4-3185-4522-98d5-22f33461ff54" },
            { field: "created_at", value: "2023-10-04T18:35:24.383Z" },
            { field: "validated_at", value: "2023-10-04T18:35:24.383Z" },
          ],
        },
      },
      {
        id: "10",
        endpoint: "/check-ins/metrics",
        category: "check-in",
        verb: "GET",
        auth: true,
        description: [
          "Essa rota é responsável por exibir o quantidade de check-ins do usuário.",
          "O usuário deve estar autenticado para utilizar essa rota.",
        ],
        response: {
          status: "200",
          body: [{ field: "checkInsCount", value: "qtd de check-ins" }],
        },
      },
    ],
  },
];
