import React from 'react'
import Logo from '../../assets/Logo.png'

const Header = () => {
    return (
        <nav className='p-6'>
            <img
                className="h-6.5"
                src={Logo}
                alt="Logo"
            />

        </nav>
    )
}

export default Header
