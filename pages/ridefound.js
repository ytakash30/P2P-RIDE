import Map from '../components/Map'
import { useEffect, useState } from 'react'

const RideFounds = () => {
  const [rideData, setRideData] = useState(null)

  // Assuming you have a function to fetch ongoing ride data from an API
  useEffect(() => {
    const fetchRideData = async () => {
      try {
        const response = await fetch('API_ENDPOINT_TO_FETCH_RIDE_DATA')
        const data = await response.json()
        setRideData(data)
      } catch (error) {
        console.error('Error fetching ride data:', error)
      }
    }

    fetchRideData()
  }, [])

  return (
    <div className="container">
      <div className="left-side">
        <div className="map-container">
          <Map />
        </div>
      </div>
      <div className="right-side">
        <div className="ride-details">
          <h2>Ongoing Ride</h2> 
                                                           
            <div>
              <p>Source:</p>
              <p>Destination: </p>
              <p>Trip Price: </p>
            </div>
        
          <button disabled>Make Payment</button>
        </div>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          justify-content: space-between;
          margin: 50px auto;
          max-width: 1200px;
          text-align: center;
        }

        .left-side {
          flex: 1;
        }

        .right-side {
          flex: 1;
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 8px;
        }

        .ride-details {
          margin-bottom: 30px;
        }

        .map-container {
          height: 400px; /* Adjust height as needed */
        }

        button {
          padding: 10px 20px;
          background-color: #0070f3;
          color: #fff;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        button:disabled {
          background-color: #999;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  )
}

export default RideFounds


// import Map from '../components/Map'
// import { useEffect, useState } from 'react'

// const RideFounds = () => {
//   const [rideData, setRideData] = useState(null)

//   // Assuming you have a function to fetch ongoing ride data from an API
//   useEffect(() => {
//     const fetchRideData = async () => {
//       try {
//         const response = await fetch('API_ENDPOINT_TO_FETCH_RIDE_DATA')
//         const data = await response.json()
//         setRideData(data)
//       } catch (error) {
//         console.error('Error fetching ride data:', error)
//       }
//     }

//     fetchRideData()
//   }, [])

//   return (
//     <div className="container">
//       <div className="left-side">
//         <div className="map-container">
//           <Map />
//         </div>
//       </div>
//       <div className="right-side">
//         <div className="ride-details">
//           <h2>Ongoing Ride</h2> 
//           {rideData ? (                                                    
//             <div>
//               <p>Source: {rideData.source}</p>
//               <p>Destination: {rideData.destination}</p>
//               <p>Trip Price: ${rideData.price}</p>
//             </div>
//           ) : (
//             <p>Loading...</p>
//           )}
//           <button disabled>Make Payment</button>
//         </div>
//       </div>

//       <style jsx>{`
//         .container {
//           display: flex;
//           justify-content: space-between;
//           margin: 50px auto;
//           max-width: 1200px;
//           text-align: center;
//         }

//         .left-side {
//           flex: 1;
//         }

//         .right-side {
//           flex: 1;
//           padding: 20px;
//           border: 1px solid #ccc;
//           border-radius: 8px;
//         }

//         .ride-details {
//           margin-bottom: 30px;
//         }

//         .map-container {
//           height: 400px; /* Adjust height as needed */
//         }

//         button {
//           padding: 10px 20px;
//           background-color: #0070f3;
//           color: #fff;
//           border: none;
//           border-radius: 5px;
//           cursor: pointer;
//         }

//         button:disabled {
//           background-color: #999;
//           cursor: not-allowed;
//         }
//       `}</style>
//     </div>
//   )
// }

// export default RideFounds
