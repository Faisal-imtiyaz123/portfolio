
import { Inter } from "next/font/google";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
import ScrollToTop from "./components/helper/scroll-to-top";
import { Toaster } from "react-hot-toast";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio of Faisal Imtiyaz - Software Developer",
  description:
    "This is the portfolio of Faisal Imtiyaz. I am a full stack developer and a self taught developer. I love to learn new things and I am always open to collaborating with others. I am a quick learner and I am always looking for new challenges.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
        <Toaster />
          {children}
          <ScrollToTop />
        </main>
      </body>
    </html>
  );
}
