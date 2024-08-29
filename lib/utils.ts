import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function hash(str: string) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }

  return hash;
}

export function formatDate(date: string, addRelative: boolean = false): string {
  const dateObj = new Date(date);
  
  const formattedDate = dateObj.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric"
  }).toLowerCase();

  if (!addRelative) {
    return formattedDate;
  }

  const now = new Date();
  const diffTime = now.getTime() - dateObj.getTime();
  const diffDays = Math.ceil(Math.abs(diffTime) / (1000 * 60 * 60 * 24));
  let timeAgo: string;

  if (diffDays < 30) {
    timeAgo = `${diffDays} day${diffDays !== 1 ? 's' : ''}`;
  } else if (diffDays < 365) {
    const diffMonths = Math.floor(diffDays / 30);
    timeAgo = `${diffMonths} month${diffMonths !== 1 ? 's' : ''}`;
  } else {
    const diffYears = Math.floor(diffDays / 365);
    timeAgo = `${diffYears} year${diffYears !== 1 ? 's' : ''}`;
  }

  const relativeTime = diffTime > 0 ? `${timeAgo} ago` : `in ${timeAgo}`;

  return `${formattedDate} (${relativeTime})`;
}

export function slugify(str: string) {
	return str
		.toString()
		.toLowerCase()
		.trim() // Remove whitespace from both ends of a string
		.replace(/\s+/g, "-") // Replace spaces with -
		.replace(/&/g, "-and-") // Replace & with 'and'
		.replace(/[^\w\\-]+/g, "") // Remove all non-word characters except for -
		.replace(/\\-\\-+/g, "-"); // Replace multiple - with single -
}