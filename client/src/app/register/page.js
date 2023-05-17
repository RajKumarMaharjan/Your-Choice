import Image from 'next/image'
import Link from 'next/link'

const Home=()=> {
  return (
    <div>
    <input placeholder="enter your first name"/>
    <input placeholder="enter your Last name"/>
    <input placeholder="enter your mobile number"/>
    <input placeholder="enter your password"/>
    <input placeholder="re-type password"/>
    <button>Register</button>
    Already have an account yet? <Link href="/login"> Sing in</Link> Instead
    </div>
  )
}

export default Home;