export default function Content() {
  return (
    <div className="relative z-50 pb-10 lg:static lg:pb-0">
      <div className="h-24"/>
      <p className="uppercase text-neutral-800 max-w-sm mx-auto text-lg font-normal leading-[1.7em] text-center uppercase lg:absolute lg:right-3 lg:top-23 lg:text-left z-50 lg:text-md xl:text-lg hidden lg:block">
        A distributed operating system for <strong className="font-normal bg-red text-white px-0.5">intent-centric</strong>{' '}
        applications. Introducing a new era of apps where you define the outcomes you want.
      </p>
      <div className="z-50 flex flex-col items-center mt-2 right-4 lg:scale-90 lg:absolute lg:bottom-8 xl:scale-100 xl:bottom-10">
        <div className="scale-[0.9] sm:scale-100 relative w-96 h-72 ">
          <i className="absolute bg-grid dark:bg-grid-dark top-0 left-0 z-10 w-full h-full mx-auto bg-center bg-no-repeat bg-contain pointer-events-none"></i>
          <ul>
            <li className="absolute top-[227px] left-[1px]">
              <a
                href="https://twitter.com/anoma"
                target="_blank"
                title="twitter"
                className="flex items-center justify-center text-3xl text-white w-[55px] h-[57px] bg-neutral-800  dark:text-neutral-800 dark:bg-neutral-50 hover:bg-lime dark:hover:bg-red dark:hover:text-white hover:text-black duration-100"
                rel="noreferrer">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  role="img"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg">
                  <title></title>
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
                </svg>
              </a>
            </li>
            <li className="absolute top-[61px] left-[55px]">
              <a
                href="https://github.com/anoma"
                target="_blank"
                title="github"
                className="flex items-center justify-center text-3xl text-white w-[55px] h-[57px] bg-neutral-800  dark:text-neutral-800 dark:bg-neutral-50 hover:bg-lime dark:hover:bg-red dark:hover:text-white hover:text-black duration-100"
                rel="noreferrer">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  role="img"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg">
                  <title></title>
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                </svg>
              </a>
            </li>
            <li className="absolute top-[61px] left-[274px]">
            </li>
            <li className="absolute top-[172px] left-[274px]">
              <a
                href="https://research.anoma.net/"
                target="_blank"
                title="forum"
                className="flex items-center justify-center text-3xl text-white w-[55px] h-[57px] bg-neutral-800  dark:text-neutral-800 dark:bg-neutral-50 hover:bg-lime dark:hover:bg-red dark:hover:text-white hover:text-black duration-100"
                rel="noreferrer">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  role="img"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg">
                  <title></title>
                  <path d="M12.103 0C18.666 0 24 5.485 24 11.997c0 6.51-5.33 11.99-11.9 11.99L0 24V11.79C0 5.28 5.532 0 12.103 0zm.116 4.563c-2.593-.003-4.996 1.352-6.337 3.57-1.33 2.208-1.387 4.957-.148 7.22L4.4 19.61l4.794-1.074c2.745 1.225 5.965.676 8.136-1.39 2.17-2.054 2.86-5.228 1.737-7.997-1.135-2.778-3.84-4.59-6.84-4.585h-.008z"></path>
                </svg>
              </a>
            </li>
            <li className="absolute top-[118px] left-[110px]">
              <a
                className="px-6 py-4 text-xl text-white uppercase bg-red hover:bg-lime hover:text-black transition-color duration-100 flex items-center px-[43px] py-[15px] h-[55px] overflow-hidden"
                href="/blog">
                Medium
              </a>
            </li>
            <li className="absolute bottom-[7px] right-[55px] z-10">
              <a
                className="px-6 py-4 text-xl text-white uppercase bg-red hover:bg-lime hover:text-black transition-color duration-100 flex items-center pl-[30px] pr-[24px] py-[14px] h-[53px] overflow-hidden"
                href="/talks">
                Swap
              </a>
            </li>
          </ul>
        </div>
        <a
          href="https://github.com/anoma/whitepaper/blob/main/whitepaper.pdf"
          target="_blank"
          className="mt-12 text-2xl leading-snug text-center uppercase  text-red hover:!text-lime-700  transition-colors duration-100"
          rel="noreferrer">
          Whitepaper <div className="text-xs ">(Pre-release)</div>
        </a>
        <hr className="w-full h-0.5 bg-red mt-6 lg:hidden" />
        <a
          href="/whitepaper.pdf"
          target="_blank"
          className="pt-10 text-lg leading-snug text-center uppercase text-red hover:!text-lime-700 lg:mt-1 xl:mt-0 transition-colors duration-100 "
          rel="noreferrer">
          Vision Paper
        </a>
        <div className="w-[95%] mt-16 lg:mt-7 xl:mt-4.5 max-w-sm lg:self-start"></div>
      </div>
      <div/>
    </div>
  )
}
