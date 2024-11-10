import React from 'react'

const page = () => {
  return (
    <div className='bg-black'>
      <section className="text-white body-font lg:px-14 ">
  <div className="container px-5 py-24 mx-auto flex lg:w-[1200px] lg:-ml-[365px]">
    <div className="lg:w-1/3 md:w-1/2 bg-yellow-600 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
      <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
        Feedback
      </h2>
      <p className="mb-5 text-white">
        Post-ironic portland shabby chic echo park, banjo fashion axe
      </p>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-white">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full bg-white rounded border border-gray-300   text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-white">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full bg-white rounded border border-gray-300 h-32 text-base outline-none text-white py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          defaultValue={""}
        />
      </div>
      <button className="text-yellow-600 bg-white border-0 py-2 px-6  rounded text-lg">
        SEND
      </button>
      <p className="text-xs text-white">
        Chicharrones blog helvetica normcore iceland tousled brook viral
        artisan.
      </p>
    </div>
  </div>
</section>
    
    </div>
  )
}

export default page
