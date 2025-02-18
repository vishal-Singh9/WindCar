import React, { useState } from "react";
import '../styles/Newsletter.css';
import Bugati from '../../public/Bugati.webp';

export async function getServerSideProps(context) {
  const subscriberCount = 1234;
  return {
    props: { subscriberCount },
  };
}

export default function Newsletter({ subscriberCount }) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <div 
      className="newsletter-section"
      style={{ backgroundImage: `url(${Bugati.src})`, backgroundSize: 'cover', backgroundPosition: 'center' ,backgroundRepeat: 'no-repeat',backgroundAttachment: 'fixed' }}
    >
      <div className="newsletter-container">
        <h2>Subscribe to Our Newsletter</h2>
        <p>
          Join {subscriberCount} subscribers and stay updated with the latest news
          and exclusive offers!
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Subscribe</button>
        </form>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
}
