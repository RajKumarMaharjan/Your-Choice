'use client';
import Navbar from '../navbar/page';

const Home = () => {
  return (
   
    <div className='body'>
         <Navbar/>
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
