import Map from '@/components/Map';
import { useEffect, useState, useContext } from 'react';
import { UberContext } from '../context/uberContext'; // Update the path
import { ethers } from 'ethers'; // Import ethers library for Ethereum interactions
import {client } from '../lib/sanity'; // Import Sanity client
import Image from 'next/image'
import Footer from '@/components/Footer';
import Header1 from '@/components/Header1';
const style = {
  wrapper: `h-screen w-screen flex flex-col`,
  main: `h-full w-screen flex-1 z-10`,
  mapContainer: `flex-1 w-full h-full`,
  OngoingContainer: `h-full w-[350px] ml-[1rem] py-[3rem] absolute top-0 right-10 flex flex-col justify-end z-20`,
  rideRequest: `padding: 10px h-full max-h-[500px] bg-black rounded-lg flex flex-col font-bold border-2 border-black border-double text-white`,
  button: `
  padding: 10px 20px;
  background-color: #0070f3;
  color: #fff;
  border: 2px solid #fff; /* White border */
  border-radius: 5px;
  cursor: pointer;
`,
}



const RideFounds = () => {
  const [rideData, setRideData] = useState(null);
  const { metamask } = useContext(UberContext);

  useEffect(() => {
    const fetchRideData = async () => {
      try {
        const data = await client.fetch(query);
        setRideData(data[0]); // Since you're fetching one record, use data[0]
      } catch (error) {
        console.error('Error fetching ride data:', error);
      }
    };

    fetchRideData();
  }, []);

  const handleConfirm = async () => {
    if (!rideData) return;

    try {
      await metamask.request({
        method: 'eth_sendTransaction',
        params: [
          {
            from: rideData.riderWalletAddress,
            to: rideData.driverWalletAddress,
            gas: '6721975', // 520000 Gwei
            value: ethers.utils.parseEther(rideData.price.toString())._hex,
          },
        ],
      });
    } catch (error) {
      console.error('Error initiating transaction:', error);
    }
  };

  const query = `*[_type == "trips"] {
    _id,
    pickup,
    dropoff,
    price,
    rideTimestamp,
    riderWalletAddress,
    driverWalletAddress
  } | order(rideTimestamp desc) [0..1]`; // Modified query with ordering and limiting to one record

  return (
    <div>
      <Header1/>
    <div className={style.wrapper}>
    <div className={style.main}>
      <Map />
    </div>
    <div className= {style.OngoingContainer} >
    <div className={style.rideRequest}>
  <div className="flex flex-col h-full justify-between"> {/* Updated parent div */}
    <div>
      <h2 className="text-xl mb-4 text-center">Ongoing Ride</h2>
      <div><Image src='/Journey.jpeg' alt="Ride" width={250} height={300} className="h-60 px-4 items-center" /></div>
      <div className="mt-10">
      {rideData ? (
        <div >
          <p>Source: {rideData.pickup}</p>
          <p>Destination: {rideData.dropoff}</p>
          <p>Trip Price: ${rideData.price}</p>
          <p className='mt-4'>"Make sure to pay only after Ride Ends"</p>
        </div>
        
      ) : (
        <p>Loading...</p>
      )}
      </div>
      </div>
    </div>
    <button onClick={handleConfirm} className={`${style.button} mt-4  `}>Make Payment</button>
  </div>
</div>
    </div>
    <Footer/>
  </div>

  );
};

export default RideFounds;
