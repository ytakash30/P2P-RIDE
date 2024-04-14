import { useState, useEffect } from 'react';
import Link from 'next/link';
import { client } from '../lib/sanity'; // Import client from sanity
import Image from 'next/image'
import avatar from '../temp/avatar.jpg'
import { BsPerson } from 'react-icons/bs'
import { useContext } from 'react'
import { UberContext } from '../context/uberContext'
import Header from '@/components/Header';
import Footer from '@/components/Footer';


const style = {
  wrapper: `h-16 w-full bg-black text-white flex md:justify-around items-center px-60 fixed z-20`,
  leftMenu: `flex gap-3`,
  logo: `text-3xl text-white flex cursor-pointer mr-16`,
  menuItem: `text-lg text-white font-medium flex items-center mx-4 cursor-pointer`,
  rightMenu: `flex gap-3 items-center`,
  userImageContainer: `mr-2`,
  userImage: `h-10 w-10 mr-4 rounded-full p-px object-cover cursor-pointer`,
  loginButton: `flex items-center cursor-pointer rounded-full hover:bg-[#333333] px-4 py-1`,
  loginText: `ml-2`,
}


const query = `*[_type == "trips"] {
  _id,
  pickup,
  dropoff,
  price,
  rideTimestamp,
  confirmation,
  passenger {
    name,
  }
} | order(rideTimestamp desc)`; // Modified query with ordering


const AvailableRides = () => {
  const [rides, setRides] = useState([]);
  const [topRides, setTopRides] = useState([]);
  const { connectWallet, currentAccount, currentUser } = useContext(UberContext);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);   


  useEffect(() => {
    const fetchData = async () => {
      const response = await client.fetch(query);
      const topRides = response.slice(0, 4); // Select first 4 based on ordering
      setRides(response);
      setTopRides(topRides);
      console.log('Fetched rides:', response);
    };

    fetchData();
  }, []);

const handleConfirm = async (rideId) => {
    try {
      const updatedRides = topRides.map(ride => {
        if (ride._id === rideId) {
          return { ...ride, confirmation: true ,driverWalletAddress: currentAccount  };
        }
        return ride;
      });
  
      setTopRides(updatedRides);
  
      await fetch('/api/db/updateConfirmation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          rideId: rideId ,
          confirmation:true ,
          driverWalletAddress:currentAccount,
        }),
      });
  
      console.log('Confirmation updated successfully!');
      // Optionally emit event for real-time updates
    } catch (error) {
      console.error('Error updating confirmation:', error);
    }
  };
  
  
  

  return (
    <div>
        <Header/>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ padding: '20px', fontFamily: 'Anton, sans-serif', fontSize: '35px' }}>Available Rides</h1>
        
      </header>
      <div>
        {topRides.length > 0 ? (
          topRides.map((ride) => (
            <div key={ride._id} style={{ margin: '20px 0', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
              <h3>{ride.dropoff ? ride.dropoff : 'No trip title provided'}</h3>
              <p><strong>Source:</strong> {ride.pickup ? ride.pickup : 'No pickup location'}</p>
              <p><strong>Destination:</strong> {ride.dropoff ? ride.dropoff : 'No dropoff location'}</p>
              <p><strong>Price:</strong> {ride.price ? `$${ride.price}` : 'Price not available'}</p>
              <button onClick={() => handleConfirm(ride._id)} style={{ padding: '10px 20px', borderRadius: '4px', cursor: 'pointer', backgroundColor: '#4CAF50', color: 'white' }}>Confirm</button>
            </div>
          ))
        ) : (
          <p>No more available rides.</p>
        )}
      </div>
      <Footer/>
    </div>
  );
};

export default AvailableRides;


