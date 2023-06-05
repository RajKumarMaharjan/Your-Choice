'use client';
import { useRouter } from 'next/navigation';
import '../../app/css/page.css'
const Home = () => {
  const router = useRouter();
  const handleRouting = (action) => {
    router.push(action)
  }

  return (
   
    <div className='body'>
         
      <div className='menuBar'>
    
       <ul>
        <li>
          Home
        </li>
        <li>
          Catagories
        </li>
        <li>
          About us
        </li>
       </ul>
       <div className='singingBtn'>
        <button onClick={() => handleRouting('/login')}>Login</button>
        <button onClick={() => handleRouting('/register')}>Register</button>
        </div>
        </div>
      <h2>
        Product catagories
      </h2>
      <div className='product'>
        Product image A
      </div>
    </div>
  )
}

export default Home
