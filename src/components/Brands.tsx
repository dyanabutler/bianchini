import Image from "next/image"
import { FC } from "react"

const Component: FC = () => {
  return (
    <section className="w-full py-12 md:py-16 lg:py-8 bg-black">
      <div className="container flex items-center justify-center gap-8 px-4 md:px-6">
        <Image src="/placeholder.svg" width={120} height={60} alt="Logo" className="aspect-[2/1] object-contain" />
        <Image src="/placeholder.svg" width={120} height={60} alt="Logo" className="aspect-[2/1] object-contain" />
        <Image src="/placeholder.svg" width={120} height={60} alt="Logo" className="aspect-[2/1] object-contain" />
        <Image src="/placeholder.svg" width={120} height={60} alt="Logo" className="aspect-[2/1] object-contain" />
        <Image src="/placeholder.svg" width={120} height={60} alt="Logo" className="aspect-[2/1] object-contain" />
      </div>
    </section>
  )
}

export default Component