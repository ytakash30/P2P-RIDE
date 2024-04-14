import { useState } from 'react';
import { useRouter } from 'next/router';

const SignupForm = ({ onClose }) => {
  const router = useRouter(); // Initialize the useRouter hook

  const [formData, setFormData] = useState({
    carNumber: '',
    driverLicenseNumber: '',
    walletAddress: '',
    driverName: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Inside handleSubmit function after successful form submission
     window.location.href = '/driver1';


    const formData = {
      carNumber: event.target.elements.carnumber.value,
      driverLicenseNumber: event.target.elements.driverLicenseNumber.value,
      walletAddress: event.target.elements.walletAddress.value,
      driverName: event.target.elements.driverName.value,
    };

    try {
      const response = await fetch('/api/db/saveDriver', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Error saving driver details: ${response.statusText}`);
      }

      const data = await response.json();
      console.log('Form data submitted successfully:', data);
      
      // Redirect to driver1.js after successful submission
      router.push('/driver1');

    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle errors appropriately, e.g., display error message to user
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <div style={{ maxWidth: '400px', width: '100%', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ textAlign: 'center' }}>Signup</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '16px' }}>
            <label htmlFor="carnumber">Car Number:</label>
            <input type="text" id="carnumber" name="carNumber" value={formData.carNumber} onChange={handleChange} style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} />
          </div>
          <div style={{ marginBottom: '16px' }}>
            <label htmlFor="driverLicenseNumber">Driver License Number:</label>
            <input type="text" id="driverLicenseNumber" name="driverLicenseNumber" value={formData.driverLicenseNumber} onChange={handleChange} style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} />
          </div>
          <div style={{ marginBottom: '16px' }}>
            <label htmlFor="walletAddress">Wallet Address:</label>
            <input type="text" id="walletAddress" name="walletAddress" value={formData.walletAddress} onChange={handleChange} style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} />
          </div>
          <div style={{ marginBottom: '16px' }}>
            <label htmlFor="driverName">Driver Name:</label>
            <input type="text" id="driverName" name="driverName" value={formData.driverName} onChange={handleChange} style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} />
          </div>
          <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#333', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', transition: 'background-color 0.3s ease' }}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
