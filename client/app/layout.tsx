
import type { Metadata } from "next";
import "@/shared/styles/globals.css";

export const metadata: Metadata = {
  title: "Zarin - Lüks Yüzükler",
  description: "Hassasiyet ve zarafetle üretilmiş olağanüstü yüzüklerini keşfedin",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="tr">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
