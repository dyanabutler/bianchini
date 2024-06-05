"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { FC, SVGProps } from 'react'

interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  { href: "/home", label: "Home" },
  { href: "/works", label: "View My Works" },
  { href: "/about", label: "Meet the Artist" },
  
];

const HeaderComponent: FC = () => {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center sticky top-0 bg-white bg-opacity-75 justify-between">
      <Link href="#" className="flex items-center gap-2">
        <MountainIcon className="h-6 w-6" />
        <span className="font-semibold tracking-tighter">B I A N C H I N I</span>
      </Link>
      <nav className="hidden lg:flex gap-6">
        {navLinks.map((link, index) => (
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
      <div className="hidden lg:block">
        <Link href="/redirect-to-ig-shop">
          <Button>Visit Shop</Button>
        </Link>
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <div className="grid gap-2 py-6">
            {navLinks.map((link, index) => (
              <Link key={index} href={link.href} className="flex w-full items-center py-2 text-lg font-semibold">
                {link.label}
              </Link>
            ))}
            <Link href="/get-started" className="flex w-full items-center py-2 text-lg font-semibold">
              Get Started
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  )
}

const MenuIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}

const MountainIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}

export default HeaderComponent
