import Head from 'next/head';
import { useEffect, useState } from 'react';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        DND Management
      </main>

      <footer className="flex items-center justify-center w-full h-10 border-t">
        <a
          className="flex items-center justify-center"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Leon Web Designs, 2021
        </a>
      </footer>
    </div>
  );
}
