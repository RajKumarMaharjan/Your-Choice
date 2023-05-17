'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image'


const Home = () => {
  const router = useRouter();
  const handleRouting = (action) => {
    router.push(action)
  }
  return (
    <div>
      <div className='header'>
        Logo
        <button onClick={() => handleRouting('/login')}>Login</button>
        <button onClick={() => handleRouting('/register')}>Register</button>
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
