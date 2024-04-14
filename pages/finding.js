import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Header1 from '@/components/Header1';
import Footer from '@/components/Footer';

const HomePage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const response = await fetch('/api/db/getTopTrip');
        if (!response.ok) {
          throw new Error('Failed to fetch top trip');
        }
        const data = await response.json();
        
        console.log('Top trip data:', data); // Log the fetched data
        
        // Check if confirmation is true
        if (data.confirmation === true) {
          console.log('Confirmation is true. Redirecting...'); // Log the redirection
          clearInterval(interval); // Stop the interval
          router.push('/ridefound'); // Redirect to ridefound.js
        }
      } catch (error) {
        console.error('Error fetching top trip:', error);
      }
    }, 4000); // Fetch data every 4 seconds
  
    return () => clearInterval(interval); // Cleanup function
  }, []);
  
  
  return (
    <div>
        <Header1/>
    <div style={styles.container}>
      <div style={styles.box}>
        <h1>Please Wait !!</h1>
        <div style={styles.buttons}>
          <button style={{ ...styles.button, ...styles.disabled }} disabled>Finding Drivers...</button>
        </div>
      </div>
      
    </div>
    <Footer/>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '85vh',
  },
  box: {
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    textAlign: 'center',
  },
  buttons: {
    marginTop: '20px',
  },
  button: {
    padding: '10px 20px',
    margin: '0 10px',
    fontSize: '16px',
    textDecoration: 'none',
    color: '#fff',
    background: '#0070f3',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  disabled: {
    background: '#999',
    cursor: 'not-allowed',
  },
};

export default HomePage;
