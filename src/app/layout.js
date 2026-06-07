import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
});

export const metadata = {
  title: "BooKnook",
  description: "Study room booking platform",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${josefinSans.className}  h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar></Navbar>
        <main>{children}</main>
        <ToastContainer />
        <Footer></Footer>
      </body>
    </html>
  );
}
