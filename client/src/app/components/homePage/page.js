'use client';
import NavBar from "../../components/navbar/page"
import '../../css/homepage.css'


const Home = () => {
  return (
    <div className='body'>
      <NavBar />
      <div className='menuBar'>
        <ul className="menulist">
          <li>
            Home
          </li>
          <li>
            Catagories
          </li>
          <li>
            Our services
          </li>
          <li>
            About us
          </li>
          <li>
            Contact us
          </li>
        </ul>
      </div>
    
    </div>
  )
}

export default Home
