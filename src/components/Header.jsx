import React from 'react'
import { RiShoppingCartLine, RiHeart2Line } from "react-icons/ri";

const Header = () => {
  return (
    <header className='text-gray-400 py-4 px-10 flex justify-between items-center bg-[#181A20] z-40'>
      {/* Menu */}
      <ul className='flex items-center gap-6'>
        <li>
          <a href="" className='hover:text-[#E58D27] transition-colors'>Home</a>
        </li>
        <li>
          <a href="" className='hover:text-[#E58D27] transition-colors'>Streams</a>
        </li>
        <li>
          <a href="" className='text-[#E58D27] transition-colors'>Game store</a>
        </li>
        <li>
          <a href="" className='hover:text-[#E58D27] transition-colors'>News</a>
        </li>
      </ul>

      {/* User Menu */}
      <ul className='flex items-center gap-6 text-xl'>
        <li>
          <button className='hover:text-[#E58D27] transition-colors'><RiShoppingCartLine /></button>
        </li>
        <li>
          <button className='hover:text-[#E58D27] transition-colors'><RiHeart2Line /></button>
        </li>
        <li>
          <button><img src="https://img.freepik.com/foto-gratis/imagen-medio-perfil-apuesto-joven-caucasico-buena-piel-ojos-marrones-cabello-negro-elegante-barba-incipiente-posando-aislada-contra-pared-blanco-mirando-frente-sonriendo_343059-4560.jpg" className='w-8 h-8 object-cover rounded-full ring-2 ring-[#E58D27]'/></button>
        </li>
      </ul>
    </header>
  )
}

export default Header