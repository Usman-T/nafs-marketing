import { BsRocketTakeoffFill, BsShieldLockFill } from "react-icons/bs";
import { PiSparkleFill } from "react-icons/pi";

import { IStats } from "@/types";
import { BiLock } from "react-icons/bi";

export const stats: IStats[] = [
  {
    title: "100%",
    icon: <BiLock size={34} />,
    description:
      "Your reflections are private and secure. No tracking. No third-party ads.",
  },
  {
    title: "7 Dimensions",
    icon: <PiSparkleFill size={34} />,
    description:
      "Track your spiritual growth across 7 powerful areas of the soul.",
  },
  {
    title: "Day 1",
    icon: <BsRocketTakeoffFill size={34} />,
    description:
      "You're early. This is just the beginning—and you're part of it.",
  },
];
