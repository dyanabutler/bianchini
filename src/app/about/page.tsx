import Link from "next/link"
import Image from "next/image"
import { FC } from "react"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import Brands from "@/components/Brands"

const About: FC = () => {
  return (
    <div>
        <Navbar /> 
    <div className="flex flex-col min-h-[100dvh]">
      <section className="w-full pt-12 md:pt-24 lg:pt-32 border-b">
        <div className="container px-4 md:px-6 space-y-10 xl:space-y-16">
          <div className="grid gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
            <div>
              <Image
                src="/placeholder.svg"
                width={550}
                height={550}
                alt="Artist"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
              />
            </div>
            <div className="flex flex-col items-start space-y-4">
              <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                Maria Bianchini
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Maria is a multidisciplinary artist based in Boston, MA. Her work explores the intersection of
                family, nature, and the human experience.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Brands />
      <main className="flex-1">
        <section className="w-full bg-white py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-[800px] space-y-6">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About the Artist</h2>
              </div>
              <div className="space-y-4">
                <p className="text-gray-500 dark:text-gray-400">
                 I&apos;m Maria Bianchini. I&apos;m Italian- brazilian, born in Brazil and lived in Italy for many years before moving to the United States.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                
My Artistic references are multicultural, from strong tropical colors to Italian gastronomic and architectural influences, from which I was inspired to develop my synesthetic and colorful design and style. 
My motivation is to awaken feelings of sensory immersion by connecting people with deep soul aspects of their psyche. 
I never leave a painting unsolved, I apply myself to the best results so I keep following it until I get the best visual effect that the material allows me.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                Painting helps me organize my inner chaos, because I feel and perceive the environment that surrounds me,it helps me to modulate my feelings and thoughts.
My motor skills are presented in the execution of the work. So my mind becomes more aware of such similar activities that help to relax my body, encouraging creativity and freedom of expression. It gives me the ability to explore new places and environments.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        
      </main>
     
      </div>
      
      <Footer /> 
    </div>
  )
}

export default About
