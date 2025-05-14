import React from 'react'
import Logo from '../../assets/Logo.png'

const Header = () => {
    return (
        <nav>
            <img
                className="w-[180px] p-6"
                src={Logo}
                alt="DevBoard Logo"
            />

            <hr className='text-[#CAF0F8]' />
        </nav>
    )
}

export default Header
