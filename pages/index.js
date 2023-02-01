import Head from 'next/head'
import { Inter } from '@next/font/google'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import Image from "next/image";
import deved from "../public/dev-ed-wave.png";


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Mauricio Murta Porfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-white px-10'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-burtons'> developedbyed</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill className='cursor-pointer text-2xl'/>
              </li>
              <li><a className='bg-gradient-to-r from-cyan-500
               to-teal-500 bg-cyan-500 text-white px-4 py-2 
               rounded-md ml-8' href='#'>Resume</a></li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium'>Mauricio murta</h2>
            <h3 className='text-2xl py-2'>Developer and designer.</h3>
            <p className='text-md py-5 leading-8 text-gray-800'>
              I am a computer science student based in Dublin, 
              Interested in full stack development and cyber security.
            </p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
            <AiFillGithub/>
            <AiFillLinkedin/>
          </div>
          <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden'>
            <Image src={deved} layout='fill' objectFit='cover'/>
          </div>
        </section>
      </main>
    </>
  );
}
