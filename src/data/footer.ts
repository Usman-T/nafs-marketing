import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
  subheading: string;
  quickLinks: IMenuItem[];
  email: string;
  telephone?: string;
  socials: ISocials;
} = {
  subheading:
    "Helping Muslims grow spiritually through self-discipline, dhikr, and reflection.",
  quickLinks: [
    {
      text: "Features",
      url: "#features",
    },
    {
      text: "Stats",
      url: "#stats",
    },
    {
      text: "Get the App",
      url: "#cta",
    },
  ],
  email: "nafs.app.official@gmail.com",
  socials: {
    instagram: "https://www.instagram.com/nafs.app",
    facebook: "https://www.facebook.com/nafs.app",
    github: "https://www.github.com/Usman-T/nafs",
  },
};
