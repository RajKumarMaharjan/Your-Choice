import Image from 'next/image'
import Link from 'next/link';
const Home=()=> {
  return (
    <div>
    <input placeholder="enter your mobile number"/>
    <input placeholder="enter your password"/>
    <button>login</button>
    Already haven't an account yet? <Link href="/register"> Sing up</Link> Instead
    </div>
  )
}
 
export default Home;