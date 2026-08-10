import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });
const mono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lumo — Learn deeply. Move with direction.",
  description: "A connected AI workspace for learning, research, revision, applications, and books.",
  metadataBase: new URL("https://lumo-learning-site.sites.openai.com"),
  openGraph: {
    title: "Lumo — Learn deeply. Move with direction.",
    description: "Turn sources into understanding, plans, and useful outcomes.",
    type: "website",
    images: [{ url: "/lumo-social.png", width: 1536, height: 1024, alt: "Lumo connects scattered learning sources into one clear path" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumo — Learn deeply. Move with direction.",
    description: "Turn sources into understanding, plans, and useful outcomes.",
    images: ["/lumo-social.png"],
  },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${geist.variable} ${mono.variable}`}>{children}</body></html>;
}
