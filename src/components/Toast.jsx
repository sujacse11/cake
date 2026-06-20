import React, { useEffect } from 'react';

const Toast = ({ message, type = 'success', onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3500);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div style={styles.toastContainer}>
      <div style={{
        ...styles.toast,
        backgroundColor: type === 'success' ? '#E8F5E9' : '#FFEBEE',
        color: type === 'success' ? '#2E7D32' : '#C62828',
        border: `1px solid ${type === 'success' ? '#A5D6A7' : '#FFCDD2'}`,
      }}>
        {type === 'success' ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={styles.icon}>
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={styles.icon}>
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="15" y1="9" x2="9" y2="15"></line>
            <line x1="9" y1="9" x2="15" y2="15"></line>
          </svg>
        )}
        <span style={styles.text}>{message}</span>
        <button onClick={onClose} style={styles.closeBtn}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    </div>
  );
};

const styles = {
  toastContainer: {
    position: 'fixed',
    bottom: '24px',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 99999,
    pointerEvents: 'none',
    animation: 'slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards'
  },
  toast: {
    display: 'flex',
    alignItems: 'center',
    padding: '12px 20px',
    borderRadius: '12px',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
    pointerEvents: 'auto',
    gap: '12px',
    minWidth: '280px',
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontWeight: '600',
    fontSize: '0.9rem'
  },
  icon: {
    flexShrink: 0
  },
  text: {
    flex: 1
  },
  closeBtn: {
    background: 'none',
    border: 'none',
    color: 'inherit',
    cursor: 'pointer',
    opacity: 0.6,
    padding: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'opacity 0.2s'
  }
};

// Insert keyframes dynamically if not present
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = `
    @keyframes slideUp {
      from { transform: translate(-50%, 20px); opacity: 0; }
      to { transform: translate(-50%, 0); opacity: 1; }
    }
  `;
  document.head.appendChild(styleSheet);
}

export default Toast;
