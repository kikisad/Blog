import NextLink from 'next/link';

export default function Header({ children }) {
  return (
    <div className="bg-white ">
      <nav className=" sm:sticky sticky-nav mt-3 pl-5 pr-9 lg:pl-4 flex justify-between items-center bg-white bg-opacity-90">
        <div class="flex flex-nowrap">
          <NextLink href="/">
            <a className="p-1 text-sm sm:text-xl font-bold sm:p-4 text-gray-900 ">Blog killian.</a>
          </NextLink>
          <NextLink href="/apropos" >
            <p className="animation">
                <a href="#" className="p-1 pl-5 pr-3 text-sm sm:text-base	 pb-5 sm:p-4 text-gray-900 ">
                    À propos
                    <svg viewBox="0 0 70 36">
                        <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
                    </svg>
                </a>
            </p>
          </NextLink>
          <NextLink href="https://anchor.fm/plustard">
          <p className="animation">
                <a href="#" className="hidden p-1 pl-3 pr-3 text-sm sm:text-base	pb-5 sm:p-4  text-gray-900 ">
                    Podcast
                    <svg viewBox="0 0 70 36">
                        <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
                        
                    </svg>
                </a>
            </p>
          </NextLink>
        </div>
      </nav>
      <main className="flex flex-col justify-center bg-white dark:bg-black px-8">
        {children}
      </main>
    </div>
  );
}







