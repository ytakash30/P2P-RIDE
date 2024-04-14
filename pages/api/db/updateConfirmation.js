// updateConfirmation.js

import { client } from '../../../lib/sanity';

const updateConfirmation = async (req, res) => {
  try {
    const { rideId, driverWalletAddress } = req.body;

    await client
      .patch(rideId)
      .set({ confirmation: true, driverWalletAddress: driverWalletAddress })
      .commit();

    res.status(200).send({ message: 'success' });
  } catch (error) {
    res.status(500).send({ message: 'error', data: error.message });
  }
};

export default updateConfirmation;
