import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPortal } from 'react-dom';

const BookingModal = ({ isOpen, onClose, selectedFlavour, onSubmitSuccess }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    flavour: '',
    eventType: '',
    instructions: ''
  });

  const [error, setError] = useState('');

  // Update flavour when pre-selected changes
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      flavour: selectedFlavour || ''
    }));
  }, [selectedFlavour]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phoneNumber.trim() || !formData.flavour || !formData.eventType) {
      setError('Please fill in all required fields.');
      return;
    }
    setError('');
    onSubmitSuccess(`Booking request submitted! We will contact you at ${formData.phoneNumber} shortly.`);
    // Reset form
    setFormData({
      fullName: '',
      phoneNumber: '',
      flavour: '',
      eventType: '',
      instructions: ''
    });
    onClose();
    navigate('/checkout');
  };

  return createPortal(
    <div style={styles.overlay}>
      <div className="custom-modal" style={styles.modal}>
        <button onClick={onClose} style={styles.closeButton} aria-label="Close modal">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        
        <h2 style={styles.title}>Place Your Order</h2>
        <p style={styles.subtitle}>Fill out the form below and our bakery team will get back to you to confirm your order details.</p>
        
        {error && <div style={styles.error}>{error}</div>}
        
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.fieldGroup}>
            <label style={styles.label}>Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="John Doe"
              value={formData.fullName}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
          
          <div style={styles.fieldGroup}>
            <label style={styles.label}>Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              placeholder="+91 98765 43210"
              value={formData.phoneNumber}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
          
          <div style={styles.fieldGroup}>
            <label style={styles.label}>Select Flavour</label>
            <div style={styles.selectWrapper}>
              <select
                name="flavour"
                value={formData.flavour}
                onChange={handleChange}
                style={styles.select}
                required
              >
                <option value="" disabled hidden></option>
                <option value="Chocolate Truffle">Chocolate Truffle</option>
                <option value="Red Velvet">Red Velvet</option>
                <option value="Black Forest">Black Forest</option>
                <option value="Pineapple">Pineapple</option>
                <option value="Custom Birthday Cake">Custom Birthday Cake</option>
                <option value="Themed Celebration Cake">Themed Celebration Cake</option>
                <option value="Other / Assorted Pastries">Other / Assorted Pastries</option>
              </select>
              <div style={styles.selectChevron}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7A6F6C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </div>
          </div>
          
          <div style={styles.fieldGroup}>
            <label style={styles.label}>Event Type</label>
            <div style={styles.selectWrapper}>
              <select
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                style={styles.select}
                required
              >
                <option value="" disabled hidden></option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
                <option value="Wedding">Wedding</option>
                <option value="Festival">Festival</option>
                <option value="Celebration">Celebration</option>
                <option value="Other">Other</option>
              </select>
              <div style={styles.selectChevron}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7A6F6C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </div>
          </div>
          
          <div style={styles.fieldGroup}>
            <label style={styles.label}>Special Instructions / Message</label>
            <textarea
              name="instructions"
              placeholder="E.g., Please write 'Happy Birthday' on top..."
              value={formData.instructions}
              onChange={handleChange}
              rows="3"
              style={styles.textarea}
            />
          </div>
          
          <button type="submit" style={styles.submitBtn}>
            Submit Order Request
          </button>
        </form>
      </div>
    </div>,
    document.body
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(62, 53, 50, 0.3)',
    display: 'flex',
    alignItems: 'flex-start', // Align to top
    justifyContent: 'center',
    zIndex: 99999,
    padding: '20px',
    pointerEvents: 'none'
  },
  modal: {
    backgroundColor: '#FA9CB5', // Pink background matching figma screenshot
    borderRadius: '16px',
    width: '100%',
    maxWidth: '440px',
    padding: '24px 28px',
    boxShadow: '0 20px 48px rgba(62, 53, 50, 0.25)',
    position: 'relative',
    maxHeight: 'none',
    overflowY: 'hidden',
    fontFamily: "'DM Sans', sans-serif",
    animation: 'modalScale 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards',
    pointerEvents: 'auto'
  },
  closeButton: {
    position: 'absolute',
    top: 18,
    right: 18,
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: '#3E3532',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'color 0.2s',
    padding: '4px'
  },
  title: {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: '1.65rem',
    fontWeight: '700',
    color: '#3E3532',
    marginBottom: '8px',
    textAlign: 'center'
  },
  subtitle: {
    fontSize: '0.85rem',
    color: '#3E3532',
    lineHeight: '1.4',
    textAlign: 'center',
    marginBottom: '20px',
    padding: '0 10px',
    opacity: 0.9
  },
  error: {
    backgroundColor: '#FFEBEE',
    color: '#C62828',
    padding: '8px 12px',
    borderRadius: '8px',
    fontSize: '0.85rem',
    fontWeight: '600',
    marginBottom: '14px',
    border: '1px solid #FFCDD2'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '14px'
  },
  fieldGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px'
  },
  label: {
    fontSize: '0.85rem',
    fontWeight: '600',
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    color: '#3E3532'
  },
  input: {
    padding: '10px 14px',
    border: 'none',
    borderRadius: '8px',
    fontSize: '0.95rem',
    backgroundColor: '#FFF4F6', // Extremely light pink/off-white background
    color: '#3E3532',
    transition: 'all 0.2s',
    fontFamily: 'inherit'
  },
  selectWrapper: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    width: '100%'
  },
  select: {
    padding: '10px 14px',
    border: 'none',
    borderRadius: '8px',
    fontSize: '0.95rem',
    backgroundColor: '#FFF4F6', // Extremely light pink/off-white background
    color: '#3E3532',
    width: '100%',
    appearance: 'none',
    transition: 'all 0.2s',
    fontFamily: 'inherit',
    cursor: 'pointer'
  },
  selectChevron: {
    position: 'absolute',
    right: '16px',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textarea: {
    padding: '10px 14px',
    border: 'none',
    borderRadius: '8px',
    fontSize: '0.95rem',
    backgroundColor: '#FFF4F6', // Extremely light pink/off-white background
    color: '#3E3532',
    resize: 'none',
    transition: 'all 0.2s',
    fontFamily: 'inherit',
    minHeight: '80px'
  },
  submitBtn: {
    backgroundColor: '#E03E6B', // Vibrant pink button
    color: '#FFFFFF',
    padding: '12px',
    borderRadius: '8px',
    fontWeight: '700',
    fontSize: '0.95rem',
    cursor: 'pointer',
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    transition: 'all 0.2s',
    textAlign: 'center',
    border: 'none',
    marginTop: '4px'
  }
};

// Insert keyframes dynamically if not present
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = `
    @keyframes modalScale {
      from { transform: scale(0.95); opacity: 0; }
      to { transform: scale(1); opacity: 1; }
    }
  `;
  document.head.appendChild(styleSheet);
}

export default BookingModal;
