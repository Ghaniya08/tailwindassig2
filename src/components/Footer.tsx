import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black pb-40 text-white lg:flex gap-32 lg:px-60 px-11 lg:mt-0 '>
      <div className='flex bg-black flex-col'>
      <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <span className="ml-3 mb-5 scroll-m-20 lg:mt-0 mt-40 font-extrabold tracking-tight lg:text-2xl text-xl text-myWhite text-white">MNTN</span>
      </a>
    <h1 className='w-72'>Get out there & discover your next slope, mountain & destination</h1>
      <h1 className='mt-12 w-60 text-xs'>Copyright 2023 MNTN, Inc. Terms & Privacy</h1>
      </div>
      <div>
        <h1 className='text-yellow-600'>More on The Blog</h1>
        <ul>
            <li>About MNTN</li>
            <li>Controbuters & Writers</li>
            <li>Write For us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
        </ul>
      </div>
      <div>
        <h1 className='text-yellow-600'>More on MNTN</h1>
        <ul>
            <li>The Team</li>
            <li>Jobs</li>
            <li>Press</li>
        </ul>
      </div>
    </div>
)}
export default Footer
