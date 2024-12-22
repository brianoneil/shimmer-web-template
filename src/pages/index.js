import Head from 'next/head';
import { useEffect, useState } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check initial dark mode preference
    if (typeof window !== 'undefined') {
      const isDark = localStorage?.getItem('darkMode') === 'true' ||
        window.matchMedia?.('(prefers-color-scheme: dark)').matches;
      setDarkMode(isDark);
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage?.setItem('darkMode', newMode.toString());
  };

  return (
    <div className={`min-h-screen transition-colors duration-200 ${
      darkMode ? 'dark bg-gray-900' : 'bg-gradient-to-b from-gray-50 to-gray-100'
    }`}>
      <Head>
        <title>Web Project Starter Kit</title>
        <meta name="description" content="A modern web project starter kit with essential configurations" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="absolute top-4 right-4">
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          aria-label="Toggle dark mode"
        >
          {darkMode ? (
            <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" 
              />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          )}
        </button>
      </div>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Web Project Starter Kit
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Jump-start your web development with this pre-configured starter template
          </p>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              What&apos;s Included?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="space-y-2">
                <h3 className="font-medium text-gray-900 dark:text-white">Essential Setup</h3>
                <ul className="text-gray-600 dark:text-gray-300 space-y-1">
                  <li>✓ Next.js</li>
                  <li>✓ Environment Configuration</li>
                  <li>✓ TailwindCSS Styling</li>
                  <li>✓ ESLint & Prettier</li>
                </ul>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-medium text-gray-900 dark:text-white">Development Tools</h3>
                <ul className="text-gray-600 dark:text-gray-300 space-y-1">
                  <li>✓ Git Configuration</li>
                  <li>✓ VS Code Settings</li>
                  <li>✓ Development Scripts</li>
                  <li>✓ Basic Component Structure</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
              Getting Started
            </h2>
            
            <div className="bg-gray-800 text-gray-200 dark:bg-gray-700 dark:text-gray-100 p-4 rounded-lg text-left">
              <code>
                npm install<br />
                npm run dev
              </code>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300">
              Visit <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">http://localhost:3000</code> to see your app in action
            </p>
          </div>
        </div>
      </main>

      <footer className="text-center py-8 text-gray-500 dark:text-gray-400">
        <p>
          Built with modern web technologies to help you start your next project faster
        </p>
      </footer>
    </div>
  );
}
