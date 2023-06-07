import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image'
import Logo from '../images/your-choice.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux';
import BasicMenu from '../menu/page';

import '../../css/nav.css'

const Navbar=()=>{
  const router = useRouter();
  const {role}= useSelector(state=>state.user)
  const handleRouting = (action) => {
    router.push(action)
  }
    return(
        <>
         <div className='header'>
       <Image src={Logo} alt="logo" width={100}/>
       <input className='search' />
       <div className='chart'>
       <FontAwesomeIcon icon={faCartShopping} />
       </div>
       {! role ?(
         <div className='singingBtn'>
         <button onClick={() => handleRouting('/login')}>Login</button>
         <button onClick={() => handleRouting('/register')}>Register</button>
         </div>
       ):(
       <BasicMenu/>
       )}
      </div>
        </>
    )
}
export default Navbar