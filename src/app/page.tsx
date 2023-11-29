import Image from 'next/image'
import Link from 'next/link';

const nav = [
  {link: '/', text: 'Home'},
  {link: '#about', text: 'About'},
  {link: '#projects', text: 'Projects'},
  {link: '#skills', text: 'Skills'},
  {link: '#experience', text: 'Experience'},
  {link: '#contact', text: 'Contact'},
]

export default function Home() {
  return (
    <div className="grid place-items-center md:h-screen p-8">
      <div className="grid grid-cols-2 gap-y-8 gap-x-4">
        <div className="col-span-2 place-self-center relative">
          <Image src="/logo.svg" alt="Uchicchi" width={172} height={172} />

          <div className="absolute bottom-0 right-0 px-2 py-1 bg-white rounded-full shadow-sm border-[1px] text-2xl">👋</div>
        </div>
        <nav className="col-span-2 place-self-center">
          <ul className="flex flex-col items-center font-medium md:flex-row gap-x-2 gap-y-4">
            {
              nav.map((item, index) => (
                <li key={index}>
                  <Link href={item.link} className="hover:bg-[#f1b450] hover:text-[#fffef1] py-2 px-3 rounded-full transition-colors duration-150 ease-in-out">{item.text}</Link>
                </li>
              ))
            }
          </ul>
        </nav>
        <div className="col-span-2 text-center place-self-center">
          <h1 className="text-2xl max-w-2xl leading-[1.8] mb-4"><b className="font-medium">Hello, I&apos;m Masga.</b> I&apos;m a <b className="font-medium">Back End Developer</b> with <b className="font-medium"><del>...</del> years</b> of experience. I enjoy crafting <i>sites &amp; apps</i>. My focus is <span className="text-[#ff2d20] bg-gradient-to-r from-[#ff2d20] to-red-700 bg-clip-text text-transparent font-medium">Laravel</span> and <span className="text-[#149eca] bg-gradient-to-r from-[#149eca] to-sky-700 bg-clip-text text-transparent font-medium">React</span>.</h1>
          <div className="flex gap-x-2 justify-center">
            <div>Let&apos;s connect with me at</div>
            <Link href={'https://www.linkedin.com/in/masga/'} target="_blank" className="font-medium">LinkedIn</Link>
            <div>-</div>
            <Link href={'https://github.com/mxsgx'} target="_blank" className="font-medium">GitHub</Link>
          </div>
        </div>
        <div className="col-span-2 place-self-center text-center">
          <div className="flex gap-x-8">
            <div>
              <span className="block text-sm font-light mb-2">Built with</span>
              <Image src="/next.svg" alt="Next.js" title="Built with Next.js" width={100} height={64} className="opacity-50 hover:opacity-100 transition-all duration-500" />
            </div>
            <div>
              <span className="block text-sm font-light mb-2 text-center">Hosted on</span>
              <Image src="/vercel.svg" alt="Vercel" title="Hosted on Vercel" width={100} height={64} className="opacity-50 hover:opacity-100 transition-all duration-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
