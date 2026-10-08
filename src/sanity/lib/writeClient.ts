import "server-only";
import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "@/sanity/env";

export function createSanityWriteClient() {
  const token = process.env.SANITY_API_WRITE_TOKEN;
  if (!token) {
    throw new Error("SANITY_API_WRITE_TOKEN is missing on server");
  }

  return createClient({ projectId, dataset, apiVersion, token, useCdn: false });
}