import Image from "next/image";
import Gallery from "@/components/Gallery"
import Intro from "@/components/Intro";
import HomePage from "@/components/Homepage";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main >
        <Navbar />
    <HomePage />
    <Footer />
    </main>
  );
}
