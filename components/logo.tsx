import { Mountain } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
        <Image src="/favicon.svg" alt="Logo" width={24} height={24} />
      </div>
      <span className="font-bold">Osele</span>
    </Link>
  )
}

