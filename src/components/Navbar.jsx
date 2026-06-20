import React, { useContext, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { cartCount } = useContext(CartContext);
  const { currentUser, logoutUser } = useContext(AuthContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const activeStyle = ({ isActive }) => ({
    color: isActive ? '#E03E6B' : '#3E3532',
    fontWeight: isActive ? '700' : '500',
    borderBottom: isActive ? '2px solid #E03E6B' : '2px solid transparent',
    paddingBottom: '4px'
  });

  return (
    <header style={styles.header}>
      <div className="container" style={styles.navContainer}>
        <Link to="/" style={styles.logoContainer}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E03E6B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 18h14v-6c-4-1-9-2-11 0-2 1-3 2-3 3v3z" />
            <line x1="5" y1="15" x2="19" y2="15" />
            <line x1="5" y1="12" x2="19" y2="12" />
            <circle cx="8" cy="8" r="1.5" />
          </svg>
          <span style={styles.logoText}>Sweet Delights</span>
        </Link>

        {/* Hamburger Menu (Mobile) */}
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={styles.hamburger}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3E3532" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            {mobileMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </>
            )}
          </svg>
        </button>

        {/* Navigation Links */}
        <nav style={{
          ...styles.nav,
          ...(mobileMenuOpen ? styles.navActiveMobile : {})
        }}>
          <NavLink to="/" style={activeStyle} onClick={() => setMobileMenuOpen(false)}>Home</NavLink>
          <NavLink to="/cakes" style={activeStyle} onClick={() => setMobileMenuOpen(false)}>Cake</NavLink>
          <NavLink to="/pastries" style={activeStyle} onClick={() => setMobileMenuOpen(false)}>Pastries</NavLink>
          <NavLink to="/about" style={activeStyle} onClick={() => setMobileMenuOpen(false)}>About</NavLink>
          
          {/* User Profile / Login status */}
          {currentUser ? (
            <div style={styles.userSection}>
              <span style={styles.userName}>Hi, {currentUser.name.split(' ')[0]}</span>
              <button onClick={() => { logoutUser(); setMobileMenuOpen(false); }} style={styles.logoutBtn}>Logout</button>
            </div>
          ) : (
            <Link to="/login" style={styles.loginBtn} onClick={() => setMobileMenuOpen(false)}>Login</Link>
          )}

          {/* Cart Icon Button */}
          <Link to="/checkout" style={styles.cartBtn} onClick={() => setMobileMenuOpen(false)}>
            <div style={styles.cartIconWrapper}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
              {cartCount > 0 && (
                <span style={styles.cartBadge}>{cartCount}</span>
              )}
            </div>
            <span style={styles.cartText}>ADD CART</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#FFFFFF',
    borderBottom: '1px solid #F3EAE7',
    position: 'sticky',
    top: 0,
    zIndex: 999,
    height: '75px',
    display: 'flex',
    alignItems: 'center'
  },
  navContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    position: 'relative'
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  },
  logoText: {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontWeight: '800',
    fontSize: '1.45rem',
    color: '#E03E6B', // Signature brand pink accent
    letterSpacing: '-0.02em'
  },
  hamburger: {
    display: 'none',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '4px'
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
    gap: '32px',
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: '0.95rem'
  },
  userSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    backgroundColor: '#FCE7EE',
    padding: '6px 12px',
    borderRadius: '16px',
    border: '1px solid #F6BCD1'
  },
  userName: {
    fontWeight: '700',
    color: '#E03E6B',
    fontSize: '0.85rem'
  },
  logoutBtn: {
    background: 'none',
    border: 'none',
    color: '#7A6F6C',
    cursor: 'pointer',
    fontSize: '0.8rem',
    fontWeight: '600',
    textDecoration: 'underline'
  },
  loginBtn: {
    fontWeight: '700',
    color: '#E03E6B',
    backgroundColor: '#FCF8F7',
    padding: '8px 16px',
    borderRadius: '20px',
    border: '1px solid #F6BCD1'
  },
  cartBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: '#FCF8F7',
    padding: '6px 16px',
    borderRadius: '12px',
    border: '1px solid #F3EAE7',
    color: '#3E3532',
    fontWeight: '700',
    fontSize: '0.85rem'
  },
  cartIconWrapper: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#E03E6B'
  },
  cartBadge: {
    position: 'absolute',
    top: '-8px',
    right: '-8px',
    backgroundColor: '#E03E6B',
    color: '#FFFFFF',
    borderRadius: '50%',
    width: '18px',
    height: '18px',
    fontSize: '0.7rem',
    fontWeight: '700',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  cartText: {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    letterSpacing: '0.05em'
  },
  
  // Media Queries (inlined via js objects for convenience)
  // Let's add standard responsive CSS block at the end or styles
};

// Add responsive rules dynamically to document head
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = `
    @media (max-width: 900px) {
      header {
        padding: 10px 0;
      }
      header nav {
        display: none !important;
      }
      header nav.mobile-active {
        display: flex !important;
        flex-direction: column;
        position: absolute;
        top: 75px;
        left: 0;
        right: 0;
        background-color: #FFFFFF;
        border-bottom: 1px solid #F3EAE7;
        padding: 24px;
        gap: 20px;
        box-shadow: 0 10px 20px rgba(0,0,0,0.05);
      }
      header button {
        display: block !important;
      }
    }
  `;
  document.head.appendChild(styleSheet);
}

// In JavaScript we can map styles to header nav
const NavbarWithResponsiveJS = () => {
  const { cartCount } = useContext(CartContext);
  const { currentUser, logoutUser } = useContext(AuthContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const activeStyle = ({ isActive }) => ({
    color: isActive ? '#E03E6B' : '#3E3532',
    fontWeight: isActive ? '700' : '600',
    borderBottom: isActive ? '2px solid #E03E6B' : '2px solid transparent',
    paddingBottom: '4px'
  });

  return (
    <header style={styles.header}>
      <div className="container" style={styles.navContainer}>
        {/* Logo */}
        <Link to="/" style={styles.logoContainer}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E03E6B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 18h14v-6c-4-1-9-2-11 0-2 1-3 2-3 3v3z" />
            <line x1="5" y1="15" x2="19" y2="15" />
            <line x1="5" y1="12" x2="19" y2="12" />
            <circle cx="8" cy="8" r="1.5" />
          </svg>
          <span style={styles.logoText}>Sweet Delights</span>
        </Link>

        {/* Hamburger Menu (Mobile) */}
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={styles.hamburger}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3E3532" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            {mobileMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </>
            )}
          </svg>
        </button>

        {/* Navigation Links */}
        <nav className={mobileMenuOpen ? 'mobile-active' : ''} style={styles.nav}>
          <NavLink to="/" style={activeStyle} onClick={() => setMobileMenuOpen(false)}>Home</NavLink>
          <NavLink to="/cakes" style={activeStyle} onClick={() => setMobileMenuOpen(false)}>Cake</NavLink>
          <NavLink to="/pastries" style={activeStyle} onClick={() => setMobileMenuOpen(false)}>Pastries</NavLink>
          <NavLink to="/about" style={activeStyle} onClick={() => setMobileMenuOpen(false)}>About</NavLink>
          
          {/* User Profile / Login status */}
          {currentUser ? (
            <div style={styles.userSection}>
              <span style={styles.userName}>Hi, {currentUser.name.split(' ')[0]}</span>
              <button onClick={() => { logoutUser(); setMobileMenuOpen(false); }} style={styles.logoutBtn}>Logout</button>
            </div>
          ) : (
            <Link to="/login" style={styles.loginBtn} onClick={() => setMobileMenuOpen(false)}>Login</Link>
          )}

          {/* Cart Icon Button */}
          <Link to="/checkout" style={styles.cartBtn} onClick={() => setMobileMenuOpen(false)}>
            <div style={styles.cartIconWrapper}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
              {cartCount > 0 && (
                <span style={styles.cartBadge}>{cartCount}</span>
              )}
            </div>
            <span style={styles.cartText}>ADD CART</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default NavbarWithResponsiveJS;
