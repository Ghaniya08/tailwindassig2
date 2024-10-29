import React from 'react';
import { MdOutlineAccountCircle } from "react-icons/md";
import Link from "next/link";
const Nav = () => {
  return (
    <div>
      <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap lg:p-5 p-2 lg:ml-0 -ml-6 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <span className="ml-3 mb-5 scroll-m-20 font-extrabold tracking-tight lg:text-4xl text-2xl text-myWhite text-white">MNTN</span>
    </a>
    <div className="md:ml-auto cursor-pointer text-white text-[10px] lg:text-xl md:mr-auto flex gap-9 font-bold flex-wrap items-center justify-center">
      <ul className='flex  gap-9 font-bold flex-wrap'>
      <li className="mr-5  cursor-pointer"><Link href="/"> Equipment </Link> </li>
      <li className="mr-5 cursor-pointer"><Link href={"/about"} passHref> About us </Link> </li>
      <li className="mr-5 cursor-pointer"><Link href="/contact"> Contact </Link> </li>
      </ul>
    </div>
   <div>
  <h1 className=" items-center  py-1 px-3 lg:block hidden text-white font-bold mt-4 md:mt-0"><MdOutlineAccountCircle />Account</h1>
   </div>
  </div>
</header>
    </div>
  )
}
export default Nav;