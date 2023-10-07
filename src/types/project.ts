export type Project = {
  id: number;
  title: string;
  badge: string[];
  stack: string[];
  tags: string[];
  image: string;
  introduction: string;
  features: string[];
  resources: ResourceType[];
  bg: string;
  color: "#1c1c1c" | "#e2e2e2";
};

type ResourceType = {
  endpoint: string;
  verb: "GET" | "POST" | "PUT" | "DELETE";
  auth: boolean;
  request?: Request;
  response?: Response;
};

type Request = {
  type: "BODY" | "QUERY" | "ROUTE";
  body?: RequestBody[];
};

type Response = {
  status: string;
  body?: ResponseBody[];
  message?: string;
};

type RequestBody = {
  field: string;
  value: string;
  required: boolean;
};

type ResponseBody = {
  field: string;
  value: string;
};
