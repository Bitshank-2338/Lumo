import type { Metadata } from "next";
import { LumoDemo } from "./LumoDemo";

export const metadata: Metadata = {
  title: "Lumo — Learn deeply. Move with direction.",
  description:
    "An AI learning workspace that turns source material into research, visual explanations, study plans, applications, and books.",
};

export default function Home() {
  return <LumoDemo />;
}
