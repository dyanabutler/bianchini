import Link from "next/link"
import { FC } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const RedirectPage: FC = () => {
  return (
    <div>
        <Navbar />
    <div className="flex flex-col items-center justify-center h-[75dvh] bg-white-100 dark:bg-gray-800 px-4 sm:px-6 md:px-8">
      <div className="max-w-md w-full space-y-6 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter text-gray-900 dark:text-gray-50 sm:text-4xl">
            Redirecting to Instagram Shop
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-base md:text-md">
            You are being redirected to an external website. Please click the button below to proceed.
          </p>
          
        </div>
        <Link
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-6 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          prefetch={false}
        >
          Go to External Website
        </Link>
        <p>
        <p className="text-gray-500 dark:text-gray-400 text-base md:text-lg">
            If you&apos;d like to purchase outside of the shop, please send an email through my contact form below.
          </p>
        </p>
    
      </div>
      
    </div>
    <Footer />
    </div>
  )
}

export default RedirectPage
