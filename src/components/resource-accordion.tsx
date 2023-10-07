"use client";
import { ResourceType } from "@/types/project";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { useEffect, useState } from "react";

type ResourceAccordionType = {
  resource: ResourceType;
};

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
          <AccordionContent>{resource.verb}</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
