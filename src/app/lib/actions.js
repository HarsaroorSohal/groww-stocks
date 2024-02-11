"use server";

import { revalidatePath } from "next/cache";
/**
 * Currently not used anywhere
 * Helps with clearing up the cache
 */
export default async function revalidate(pathName) {
  revalidatePath(pathName);
}
