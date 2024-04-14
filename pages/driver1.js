import Link from 'next/link';

const HomePage = () => {
  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h1>Welcome to Our App</h1>
        <div style={styles.buttons}>
          <Link href="/signup">
            <button style={styles.button}>Signup</button>
          </Link>
          <Link href="/availablerides">
          <button style={styles.button} >Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
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
