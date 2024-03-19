import React from 'react'
import { appleImg, bagImg, heroImg, searchImg } from '../utils'
import { navLists } from '../constants'
const Navbar = () => {
  return (
    <header className='w-full py-4 sm:px-10 px-5 flex justify-between items-center mb-30'>
    <nav className='flex w-full screen-max-width'>
      <img src={appleImg} alt='Apple' width={14} height={15}/>
      <div className='flex flex-1 justify-center max-sm:hidden'>
        {navLists.map((nav)=>(
          <div key={nav} className='px-5 text-sm cursor-pointer text-slate-400 hover:text-slate-100 transition-all'>
            {nav}
          </div>
        ))}
      </div>
      <div className='flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1'>
        <img src={searchImg} alt='search' width={18} height={18}></img>
        <img src={bagImg} alt='bag' width={18} height={18}></img>
      </div>
    
    </nav>
    </header>
  )
}

export default Navbar