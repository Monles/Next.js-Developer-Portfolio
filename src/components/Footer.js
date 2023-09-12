import React from 'react'
import Link from 'next/link'
import Layout from './Layout'
import footer from './Footer.js'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg'>
      <Layout className='py-8 flex items-center justify-between'>
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className='flex items-center'>
          Build With
          <span className='text-purple-400 text-2xl px-1'>&#9825;</span>
          by&nbsp;
          <Link
            href='https://msha.ke/monles'
            className='underline underline-offset-2'
            target={'_blank'}>
            Yen
          </Link>
        </div>
        <Link href='https://msha.ke/monles' target={'_blank'}>
          Say Hello
        </Link>
      </Layout>
    </footer>
  )
}

export default Footer
