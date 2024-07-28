import { useState } from 'react'
import './App.css'

function App() {
  

  return (
    <>
      <main className='relative bg-darkCyan overflow-hidden w-full h-screen flex justify-center items-center'>
        <img className='absolute left-0 -top-1/2' src="/bg-pattern-top.svg" alt="Top Circle" />
        <img className='absolute -right-20 -bottom-1/2' src="/bg-pattern-bottom.svg" alt="Bottom Circle" />
        {/* Container of the card */}
        <section className='w-[300px] sm:w-[400px] bg-white z-50 rounded-lg'>
          <img className='w-full rounded-t-lg' src="/bg-pattern-card.svg" alt="Image" />
          {/* This section contain the card of the user */}
          <div className='w-full flex flex-col items-center pb-4'>
              {/* This div will contain the image */}
              <div className="relative h-[60px] flex justify-center w-full ">
                <img className='absolute -top-12  border-4 border-white rounded-full' src="/image-victor.jpg" alt="Avatar Images" />
              </div>
              <h1 className='text-black text-lg sm:text-xl font-bold'>Victor Crest <span className='text-darkGray font-medium'>26</span></h1>
              <p className='text-darkGray font-medium py-6 pt-1'>London</p>
              <div className="w-full py-4 flex justify-around border-t border-darkGrayish">

                <div className='text-center'>
                  <h1 className='text-black text-lg sm:text-xl font-bold'>80K</h1>
                  <p className='text-darkGray font-medium'>Followers</p>
                </div>

                <div className='text-center'>
                  <h1 className='text-black text-lg sm:text-xl font-bold'>803K</h1>
                  <p className='text-darkGray font-medium'>Likes</p>
                </div>

                <div className='text-center'>
                  <h1 className='text-black text-lg sm:text-xl font-bold'>1.4K</h1>
                  <p className='text-darkGray font-medium'>Photos</p>
                </div>

              </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
