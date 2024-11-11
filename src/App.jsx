import ThreeCanvas from './ThreeCanvas'
import Lines from './Lines'
import Content from './Content'
import ThreeDots from './ThreeDots'

export default function App() {
  return (
    <main className="relative w-full max-w-full overflow-x-hidden lg:h-screen lg:overflow-hidden lg:min-h-[740px] bg-white">
      <div className="relative top-3 left-0 z-50 w-full pt-12 md:pt-2 px-3 lg:absolute lg:h-full pointer-events-none">
        <i className="flex justify-center w-20 mx-auto lg:w-24 lg:block lg:mx-0">
          <img src="/logo.svg" alt="logo" className="w-full h-full"/>
        </i>
        <i className="w-full max-w-[300px] rotate-90 block mx-auto mt-8 lg:hidden">
          <img src="/text.svg" alt="logo" className="w-full h-48"/>
        </i>
        <p className="uppercase text-neutral-800 max-w-sm mx-auto text-lg font-normal leading-[1.7em] text-center uppercase lg:absolute lg:right-3 lg:top-23 lg:text-left z-50 lg:text-md xl:text-lg mt-8 mb-4 lg:hidden">
          An <strong className="font-normal text-white bg-red px-0.5">intent-centric</strong> architecture decentralized
          counterparty discovery, solving, information flow control, and atomic multi‑chain settlement
        </p>
        <i className="absolute top-0 hidden w-24 h-[calc(100%-105px)] left-36 lg:flex items-center">
          <img src="/text.svg" alt="text" className="w-full h-full"/>
        </i>
      </div>
      <div className="top-0 left-0 z-30 w-full lg:h-full lg:absolute pointer-events-none">
        <div className="relative top-0 left-0 lg:absolute md:h-full w-full pointer-events-none">
          <ThreeCanvas />
        </div>
      </div>
      <div className="absolute z-40 top-0 left-0 w-full h-full bg-dots bg-[length:128px] pointer-events-none opacity-50"></div>
      <div className="fixed z-40 top-0 left-0 w-full h-full bg-noise bg-transparent bg-[length:100px] pointer-events-none"></div>
      <Lines />
      <nav className="fixed top-3 -left-4 w-full z-[100]">
        <ul className="flex items-center gap-2 md:gap-8 uppercase text-lg w-full h-full justify-center">
          <li>
            <a
              className="px-1.5 hover:bg-black text-white transition-color ease-out duration-150 bg-red"
              href="/">
              Home
            </a>
          </li>
          <li>
            <a
              className="px-1.5 hover:bg-black hover:text-white transition-color ease-out duration-150"
              href="/blog">
              Blog
            </a>
          </li>
          <li>
            <a
              className="px-1.5 hover:bg-black hover:text-white transition-color ease-out duration-150"
              href="/research">
              Twitter
            </a>
          </li>
          <li>
            <a
              className="px-1.5 hover:bg-black hover:text-white transition-color ease-out duration-150"
              href="/talks">
              Community
            </a>
          </li>
          <li>
            <a
              className="px-1.5 hover:bg-black hover:text-white transition-color ease-out duration-150"
              href="/rfc">
              Chart
            </a>
          </li>
          <li>
            <a
              className="px-1.5 hover:bg-black hover:text-white transition-color ease-out duration-150"
              href="/events">
              Swap
            </a>
          </li>
        </ul>
      </nav>
      <span className="mt-8 mb-6 block text-xl relative w-full text-center uppercase z-50 lg:mt-0 lg:mb-0 lg:text-2xl lg:absolute lg:bottom-14 lg:left-1/2 lg:translate-x-[-50%]">
        <span>
          <ThreeDots text="Building" />
        </span>
      </span>
      <Content />
      <footer className="w-full max-w-sm text-center px-container text-sm mx-auto mb-8 z-50 md:px-0 md:max-w-none lg:absolute lg:bottom-3 lg:left-0 lg:pl-8 lg:text-left lg:mb-0">
        © 2024{' '}
        <a className="underline hover:text-red-500" href="/" target="_blank" rel="noreferrer">Rubek</a>{' '}
        |{' '}
        <a className="underline hover:text-red-500" target="_blank" href="https://twitter.com/anoma">
          Twitter
        </a>{' '}
        |{' '}
        <a className="underline hover:text-red-500" target="_blank" href="https://anoma.foundation/press">
          Telegram
        </a>
      </footer>
    </main>
  )
}
