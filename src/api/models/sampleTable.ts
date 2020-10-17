import { getRepository } from "typeorm";
import { sampleTable } from "./entities/sampleTable";

// Queries - this should automagically pull the current connection
export function getSampleTableList() {
  return getRepository(sampleTable).find();
}