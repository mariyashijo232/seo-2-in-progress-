import localFont from "next/font/local";
import "./globals.css";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route.js"; 
import Login from "./login"; 

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const queen = localFont({
  src: "./fonts/text.ttf"
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);
  console.log({ session });

  return (
    <html lang="en">
      <body className={geistMono.className}>
        {!session  && (
          <Login />
        )}
        {session && (
          <div> hello </div>// Corrected to just use children
        )}
      </body>
    </html>
  );
}
