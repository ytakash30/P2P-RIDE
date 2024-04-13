import React from 'react';
import Link from 'next/link';

const style = {
    wrapper: {
      display: 'flex',
      justifyContent: 'space-between',
      borderBottom: '2px solid #D1D5DB',
      alignItems: 'center',
      height: '5.5rem',
      padding: '0 1.5rem',
    },
    menuItem: {
      fontSize: '1.25rem',
      color: '#000000',
      fontWeight: '500',
      display: 'flex',
      alignItems: 'center',
      margin: '0 0.75rem',
      cursor: 'pointer',
    },
    rightMenu: {
      display: 'flex',
      gap: '0.75rem',
      alignItems: 'center',
    },
    userImageContainer: {
      marginRight: '0.5rem',
    },
    userImage: {
      height: '2.5rem',
      width: '2.5rem',
      marginRight: '1rem',
      borderRadius: '9999px',
      padding: '1px',
      objectFit: 'cover',
      cursor: 'pointer',
    },
    loginButton: {
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
      borderRadius: '9999px',
      padding: '0.25rem 1rem',
    },
  };
  

const About = () => {
  return (
    <div className="responsive-container-block bigContainer">
      <div className="responsive-container-block Container bottomContainer">
        <p className="text-blk headingText">About Us</p>
        <p className="text-blk subHeadingText">We, as innovative minds, have revolutionized the ride-sharing industry.</p>
        <p className="text-blk description">
          At the heart of our mission lies a commitment to empowering both drivers and passengers with a seamless, trustworthy experience unlike any other. Traditional ride-sharing platforms have often grappled issues ranging from opaque pricing structures to concerns over data privacy & accountability. However, by integrating blockchain technology into every facet of our platform, we're poised to challenge these norms and forge a path towards a more equitable and dependable future.
        </p>
        <Link href="/bookride" className="explore">
  Book Ride
</Link>

      </div>

      <div className="responsive-container-block bigContainer">
        <div className="responsive-container-block Container">
          <img className="mainImg" src="car1.png" alt="Car" />
          <div className="allText aboveText">
            <p className="text-blk headingText">Our Mission</p>
            <p className="text-blk subHeadingText">Empowering Transportation, Our Mission to Redefine Ride-Sharing with Blockchain Technology</p>
            <p className="text-blk description">
              Our mission is to revolutionize the ride-sharing industry by leveraging blockchain technology to foster transparency, security, and fairness for drivers and passengers alike. We are committed to providing a seamless and trustworthy experience, powered by decentralized systems that ensure every transaction is recorded transparently and every participant is treated equitably.
            </p>
          </div>
        </div>
        <div className="responsive-container-block Container bottomContainer">
          <img className="mainImg" src="car3.png" alt="Screenshot" />
          <div className="allText bottomText">
            <p className="text-blk headingText">Our Vision</p>
            <p className="text-blk subHeadingText">Transcending Boundaries, Illuminating the Future of Transportation with Blockchain</p>
            <p className="text-blk description">
              Envisioning a world where every ride is a journey of trust, where passengers embark on seamless voyages and drivers navigate with confidence. A realm where transparency illuminates every transaction, and fairness reigns supreme. Our vision is a transportation ecosystem harmonized by blockchain, where innovation meets integrity, and every interaction propels us towards a brighter, more equitable future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
