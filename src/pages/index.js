import { Geist, Geist_Mono } from "next/font/google";
import NavBar from "@/components/NavBar";
import Profile from "@/pages/Profile";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
      <Profile/>
    </>
  );
}
