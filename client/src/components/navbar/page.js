import React from 'react';
import Image from 'next/image'
import Logo from '../images/your-choice.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Navbar=()=>{
    return(
        <>
         <div className='header'>
       <Image src={Logo} alt="logo" width={100}/>
       <input className='search' />
       <div className='chart'>
       <FontAwesomeIcon icon={faCartShopping} />
       </div>
      </div>
        </>
    )
}
export default Navbar