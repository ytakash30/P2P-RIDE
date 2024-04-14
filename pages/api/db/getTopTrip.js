import { client } from '../../../lib/sanity';

const getTopTrip = async (req, res) => {
  try {
    // Fetch the topmost trip document from your database
    const query = `
      *[_type == "trips"] | order(rideTimestamp desc) [0] {
        confirmation,
        rideTimestamp
      }
    `;
    const topTrip = await client.fetch(query);

    console.log('Top trip:', topTrip); // Log the topTrip object

    res.status(200).json(topTrip);
  } catch (error) {
    console.error('Error fetching top trip:', error);
    res.status(500).json({ error: 'Error fetching top trip' });
  }
};

export default getTopTrip;
