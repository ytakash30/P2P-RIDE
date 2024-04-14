
import { client } from '../../../lib/sanity';

const saveDriver = async (req, res) => {
    try {
      const formData = req.body; // Assuming the form data is sent in the request body
  
      console.log('Received form data:', formData); // Log received data
  
      const driverDoc = {
        _type: 'Driver',
        name: formData.driverName,
        walletAddress: formData.walletAddress,
        carNumber: formData.carNumber,
        DrivingLicense: formData.driverLicenseNumber,
      };
  
      await client.create(driverDoc);
  
      return { message: 'Driver details saved successfully' };
    } catch (error) {
      console.error('Error saving driver details:', error); // Log entire error object
      throw new Error('Error saving driver details: ' + error.message);
    }
  };
  

    export default saveDriver;
