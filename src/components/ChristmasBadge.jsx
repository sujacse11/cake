import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';

const ChristmasBadge = ({ onApplySuccess, isAbsolute = false }) => {
  const { applyCouponCode, coupon, removeCoupon } = useContext(CartContext);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleClick = () => {
    if (coupon && (coupon.code === 'CHRISTMAS25' || coupon.code === 'XMASS25')) {
      removeCoupon();
      onApplySuccess('Discount coupon removed.');
    } else {
      const res = applyCouponCode('CHRISTMAS25');
      if (res.success) {
        onApplySuccess('Christmas 25% discount applied!');
      }
    }
  };

  return (
    <div style={isAbsolute ? styles.containerAbsolute : styles.container}>
      <button
        onClick={handleClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        style={{
          ...styles.badge,
          backgroundColor: coupon ? '#4caf50' : '#E03E6B', // green if applied, deep pink if not
          transform: coupon ? 'scale(1.05)' : 'scale(1)',
        }}
      >
        <span style={styles.snowflake}>🎄</span>
        <span style={styles.text}>
          {coupon ? 'Discount Applied: 25%' : 'Christmas offer 25%'}
        </span>
        {coupon && (
          <span style={styles.close}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </span>
        )}
      </button>
      
      {showTooltip && !coupon && (
        <div style={styles.tooltip}>
          Click to apply 25% discount to your entire order!
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    position: 'absolute',
    top: '130px',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 998,
    fontFamily: "'Plus Jakarta Sans', sans-serif"
  },
  containerAbsolute: {
    position: 'absolute',
    top: '-20px',
    left: '-40px',
    zIndex: 999,
    fontFamily: "'Plus Jakarta Sans', sans-serif"
  },
  badge: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '12px 20px',
    borderRadius: '30px',
    border: 'none',
    boxShadow: '0 8px 24px rgba(224, 62, 107, 0.3)',
    cursor: 'pointer',
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: '0.85rem',
    transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    letterSpacing: '0.02em',
    whiteSpace: 'nowrap'
  },
  snowflake: {
    fontSize: '1.1rem'
  },
  text: {
    marginTop: '1px'
  },
  close: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.15)',
    borderRadius: '50%',
    width: '18px',
    height: '18px',
    marginLeft: '6px'
  },
  tooltip: {
    position: 'absolute',
    bottom: '54px',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: '#3E3532',
    color: '#FFFFFF',
    padding: '8px 12px',
    borderRadius: '8px',
    fontSize: '0.75rem',
    fontWeight: '600',
    width: '240px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    textAlign: 'center',
    pointerEvents: 'none',
    animation: 'tooltipFade 0.2s ease forwards'
  }
};

// Insert keyframes dynamically if not present
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = `
    @keyframes tooltipFade {
      from { transform: translateY(5px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
  `;
  document.head.appendChild(styleSheet);
}

export default ChristmasBadge;
