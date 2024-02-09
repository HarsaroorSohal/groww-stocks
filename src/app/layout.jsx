import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import myStore from "./lib/store";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Groww Stonkies",
  description: "Please hire me",
};

export default function RootLayout({ children }) {
  console.log(myStore);
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        {/* <div className="h-screen w-full absolute inset-0 bg-gradient-to-b from-black to-blue-950 overflow-y-scroll"> */}
        <Header></Header>
        {children}
        {/* </div> */}
      </body>
    </html>
  );
}
