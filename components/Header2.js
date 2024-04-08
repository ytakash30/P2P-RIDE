
import Link from 'next/link'; 

const Header2 = () => {
    return (
      <div className="h-80 flex justify-center items-center" style={{ backgroundImage: `url('/hero4.jpg')`, backgroundSize: 'cover' }}>
          <div className="mx-10 ">
              <h2 className="text-5xl font-bold text-white text-center" >"Moving Forward Together, Changing Lives"</h2>
              <div className="flex text-bold">
                <button className="h-10 my-5 hover:cursor-pointer text-white  mr-5 ">
                  Enjoy your first ride with us
                </button>
                <Link href="/Booknow">
                <button className="h-10 my-5 px-10 hover:cursor-pointer hover:bg-gray-600 border-2 border-white text-white rounded-2xl">
                  Book now
                </button>
                </Link>
              </div>
          </div>
      </div>
    );
  }

  export default Header2