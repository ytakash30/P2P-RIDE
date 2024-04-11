import Navbar from '../components/Navbar'
import Map from '../components/Map'
import LocationSelector from '../components/LocationSelector'
import Confirm from '../components/Confirm'
import { UberContext } from '../context/uberContext'
import { useContext } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import avatar from '../temp/avatar.jpg'
import { BsPerson } from 'react-icons/bs'
import Footer from '@/components/Footer'

const style = {
  wrapper: `h-screen w-screen flex flex-col`,
  rightMenu: `flex gap-3 items-center`,
  userImageContainer: `mr-2`,
  userImage: `h-10 w-10 mr-4 rounded-full p-px object-cover cursor-pointer`,
  loginButton: `flex items-center cursor-pointer rounded-full hover:bg-gray-200 px-4 py-1`,
   menuItem: `text-lg text-black font-medium flex items-center mx-4 cursor-pointer`,
  main: `h-full w-screen flex-1 z-10`,
  mapContainer: `flex-1 w-full h-full`,
  rideRequestContainer: ` h-[680px] w-[400px] ml-[1rem] py-[3rem] absolute top-20 left-0 flex flex-col justify-end z-20`,
  rideRequest: `h-full max-h-[700px] bg-white rounded-lg flex flex-col overflow-scroll`,
}

const Header1 = () => {
    const { currentAccount, connectWallet, currentUser } = useContext(UberContext)
  console.log(currentUser)
  return (
    <div className='flex justify-between border-b-2 border-gray-300 items-center h-22 px-10 '>  
 <Link href="/">
      <Image src='/logo2.jpeg' alt="logo" width={200} height={200} className="h-20 px-4"/></Link> 
      <div className="border-r border-gray-300 h-full flex w-50 ">
        <div className="border-r border-gray-300 w-48 h-full flex items-center px-2">
          <Image src={"/car.jpg"} alt="image" width={40} height={40} className="w-10 h-10 rounded-full mr-2" />
          <div >
          <Link href="/Booknow">
        <div>
          {/* 
            This div will navigate to BookRide.jsx when clicked 
            because it's wrapped with a Link component
          */}
          <h3 className="font-bold">Book Ride Now</h3>
            <p className="text-gray-400 text-xs line-clamp-1">Additional 10% off 1st ride</p>
        </div>
      </Link>
            {/* <h3 className="font-bold">Book Ride Now</h3>
            <p className="text-gray-400 text-xs line-clamp-1">Additional 10% off 1st ride</p> */}
          </div>
        </div>
        <div className="border-r border-gray-300 w-48 h-full flex items-center px-2">
          <Image src={"/join.jpg"} alt="image" width={40} height={40} className="w-10 h-10 rounded-full mr-2" />
          <div>
            <h3 className="font-bold">Join Us</h3>
            <p className="text-gray-400 text-xs line-clamp-1">Trusted by thousands of people</p>
          </div>
        </div>
        <div className="border-r border-gray-300 w-48 h-full flex items-center px-2">
          <Image src={"/about.png"} alt="image" width={40} height={40} className="w-10 h-10 rounded-full mr-2" />
          <div>
            <h3 className="font-bold">About us</h3>
            <p className="text-gray-400 text-xs line-clamp-1">Know about our company</p>
          </div>
        </div>
        <div className="border-r border-gray-300 w-48 h-full flex items-center px-2">
          <Image src={"/phone.jpg"} alt="image" width={40} height={40} className="w-10 h-10 rounded-full mr-2" />
          <div>
            <h3 className="font-bold">8800880080</h3>
            <p className="text-gray-400 text-xs line-clamp-1">Call us for help</p>
          </div>
        </div>
        <div className="flex items-center px-3 ">
        <div className={style.menuItem}>{currentUser.name?.split(' ')[0]}</div>
        
        <div className={style.userImageContainer}>
          <Image
            className={style.userImage}
            src={avatar}
            width={40}
            height={40}
          />
        </div>
        {currentAccount ? (
          <div>
            {currentAccount.slice(0, 6)}...{currentAccount.slice(39)}
          </div>
        ) : (
          <div className={style.loginButton} onClick={() => connectWallet()}>
            <BsPerson />
            <span className={style.loginText}>Log in</span>
          </div>
        )}
      </div>
      </div>
    </div>
  );
}

export default function BookRide() {
  return (
    <div className={style.wrapper}>
      <Header1 />
      <div className={style.main}>
        <Map />
      </div>
      <div className={style.rideRequestContainer}>
        <div className={style.rideRequest}>
          <LocationSelector />
          <Confirm />
        </div>
      </div>
      <Footer/>
    </div>
  )
}