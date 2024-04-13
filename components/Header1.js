import React, { useContext } from 'react';
import Image from 'next/image';
import avatar from '../temp/avatar.jpg';
import { BsPerson } from 'react-icons/bs';
import { UberContext } from '../context/uberContext';
import Link from 'next/link';

const style = {
  wrapper: `flex justify-between border-b-2 border-gray-300 items-center h-22 px-10`,
  menuItem: `text-lg text-black font-medium flex items-center mx-4 cursor-pointer`,
  rightMenu: `flex gap-3 items-center`,
  userImageContainer: `mr-2`,
  userImage: `h-10 w-10 mr-4 rounded-full p-px object-cover cursor-pointer`,
  loginButton: `flex items-center cursor-pointer rounded-full hover:bg-gray-200 px-4 py-1`,
};

const Header1 = () => {
  const { currentAccount, connectWallet, currentUser } = useContext(UberContext);

  return (
    <div className={style.wrapper}>
      <Link href="/">
        <Image src="/logo2.jpeg" alt="logo" width={200} height={200} className="h-20 px-4" />
      </Link>
      <div className="border-r border-gray-300 h-full flex w-50 ">
        <div className="border-r border-gray-300 w-48 h-full flex items-center px-2">
          <Image src="/car.jpg" alt="image" width={40} height={40} className="w-10 h-10 rounded-full mr-2" />
          <div>
            <Link href="/Booknow">
              <div>
                <h3 className="font-bold">Book Ride Now</h3>
                <p className="text-gray-400 text-xs line-clamp-1">Additional 10% off 1st ride</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="border-r border-gray-300 w-48 h-full flex items-center px-2">
          <Image src="/join.jpg" alt="image" width={40} height={40} className="w-10 h-10 rounded-full mr-2" />
          <div>
            <h3 className="font-bold">Join Us</h3>
            <p className="text-gray-400 text-xs line-clamp-1">Trusted by thousands of people</p>
          </div>
        </div>
        <Link href="/about">
        <div className="border-r border-gray-300 w-48 h-full flex items-center px-2">
          <Image src="/about.png" alt="image" width={40} height={40} className="w-10 h-10 rounded-full mr-2" />
          <div>
            <h3 className="font-bold">About us</h3>
            <p className="text-gray-400 text-xs line-clamp-1">Know about our company</p>
          </div>
          </div>
          </Link>


          <Link href="/ContactUs">
  <div className="border-r border-gray-300 w-48 h-full flex items-center px-2" style={{ cursor: 'pointer' }}>
    <Image src="/phone.jpg" alt="image" width={40} height={40} className="w-10 h-10 rounded-full mr-2" />
    <div>
      <h3 className="font-bold">Contact Us</h3>
      <p className="text-gray-400 text-xs line-clamp-1">Email us for help</p>
    </div>
  </div>
</Link>


        <div className="flex items-center px-3 ">
          <div className={style.menuItem}>{currentUser.name?.split(' ')[0]}</div>

          <div className={style.userImageContainer}>
            <Image className={style.userImage} src={avatar} width={40} height={40} />
          </div>
          {currentAccount ? (
            <div>{currentAccount.slice(0, 6)}...{currentAccount.slice(39)}</div>
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
};

export default Header1;
