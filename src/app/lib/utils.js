import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/** shadcn */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
