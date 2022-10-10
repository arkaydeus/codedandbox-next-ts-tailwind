import Link from 'next/link'

export default function IndexPage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-slate-200 justify-center items-center">
      <div className="text-4xl">Hello World.</div>

      <Link href="/about">
        <a className="text-xl mt-8">About</a>
      </Link>
    </div>
  )
}
