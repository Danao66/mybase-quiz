import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MyBase - L'écosystème ultime de l'investisseur",
  description: "Accès anticipé aux 100 Membres Fondateurs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark h-full">
      <body className={`${inter.className} bg-gray-900 text-white min-h-full flex flex-col antialiased`}>
        {/* Réservé pour la détection Netlify Forms */}
        <form name="mybase-quiz" data-netlify="true" hidden>
          <input type="text" name="prenom" />
          <input type="text" name="nom" />
          <input type="email" name="email" />
          <input type="text" name="profession" />
          <input type="text" name="profile" />
        </form>
        {children}
      </body>
    </html>
  );
}
