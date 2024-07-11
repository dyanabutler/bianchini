import Image from "next/image";
import Gallery from "@/components/Gallery"
import Intro from "@/components/Intro";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
    <Intro />
    </main>
  );
}