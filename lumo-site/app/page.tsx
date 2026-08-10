import type { Metadata } from "next";
import {
  chatGPTSignInPath,
  chatGPTSignOutPath,
  getChatGPTUser,
} from "./chatgpt-auth";
import { LumoDemo } from "./LumoDemo";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Lumo — Learn deeply. Move with direction.",
  description:
    "An AI learning workspace that turns source material into research, visual explanations, study plans, applications, and books.",
};

export default async function Home() {
  const user = await getChatGPTUser();
  const workflow = user
    ? await import("../db/workflows").then(({ getUserWorkflow }) =>
        getUserWorkflow(user.userId),
      )
    : null;

  return (
    <LumoDemo
      authUser={user ? { displayName: user.displayName } : null}
      initialWorkflow={workflow}
      signInHref={chatGPTSignInPath("/member")}
      signOutHref={chatGPTSignOutPath("/")}
    />
  );
}
