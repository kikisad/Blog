import NextLink from 'next/link';

export default function Header({ children }) {
  return (
    <div className="bg-white dark:bg-black">
      <nav className=" sm:sticky top-0 p-5 flex justify-between items-center w-full bg-white dark:bg-black bg-opacity-90">
        <div>
          <NextLink href="/">
            <a className="p-1 text-xl	font-bold sm:p-4 text-gray-900 dark:text-gray-100">Logo</a>
          </NextLink>
          <NextLink href="/apropos">
            <a className="p-1 sm:p-4 text-gray-900 dark:text-gray-100">
              A propos 
            </a>
          </NextLink>
          <NextLink href="/about">
            <a className="p-1 sm:p-4 text-gray-900 dark:text-gray-100">Podcast</a>
          </NextLink>
        </div>
        <button
          aria-label="Toggle Dark Mode"
          type="button"
          className="bg-gray-200 dark:bg-gray-800 rounded p-3 h-10 w-10"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
        </button>
      </nav>
      <main className="flex flex-col justify-center bg-white dark:bg-black px-8">
        {children}
      </main>
    </div>
  );
}







