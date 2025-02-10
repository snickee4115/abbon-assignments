import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const openCurrentLocation = () => {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        window.open(`https://www.google.com/maps?q=${latitude},${longitude}`, "_blank");
      },
      (error) => {
        console.error("Error getting location:", error);
        window.open("https://www.google.com/maps?q=13.7563,100.5018", "_blank");
      }
    );
  } else {
    console.error("Geolocation is not supported by this browser.");
  }
};
