import Image from 'next/image'

export default function Home() {
  return (
    <div className="grid place-items-center md:h-screen p-8">
      <div className="grid grid-cols-2 gap-y-8 gap-x-4">
        <div className="col-span-2 text-center">
          <h1 className="font-medium text-3xl">Welcome to website!</h1>
          <h2 className="font-light italic text-xl">ようこそ</h2>
        </div>
        <div className="col-span-2 place-self-center">
          <Image src="/logo.svg" alt="Uchicchi" width={256} height={256} />
        </div>
        <div className="place-self-center">
          <Image src="/next.svg" alt="Next.js" title="Build with Next.js" width={100} height={64} />
        </div>
        <div className="place-self-center">
          <Image src="/vercel.svg" alt="Vercel" title="Deploy on Vercel" width={100} height={64} />
        </div>
      </div>
    </div>
  );
}
