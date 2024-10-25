import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const isOdd = (number: number) => number % 2 !== 0;

export const truncateString = (str: string, maxLength = 240): string => {
  // Check if the string is longer than the maxLength
  if (str.length > maxLength) {
    // Return the string truncated to the specified length with "..." at the end
    return str.slice(0, maxLength) + "...";
  }
  // If the string is shorter or equal, return it as is
  return str;
};
