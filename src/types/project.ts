export type Project = {
  id: string;
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

export type ResourceType = {
  id: string;
  endpoint: string;
  category: string;
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
