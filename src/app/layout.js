import { inter, outfit } from "@/styles/fonts";
import "./globals.css";

export const metadata = {
  title: "Nexus3D — Immersive Web Experiences",
  description:
    "A cutting-edge Next.js application featuring 3D scenes with React Three Fiber, smooth animations with Framer Motion, and responsive design with TailwindCSS.",
  keywords: ["Next.js", "React Three Fiber", "3D", "Framer Motion", "TailwindCSS"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${outfit.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
