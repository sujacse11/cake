import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import candlesImg from '../assets/images/candles.png';
import popperImg from '../assets/images/party_popper.png';

const Checkout = ({ showToast }) => {
  const {
    cart,
    updateQuantity,
    removeItem,
    addons,
    toggleAddon,
    coupon,
    financials,
    clearCart
  } = useContext(CartContext);

  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    date: '',
    time: '',
    message: ''
  });

  const [paymentMethod, setPaymentMethod] = useState('online');
  const [error, setError] = useState('');

  const getLocalDateString = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const todayStr = getLocalDateString(new Date());
  const oneWeekLater = new Date();
  oneWeekLater.setDate(oneWeekLater.getDate() + 7);
  const oneWeekLaterStr = getLocalDateString(oneWeekLater);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    
    if (cart.length === 0) {
      setError('Your cart is empty. Add some sweet delights first!');
      return;
    }

    if (!form.firstName.trim() || !form.lastName.trim() || !form.phone.trim() || !form.address.trim() || !form.date || !form.time) {
      setError('Please fill in all delivery details.');
      return;
    }

    // 1. Phone validation: must be a valid 10-digit number
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(form.phone.trim())) {
      setError('Please enter a valid 10-digit phone number.');
      return;
    }

    // 2. Date validation: must be today or within the upcoming week (next 7 days)
    if (form.date < todayStr) {
      setError('Delivery date cannot be in the past.');
      return;
    }

    if (form.date > oneWeekLaterStr) {
      setError('Delivery date must be within today and the upcoming week.');
      return;
    }

    setError('');
    // Successful checkout
    showToast('🎉 Order placed successfully! Thank you for shopping with us.');
    clearCart();
    navigate('/');
  };

  return (
    <div className="animate-fade-in" style={styles.page}>
      <div className="container" style={styles.container}>
        <h1 style={styles.pageTitle}>Complete Your Checkout</h1>
        
        {error && <div style={styles.errorBanner}>{error}</div>}

        <div className="checkout-layout-wrap" style={styles.layout}>
          {/* Left Column: Cart items and forms */}
          <div style={styles.leftCol}>
            
            {/* 1. Cart Items */}
            <div style={styles.sectionCard}>
              <h2 style={styles.sectionTitle}>1. Review Your Order</h2>
              
              {cart.length === 0 ? (
                <div style={styles.emptyCart}>
                  <p>Your cart is currently empty.</p>
                  <button onClick={() => navigate('/cakes')} className="btn btn-secondary" style={{ marginTop: '16px' }}>
                    Browse Cakes
                  </button>
                </div>
              ) : (
                <div style={styles.cartItemsList}>
                  {cart.map((item) => (
                    <div key={item.id} style={styles.cartItem}>
                      <div style={styles.itemImgWrapper}>
                        <img src={item.img} alt={item.name} style={styles.itemImg} />
                      </div>
                      <div style={styles.itemDetails}>
                        <h3 style={styles.itemName}>{item.name}</h3>
                        <span style={styles.itemSpecs}>1 kg • Eggless</span>
                      </div>
                      <div style={styles.itemQuantitySection}>
                        <div style={styles.counter}>
                          <button onClick={() => updateQuantity(item.id, -1)} style={styles.counterBtn}>-</button>
                          <span style={styles.counterValue}>{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, 1)} style={styles.counterBtn}>+</button>
                        </div>
                        <button onClick={() => removeItem(item.id)} style={styles.removeBtn}>Remove</button>
                      </div>
                      <div style={styles.itemPrice}>
                        ₹{item.price * item.quantity}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* 2. Frequently Bought Together Addons */}
            <div style={styles.sectionCardPink}>
              <h3 style={styles.sectionTitlePink}>Frequently bought together</h3>
              <div className="product-grid-overrides" style={styles.addonsGrid}>
                <div style={styles.addonCard}>
                  <div style={styles.addonLeft}>
                    <img src={candlesImg} alt="Premium Candles" style={styles.addonImg} />
                    <div>
                      <h4 style={styles.addonName}>Premium Candles</h4>
                      <span style={styles.addonPrice}>₹150</span>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleAddon('candles')}
                    style={{
                      ...styles.addonBtn,
                      backgroundColor: addons.candles ? '#FFFFFF' : '#E03E6B',
                      color: addons.candles ? '#E03E6B' : '#FFFFFF',
                      border: addons.candles ? '1.5px solid #E03E6B' : 'none'
                    }}
                  >
                    {addons.candles ? 'ADDED' : 'ADD'}
                  </button>
                </div>

                <div style={styles.addonCard}>
                  <div style={styles.addonLeft}>
                    <img src={popperImg} alt="Party Popper" style={styles.addonImg} />
                    <div>
                      <h4 style={styles.addonName}>Party Popper</h4>
                      <span style={styles.addonPrice}>₹120</span>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleAddon('partyPopper')}
                    style={{
                      ...styles.addonBtn,
                      backgroundColor: addons.partyPopper ? '#FFFFFF' : '#E03E6B',
                      color: addons.partyPopper ? '#E03E6B' : '#FFFFFF',
                      border: addons.partyPopper ? '1.5px solid #E03E6B' : 'none'
                    }}
                  >
                    {addons.partyPopper ? 'ADDED' : 'ADD'}
                  </button>
                </div>
              </div>
            </div>

            {/* 3. Delivery Information */}
            <div style={styles.sectionCard}>
              <h2 style={styles.sectionTitle}>2. Delivery Information</h2>
              <form style={styles.deliveryForm}>
                <div className="checkout-form-grid" style={styles.formGrid}>
                  <div style={styles.formGroup}>
                    <label style={styles.formLabel}>First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={form.firstName}
                      onChange={handleInputChange}
                      placeholder="First Name"
                      style={styles.formInput}
                      required
                    />
                  </div>
                  <div style={styles.formGroup}>
                    <label style={styles.formLabel}>Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={form.lastName}
                      onChange={handleInputChange}
                      placeholder="Last Name"
                      style={styles.formInput}
                      required
                    />
                  </div>
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleInputChange}
                    placeholder="Phone Number"
                    style={styles.formInput}
                    required
                  />
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>Complete Address</label>
                  <input
                    type="text"
                    name="address"
                    value={form.address}
                    onChange={handleInputChange}
                    placeholder="Address, Building, Street, Area"
                    style={styles.formInput}
                    required
                  />
                </div>

                <div className="checkout-form-grid" style={styles.formGrid}>
                  <div style={styles.formGroup}>
                    <label style={styles.formLabel}>Delivery Date</label>
                    <input
                      type="date"
                      name="date"
                      value={form.date}
                      onChange={handleInputChange}
                      min={todayStr}
                      max={oneWeekLaterStr}
                      style={styles.formInput}
                      required
                    />
                  </div>
                  <div style={styles.formGroup}>
                    <label style={styles.formLabel}>Preferred Time</label>
                    <input
                      type="time"
                      name="time"
                      value={form.time}
                      onChange={handleInputChange}
                      style={styles.formInput}
                      required
                    />
                  </div>
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>Message on Cake (Optional)</label>
                  <input
                    type="text"
                    name="message"
                    value={form.message}
                    onChange={handleInputChange}
                    placeholder="e.g. Happy Birthday Kiara!"
                    style={styles.formInput}
                  />
                </div>
              </form>
            </div>

            {/* 4. Payment Method */}
            <div style={styles.sectionCard}>
              <h2 style={styles.sectionTitle}>3. Payment Method</h2>
              <div style={styles.paymentOptions}>
                <label style={{
                  ...styles.paymentOption,
                  border: paymentMethod === 'online' ? '2px solid #E03E6B' : '1.5px solid #F3EAE7',
                  backgroundColor: paymentMethod === 'online' ? '#FCE7EE' : '#FFFFFF'
                }}>
                  <input
                    type="radio"
                    name="payment"
                    value="online"
                    checked={paymentMethod === 'online'}
                    onChange={() => setPaymentMethod('online')}
                    style={styles.radioInput}
                  />
                  <div>
                    <h4 style={styles.paymentOptionTitle}>Pay Online</h4>
                    <span style={styles.paymentOptionDesc}>Credit/Debit Card, UPI, Netbanking or Wallets</span>
                  </div>
                </label>

                <label style={{
                  ...styles.paymentOption,
                  border: paymentMethod === 'cod' ? '2px solid #E03E6B' : '1.5px solid #F3EAE7',
                  backgroundColor: paymentMethod === 'cod' ? '#FCE7EE' : '#FFFFFF'
                }}>
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    checked={paymentMethod === 'cod'}
                    onChange={() => setPaymentMethod('cod')}
                    style={styles.radioInput}
                  />
                  <div>
                    <h4 style={styles.paymentOptionTitle}>Cash on Delivery</h4>
                    <span style={styles.paymentOptionDesc}>Pay when you receive your order</span>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Right Column: Order Summary Card */}
          <div style={styles.rightCol}>
            <div className="checkout-sidebar-sticky" style={styles.summaryCard}>
              <h2 style={styles.summaryTitle}>Order Summary</h2>
              
              <div style={styles.summaryRow}>
                <span>Subtotal</span>
                <span>₹{financials.subtotal}</span>
              </div>
              
              {financials.addonsTotal > 0 && (
                <div style={styles.summaryRow}>
                  <span>Addons</span>
                  <span>₹{financials.addonsTotal}</span>
                </div>
              )}
              
              <div style={styles.summaryRow}>
                <span>Delivery Fee</span>
                <span style={styles.freeText}>Free</span>
              </div>

              {coupon && (
                <div style={{ ...styles.summaryRow, color: '#2E7D32', fontWeight: '700' }}>
                  <span>Discount (25%)</span>
                  <span>-₹{financials.discountAmount}</span>
                </div>
              )}

              <div style={styles.summaryRow}>
                <span>Taxes</span>
                <span>₹{financials.taxes}</span>
              </div>

              <div style={styles.summaryDivider}></div>

              <div style={styles.totalRow}>
                <span>Total</span>
                <span>₹{financials.total}</span>
              </div>

              <button onClick={handlePlaceOrder} className="btn btn-primary" style={styles.checkoutBtn}>
                Place Order
              </button>
              
              <span style={styles.secureText}>🔒 100% Secure Checkout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  page: {
    backgroundColor: '#FCF8F7',
    padding: '40px 0 80px 0',
    fontFamily: "'DM Sans', sans-serif"
  },
  container: {
    maxWidth: '1100px'
  },
  pageTitle: {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: '2.4rem',
    fontWeight: '800',
    color: '#3E3532',
    marginBottom: '30px'
  },
  errorBanner: {
    backgroundColor: '#FFEBEE',
    color: '#C62828',
    padding: '16px',
    borderRadius: '12px',
    fontSize: '0.95rem',
    fontWeight: '700',
    marginBottom: '30px',
    border: '1px solid #FFCDD2'
  },
  layout: {
    display: 'flex',
    gap: '30px',
    flexWrap: 'wrap'
  },
  leftCol: {
    flex: '2 1 600px',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  },
  rightCol: {
    flex: '1 1 320px'
  },
  sectionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: '24px',
    padding: '30px',
    boxShadow: '0 4px 12px rgba(62, 53, 50, 0.02)',
    border: '1px solid #F3EAE7'
  },
  sectionCardPink: {
    backgroundColor: '#FCE7EE', // Pink background for addon card
    borderRadius: '24px',
    padding: '24px 30px',
    border: '1px dashed #F6BCD1'
  },
  sectionTitle: {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: '1.25rem',
    fontWeight: '700',
    color: '#3E3532',
    marginBottom: '20px',
    borderBottom: '1.5px solid #FCF8F7',
    paddingBottom: '12px'
  },
  sectionTitlePink: {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: '1.1rem',
    fontWeight: '800',
    color: '#E03E6B',
    marginBottom: '16px'
  },
  emptyCart: {
    textAlign: 'center',
    padding: '30px 0',
    color: '#7A6F6C'
  },
  cartItemsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  },
  cartItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '16px',
    borderBottom: '1px solid #FCF8F7',
    paddingBottom: '20px',
    flexWrap: 'wrap'
  },
  itemImgWrapper: {
    width: '60px',
    height: '60px',
    borderRadius: '12px',
    overflow: 'hidden',
    backgroundColor: '#FCF8F7'
  },
  itemImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  itemDetails: {
    flex: 2,
    minWidth: '150px'
  },
  itemName: {
    fontSize: '1rem',
    fontWeight: '700',
    color: '#3E3532'
  },
  itemSpecs: {
    fontSize: '0.8rem',
    color: '#7A6F6C',
    fontWeight: '600'
  },
  itemQuantitySection: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  },
  counter: {
    display: 'flex',
    alignItems: 'center',
    border: '1.5px solid #F3EAE7',
    borderRadius: '8px',
    overflow: 'hidden',
    backgroundColor: '#FCF8F7'
  },
  counterBtn: {
    padding: '6px 12px',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    fontWeight: '700',
    fontSize: '0.9rem',
    color: '#7A6F6C',
    transition: 'background-color 0.2s'
  },
  counterValue: {
    padding: '0 8px',
    fontWeight: '700',
    color: '#3E3532',
    fontSize: '0.9rem'
  },
  removeBtn: {
    background: 'none',
    border: 'none',
    color: '#7A6F6C',
    cursor: 'pointer',
    fontSize: '0.8rem',
    fontWeight: '700',
    textDecoration: 'underline'
  },
  itemPrice: {
    fontWeight: '700',
    fontSize: '1.1rem',
    color: '#3E3532',
    textAlign: 'right',
    minWidth: '70px'
  },
  addonsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '20px'
  },
  addonCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: '16px',
    padding: '12px 16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxShadow: '0 2px 6px rgba(62,53,50,0.02)',
    border: '1px solid #F3EAE7'
  },
  addonLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  },
  addonImg: {
    width: '40px',
    height: '40px',
    objectFit: 'cover',
    borderRadius: '8px'
  },
  addonName: {
    fontSize: '0.85rem',
    fontWeight: '700',
    color: '#3E3532'
  },
  addonPrice: {
    fontSize: '0.8rem',
    color: '#E03E6B',
    fontWeight: '700'
  },
  addonBtn: {
    padding: '6px 12px',
    borderRadius: '16px',
    fontWeight: '700',
    fontSize: '0.75rem',
    cursor: 'pointer'
  },
  deliveryForm: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  },
  formGrid: {
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap'
  },
  formGroup: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    minWidth: '200px'
  },
  formLabel: {
    fontSize: '0.8rem',
    fontWeight: '700',
    color: '#3E3532',
    fontFamily: "'Plus Jakarta Sans', sans-serif"
  },
  formInput: {
    padding: '12px 16px',
    border: '1.5px solid #F3EAE7',
    borderRadius: '12px',
    fontSize: '0.95rem',
    backgroundColor: '#FCF8F7',
    color: '#3E3532',
    fontFamily: 'inherit'
  },
  paymentOptions: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  paymentOption: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    padding: '16px 20px',
    borderRadius: '16px',
    cursor: 'pointer',
    transition: 'all 0.2s ease'
  },
  radioInput: {
    width: '18px',
    height: '18px',
    accentColor: '#E03E6B'
  },
  paymentOptionTitle: {
    fontSize: '0.95rem',
    fontWeight: '700',
    color: '#3E3532',
    marginBottom: '2px'
  },
  paymentOptionDesc: {
    fontSize: '0.8rem',
    color: '#7A6F6C',
    fontWeight: '600'
  },
  summaryCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: '24px',
    padding: '32px',
    boxShadow: '0 8px 24px rgba(62, 53, 50, 0.04)',
    border: '1px solid #F3EAE7',
    position: 'sticky',
    top: '100px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  },
  summaryTitle: {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: '1.3rem',
    fontWeight: '700',
    color: '#3E3532',
    marginBottom: '8px'
  },
  summaryRow: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '0.95rem',
    color: '#7A6F6C',
    fontWeight: '600'
  },
  freeText: {
    color: '#2E7D32',
    fontWeight: '700'
  },
  summaryDivider: {
    height: '1px',
    backgroundColor: '#F3EAE7',
    margin: '8px 0'
  },
  totalRow: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '1.3rem',
    fontWeight: '800',
    color: '#3E3532',
    fontFamily: "'Plus Jakarta Sans', sans-serif"
  },
  checkoutBtn: {
    marginTop: '12px',
    padding: '14px',
    borderRadius: '30px',
    fontSize: '1rem',
    fontWeight: '700',
    width: '100%'
  },
  secureText: {
    textAlign: 'center',
    fontSize: '0.8rem',
    color: '#A59B98',
    fontWeight: '600',
    marginTop: '4px'
  }
};

export default Checkout;
