export type Project = {
  title: string;
  stack: string[];
  tags: string[];
  introduction: string;
  features: string[];
  resources: ResourceType[];
};

type ResourceType = {
  endpoint: string;
  verb: "GET" | "POST" | "PUT" | "DELETE";
  image: string;
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
