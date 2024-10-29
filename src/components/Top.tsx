import React from 'react'
import Image from 'next/image'
import image1 from "../../public/img1.png"
import image2 from "../../public/img2.png"
import image3 from "../../public/img3.png"
import { FaLongArrowAltRight } from "react-icons/fa";
const Top = () => {
  return (
    <div>
    <div className='lg:w-[1160px] w-[500px] mt-44 lg:-mb-36 mb-48 lg:ml-20 text-white h-[720px] py-10 gap-11 flex lg:flex-row flex-col justify-between lg:px-32 px-9'>
    <div >
        <Image src={image1} alt='ok' className='lg:w-[320px] w-[220px] lg:h-[400px] h-[200px] px-2 block lg:hidden '/>
    </div>

        <div className='py-5'>
        <h2 className='lg:w-[268px] lg:h-[22px] font-bold  text-yellow-600 '>________ ＧＥＴ ＳＴＡＲＴＥＤ</h2>
        <h1 className='w-[555px] h-[154px] font-semibold lg:text-4xl  text-2xl text-white mt-8'>𝐖𝐡𝐚𝐭 𝐥𝐞𝐯𝐞𝐥 𝐨𝐟 𝐡𝐢𝐤𝐞𝐫 < br/> 𝐚𝐫𝐞 𝐲𝐨𝐮?</h1>
        <p className='text-sm lg:w-[450px] w-[250px] h-[156px] font-normal lg:text-[13px] text-[10px] -mt-12 '>Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderated, expert or expert backpacker?</p>
        <h2 className='text-yellow-600 lg:-mt-7 flex'>read more <FaLongArrowAltRight className='w-11 mt-[6px]'/> </h2>
        </div>
        <div >
        <Image src={image1} alt='ok' className='w-[320px] h-[400px] lg:block hidden '/>
        </div>
    </div>


    <div className='lg:w-[1160px] w-[500px] lg:-mb-36 lg:mt-0 -mt-48 lg:ml-20 text-white h-[720px] py-10 gap-11 lg:flex justify-between lg:px-32 px-9'>
        <div >
        <Image src={image2} alt='ok' className='lg:w-[320px] w-[220px] lg:h-[400px] h-[200px] px-2  '/>
        </div>
        <div className='-mr-40'>
        <h2 className='lg:w-[268px] lg:h-[22px] font-bold  text-yellow-600 '>________ ＧＥＴ ＳＴＡＲＴＥＤ</h2>
        <h1 className='w-[555px] h-[154px] font-semibold lg:text-4xl  text-2xl text-white mt-8'>𝐖𝐡𝐚𝐭 𝐥𝐞𝐯𝐞𝐥 𝐨𝐟 𝐡𝐢𝐤𝐞𝐫 < br/> 𝐚𝐫𝐞 𝐲𝐨𝐮?</h1>
        <p className='text-sm lg:w-[450px] w-[250px] h-[156px] font-normal lg:text-[13px] text-[10px] -mt-12 '>Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderated, expert or expert backpacker?</p>
        <h2 className='text-yellow-600 lg:-mt-7 flex'>read more <FaLongArrowAltRight className='w-11 mt-[6px]'/> </h2>
        </div>
    </div>





    <div className='lg:w-[1160px] w-[500px] -mb-36 lg:ml-20 text-white h-[720px] py-10 gap-11 lg:flex justify-between lg:px-32 px-9'>
    <div >
        <Image src={image3} alt='ok' className='lg:w-[320px] w-[220px] lg:h-[400px] h-[200px] px-2 block lg:hidden '/>
        </div>
        <div className='py-5'>
        <h2 className='lg:w-[268px] lg:h-[22px] font-bold  text-yellow-600 '>________ ＧＥＴ ＳＴＡＲＴＥＤ</h2>
        <h1 className='w-[555px] h-[154px] font-semibold lg:text-4xl  text-2xl text-white mt-8'>𝐖𝐡𝐚𝐭 𝐥𝐞𝐯𝐞𝐥 𝐨𝐟 𝐡𝐢𝐤𝐞𝐫 < br/> 𝐚𝐫𝐞 𝐲𝐨𝐮?</h1>
        <p className='text-sm lg:w-[450px] w-[250px] h-[156px] font-normal lg:text-[13px] text-[10px] -mt-12 '>Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderated, expert or expert backpacker?</p>
        <h2 className='text-yellow-600 lg:-mt-7 flex'>read more <FaLongArrowAltRight className='w-11 mt-[6px]'/> </h2>
        </div>
        <div >
        <Image src={image3} alt='ok' className='w-[320px] h-[400px] lg:block hidden'/>
        </div>
    </div>
    </div>
  )
}

export default Top
