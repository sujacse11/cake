import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div className="container" style={styles.container}>
        <Link to="/" style={styles.logoContainer}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E03E6B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 18h14v-6c-4-1-9-2-11 0-2 1-3 2-3 3v3z" />
            <line x1="5" y1="15" x2="19" y2="15" />
            <line x1="5" y1="12" x2="19" y2="12" />
            <circle cx="8" cy="8" r="1.5" />
          </svg>
          <span style={styles.logoText}>Sweet Delights</span>
        </Link>
        <p style={styles.text}>Freshly baked happiness delivered to your door.</p>
        <p style={styles.copyright}>© 2025 Sweet Delights Bakery. All rights reserved.</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#FCF8F7',
    borderTop: '1px solid #F3EAE7',
    padding: '48px 0',
    textAlign: 'center',
    fontFamily: "'Plus Jakarta Sans', sans-serif"
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '12px'
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    textDecoration: 'none'
  },
  logoText: {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontWeight: '800',
    fontSize: '1.3rem',
    color: '#E03E6B',
    letterSpacing: '-0.02em'
  },
  text: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: '0.95rem',
    color: '#7A6F6C'
  },
  copyright: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: '0.8rem',
    color: '#A59B98'
  }
};

export default Footer;
