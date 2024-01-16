import { TPhoto } from ".";
import { TCraftsPerson } from "./craftsperson";

type TProductField = {
  craftsperson: {
    fields: TCraftsPerson;
  };
  description: string;
  id: number;
  photos: TPhoto[];
  title: string;
  dropbox: any; // json object?? not sure why this is useful.
}

export type TProduct = {
  fields: TProductField[]
}