import { Inter } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Learn Nextjs",
  description: "Learn Nextjs faster",
};

export default function RootLayout({ children, params: {session, ...params} }) {
  return (
    <html lang="en">
      <SessionProvider session={session}>
        <body className={`${inter.className} antialiased`}>{children}</body>
      </SessionProvider>
    </html>
  );
}
