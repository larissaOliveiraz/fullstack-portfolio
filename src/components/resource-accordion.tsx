"use client";
import { ResourceType } from "@/types/project";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import Bullet from "./bullet";
import { JetBrains_Mono } from "next/font/google";

type ResourceAccordionType = {
  resource: ResourceType;
};

const codeFont = JetBrains_Mono({ subsets: ["latin"] });

const colorVerbs = [
  { name: "GET", color: "#DCFCE7" },
  { name: "POST", color: "#DBEAFE" },
  { name: "PUT", color: "#FFEDD5" },
  { name: "DELETE", color: "#FEE2E2" },
];

export default function ResourceAccordion({ resource }: ResourceAccordionType) {
  const [bg] = colorVerbs.filter((item) => item.name === resource.verb);

  return (
    <div>
      <Accordion type="single" collapsible>
        <AccordionItem
          value={`${resource.id}`}
          style={{ backgroundColor: bg.color }}
        >
          <AccordionTrigger>
            <div className="flex gap-2">
              <p className="font-semibold ">{resource.verb} </p>
              <p>{resource.endpoint}</p>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-5">
              <div>
                <h3 className="font-semibold text-[1rem] mb-1">Descrição</h3>
                <ul className="flex flex-col gap-1">
                  {resource.description.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-[1rem]"
                    >
                      <Bullet /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              {resource.request && (
                <div>
                  <h3 className="font-semibold text-[1rem] mb-1">
                    Request - {resource.request.type}
                  </h3>
                  <div
                    className={`${codeFont.className} bg-slate-900 text-gray-300 p-4 rounded-lg`}
                  >
                    {"{"}
                    {resource.request.body &&
                      resource.request.body.map((item) => (
                        <div key={item.field} className="flex gap-2 ml-5">
                          <p>{`"${item.field}"`}:</p>
                          <p>{item.value}</p>
                        </div>
                      ))}
                    {"}"}
                  </div>
                </div>
              )}

              {resource.response && (
                <div>
                  <h3 className="font-semibold text-[1rem] mb-1">
                    Response - {resource.response.status}
                  </h3>
                  <div
                    className={`${codeFont.className} bg-slate-900 text-gray-300 p-4 rounded-lg`}
                  >
                    {"{"}
                    {resource.response.body &&
                      resource.response.body.map((item) => (
                        <div key={item.field} className="flex gap-2 ml-5">
                          <p>{`"${item.field}"`}:</p>
                          <p>{item.value}</p>
                        </div>
                      ))}
                    {"}"}
                  </div>
                </div>
              )}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
