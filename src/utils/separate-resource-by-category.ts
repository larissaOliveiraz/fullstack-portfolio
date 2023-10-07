import { ResourceType } from "@/types/project";

interface ItemByCategory {
  [key: string]: ResourceType[];
}

export function separateResourceByCategory(resources: ResourceType[]) {
  let itemsByCategory: ItemByCategory = {};

  resources.forEach((resource) => {
    if (!itemsByCategory[resource.category]) {
      itemsByCategory[resource.category] = [];
    }

    itemsByCategory[resource.category].push(resource);
  });

  const keys = Object.keys(itemsByCategory);

  const keyAndValue = keys.map((key) => {
    const value = itemsByCategory[key];
    return { key, value };
  });

  return keyAndValue;
}
