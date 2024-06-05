"use client"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FC, SVGProps } from 'react'

interface QuickLink {
  href: string;
  label: string;
}

interface SocialLink {
  href: string;
  label: string;
  icon: FC<SVGProps<SVGSVGElement>>;
}

const quickLinks: QuickLink[] = [
  { href: "/home", label: "Home" },
  { href: "/about", label: "Meet the Artist" },
  { href: "/works", label: "View My Works" },
  { href: "/redirect-to-ig-shop", label: "Visit Shop" },
];


const Footer: FC = () => {
    return (
      <footer className="bg-gray-100 py-12 dark:bg-gray-800">
        <div className="container max-w-5xl px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <nav className="grid gap-2">
                {quickLinks.map((link, index) => (
                  <Link 
                    key={index} 
                    href={link.href} 
                    className="relative group text-sm font-medium hover:text-gray-900 dark:hover:text-gray-50 transition-colors"
                  >
                    <span className="relative z-10">{link.label}</span>
                    <span className="absolute bottom-0 left-0 h-0.5 w-full bg-gray-900 scale-x-0 group-hover:scale-x-100 transition-transform ease-in-out duration-300 dark:bg-gray-50" />
                  </Link>
                ))}
              </nav>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Follow Me</h3>
              <div className="flex items-center space-x-4">
                {socialLinks.map((link, index) => (
                  <Link key={index} href={link.href} aria-label={link.label} className="hover:text-red-700 text-gray-500 dark:text-gray-400 transition-colors duration-200">
                    <link.icon className="h-6 w-6" />
                  </Link>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact Me</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-500 dark:text-gray-300">
                      Name
                    </label>
                    <Input id="name" placeholder="Enter your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Enter your message" className="min-h-[120px]" />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row py-2 w-full shrink-0 items-center mt-4 px-4 md:px-4 border-t">
          <p className="text-xs text-gray-500 dark:text-gray-400">&copy; 2024 Bianchini Arts. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link href="/termsofservice" className="text-xs hover:underline underline-offset-4">
              Terms of Service
            </Link>
            <Link href="/privacypolicy" className="text-xs hover:underline underline-offset-4">
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    )
  }
  
 

const FacebookIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

const InstagramIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

const XIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}

const socialLinks: SocialLink[] = [
    { href: "#", label: "X", icon: XIcon },
    { href: "#", label: "Instagram", icon: InstagramIcon },
    { href: "#", label: "Facebook", icon: FacebookIcon },
  ];

export default Footer
