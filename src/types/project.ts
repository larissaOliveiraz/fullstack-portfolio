export type Project = {
  id: number;
  type: "BACK" | "FRONT";
  title: string;
  badge: string[];
  stack: string[];
  tags: string[];
  image: string;
  introduction: string;
  features: string[];
  resources: ResourceType[];
};

type ResourceType = {
  endpoint: string;
  verb: "GET" | "POST" | "PUT" | "DELETE";
  auth: boolean;
  description: string[];
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
