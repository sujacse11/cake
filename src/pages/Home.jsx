import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import heroCakeImg from '../assets/images/hero_cake.png';
import chocTruffleImg from '../assets/images/chocolate_truffle.png';
import redVelvetImg from '../assets/images/red_velvet.png';
import blackForestImg from '../assets/images/black_forest.png';
import pineappleImg from '../assets/images/pineapple.png';
import chefBakingImg from '../assets/images/chef_baking.png';
import cakeIcingImg from '../assets/images/cake_icing.png';
import packagingImg from '../assets/images/packaging.png';
import pastelCupcakesImg from '../assets/images/pastel_cupcakes.png';
import brownieStackImg from '../assets/images/brownie_stack.png';
import cheesecakeSliceImg from '../assets/images/cheesecake_slice.png';
import macaronsStackImg from '../assets/images/macarons_stack.png';
import avatarSarah from '../assets/images/avatar_sarah.png';
import avatarMichael from '../assets/images/avatar_michael.png';
import avatarEmily from '../assets/images/avatar_emily.png';
import BookingModal from '../components/BookingModal';
import ChristmasBadge from '../components/ChristmasBadge';

const Home = ({ showToast }) => {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);

  const signatureCakes = [
    {
      id: 'signature-choc-truffle',
      name: 'Chocolate Truffle',
      desc: 'Rich, dense chocolate layers coated in a smooth ganache.',
      price: 850,
      img: chocTruffleImg
    },
    {
      id: 'signature-red-velvet',
      name: 'Red Velvet',
      desc: 'Rich, dense chocolate layers coated in a smooth ganache.',
      price: 850,
      img: redVelvetImg
    },
    {
      id: 'signature-black-forest',
      name: 'Black Forest',
      desc: 'Rich, dense chocolate layers coated in a smooth ganache.',
      price: 850,
      img: blackForestImg
    },
    {
      id: 'signature-pineapple',
      name: 'Pineapple',
      desc: 'Rich, dense chocolate layers coated in a smooth ganache.',
      price: 850,
      img: pineappleImg
    }
  ];

  const handleAdd = (cake) => {
    addToCart(cake);
    showToast(`Added ${cake.name} to cart!`);
  };

  return (
    <div className="animate-fade-in" style={styles.page}>
      {/* 1. Hero Section */}
      <section style={styles.heroSection}>
        <div className="container" style={styles.heroContainer}>
          <div style={styles.heroLeft}>
            <div style={styles.premiumBadge}>🍰 Premium Bakery</div>
            <h1 style={styles.heroTitle}>Freshly Baked Happiness Delivered to Your Door</h1>
            <p style={styles.heroDesc}>
              Experience the finest cakes and pastries crafted with love, premium ingredients, and a touch of magic. Perfect for every celebration.
            </p>
            <button onClick={() => navigate('/cakes')} className="btn btn-primary" style={styles.heroBtn}>
              Order Now
            </button>
          </div>
          <div style={styles.heroRight}>
            <img src={heroCakeImg} alt="Sweet Delights Mint Green Cake" style={styles.heroImg} />
          </div>
        </div>
      </section>

      {/* 2. Our Signature Flavours */}
      <section className="section-padding" style={styles.signatureSection}>
        <div className="container">
          <h2 className="heading-lg text-center">Our Signature Flavours</h2>
          <p className="subtitle text-center">Curated bestsellers prepared fresh everyday by our chefs.</p>
          
          <div style={styles.productGrid}>
            {signatureCakes.map((cake) => (
              <div key={cake.id} className="card-hover" style={styles.card}>
                <div style={styles.cardImgWrapper}>
                  <img src={cake.img} alt={cake.name} style={styles.cardImg} />
                </div>
                <div style={styles.cardContent}>
                  <h3 style={styles.cardTitle}>{cake.name}</h3>
                  <p style={styles.cardDesc}>{cake.desc}</p>
                  <div style={styles.cardFooter}>
                    <span style={styles.cardPrice}>₹{cake.price}</span>
                    <button onClick={() => handleAdd(cake)} className="btn btn-primary" style={styles.cardBtn}>
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Delightful Pastries */}
      <section className="section-padding" style={styles.pastriesSection}>
        <div className="container">
          <h2 className="heading-lg text-center">Delightful Pastries</h2>
          <p className="subtitle text-center">A fine selection of French croissants, eclairs, tarts and cream puffs.</p>
          
          <div style={styles.pastryPreviewGrid}>
            {[
              { img: pastelCupcakesImg, name: 'Cupcakes' },
              { img: brownieStackImg, name: 'Brownies' },
              { img: cheesecakeSliceImg, name: 'Cheesecakes' },
              { img: macaronsStackImg, name: 'Macarons' }
            ].map((p, idx) => (
              <div key={idx} onClick={() => navigate('/pastries')} className="pastry-card-hover" style={styles.pastryCard}>
                <img src={p.img} alt={p.name} style={styles.pastryImg} />
                <div style={styles.pastryOverlay}>
                  <span style={styles.pastryName}>{p.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Behind the Scenes */}
      <section className="section-padding" style={styles.btsSection}>
        <div className="container">
          <h2 className="heading-lg text-center">Behind the Scenes</h2>
          <p className="subtitle text-center" style={{ marginBottom: '60px' }}>
            Made in a clean and hygienic kitchen with premium ingredients. Our bakers pour their passion into every single creation.
          </p>
          
          <div style={styles.btsGrid}>
            {[
              { img: chefBakingImg, title: 'Baking with Care' },
              { img: cakeIcingImg, title: 'Artistic Decoration' },
              { img: packagingImg, title: 'Safe Packaging' }
            ].map((bts, idx) => (
              <div key={idx} style={styles.btsCard}>
                <div style={styles.btsCircle}>
                  <img src={bts.img} alt={bts.title} style={styles.btsImg} />
                </div>
                <h4 style={styles.btsTitle}>{bts.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Freshness Delivered Quickly */}
      <section style={styles.deliverySection}>
        <div className="container" style={styles.deliveryContainer}>
          <div style={styles.deliveryLeft}>
            <h2 style={styles.deliveryTitle}>Freshness Delivered Quickly</h2>
            <ul style={styles.deliveryList}>
              <li style={styles.deliveryItem}>
                <div style={styles.deliveryIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E03E6B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <span>Fast delivery within 60 minutes</span>
              </li>
              <li style={styles.deliveryItem}>
                <div style={styles.deliveryIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E03E6B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                  </svg>
                </div>
                <span>Safe and secure packaging</span>
              </li>
              <li style={styles.deliveryItem}>
                <div style={styles.deliveryIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E03E6B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <span>Live order tracking</span>
              </li>
            </ul>
          </div>
          <div style={styles.deliveryRight}>
            <svg width="120" height="120" viewBox="0 0 100 100" fill="none" stroke="#3E3532" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="25" cy="70" r="12" stroke="#3E3532" strokeWidth="5"></circle>
              <circle cx="75" cy="70" r="12" stroke="#3E3532" strokeWidth="5"></circle>
              <path d="M25 70L45 45H68L75 70M45 45L55 70M55 70L68 45" stroke="#3E3532" strokeWidth="4"></path>
              <circle cx="55" cy="22" r="5" fill="#3E3532"></circle>
              <path d="M42 35L52 28L65 38L72 50" stroke="#3E3532" strokeWidth="4"></path>
              <path d="M52 28L68 34L76 34" stroke="#3E3532" strokeWidth="4"></path>
              <rect x="28" y="25" width="14" height="14" rx="2" fill="#3E3532" stroke="none"></rect>
            </svg>
          </div>
        </div>
      </section>

      {/* 6. Testimonials */}
      <section className="section-padding" style={styles.testimonialsSection}>
        <div className="container">
          <h2 className="heading-lg text-center">What Our Customers Say</h2>
          
          <div style={styles.testimonialsGrid}>
            {[
              {
                stars: 5,
                text: '“The best chocolate truffle I have ever had! The delivery was perfectly on time and the packaging kept the cake completely intact. Highly recommend!”',
                name: 'Sarah Jenkins',
                role: 'Verified Buyer',
                avatar: avatarSarah
              },
              {
                stars: 5,
                text: '“We ordered a custom themed cake for my daughter\'s birthday. It looked absolutely stunning and tasted heavenly. Thank you for making her day special.”',
                name: 'Michael Roberts',
                role: 'Event Booking',
                avatar: avatarMichael
              },
              {
                stars: 5,
                text: '“Their macarons are to die for! So fresh and the perfect texture. The hygiene and quality standards they maintain are truly impressive.”',
                name: 'Emily Chen',
                role: 'Verified Buyer',
                avatar: avatarEmily
              }
            ].map((t, idx) => (
              <div key={idx} style={styles.testimonialCard}>
                <div style={styles.starsWrapper}>
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <span key={i} style={styles.star}>★</span>
                  ))}
                </div>
                <p style={styles.testimonialText}>{t.text}</p>
                <div style={styles.testimonialUser}>
                  <img src={t.avatar} alt={t.name} style={styles.avatarImg} />
                  <div>
                    <h4 style={styles.userName}>{t.name}</h4>
                    <span style={styles.userRole}>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      <BookingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmitSuccess={showToast}
      />

      {/* Floating Christmas Coupon Badge */}
      <ChristmasBadge onApplySuccess={(msg) => showToast(msg, 'success')} />
    </div>
  );
};

const styles = {
  page: {
    backgroundColor: '#FCF8F7',
    position: 'relative'
  },
  heroSection: {
    padding: '80px 0',
    backgroundColor: '#FFFFFF',
    borderBottom: '1px solid #F3EAE7'
  },
  heroContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '48px',
    flexWrap: 'wrap'
  },
  heroLeft: {
    flex: '1 1 500px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '20px'
  },
  premiumBadge: {
    backgroundColor: '#FCF8F7',
    color: '#E03E6B',
    padding: '8px 16px',
    borderRadius: '20px',
    fontSize: '0.85rem',
    fontWeight: '700',
    border: '1px solid #F6BCD1',
    fontFamily: "'Plus Jakarta Sans', sans-serif"
  },
  heroTitle: {
    fontSize: '3.2rem',
    color: '#3E3532',
    lineHeight: '1.15',
    letterSpacing: '-0.03em'
  },
  heroDesc: {
    fontSize: '1.15rem',
    color: '#7A6F6C',
    lineHeight: '1.6',
    maxWidth: '520px'
  },
  heroBtn: {
    marginTop: '10px',
    padding: '14px 36px',
    fontSize: '1rem'
  },
  heroRight: {
    flex: '1 1 450px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  heroImg: {
    width: '100%',
    maxWidth: '520px',
    height: 'auto',
    borderRadius: '24px',
    boxShadow: '0 12px 30px rgba(62, 53, 50, 0.08)'
  },
  signatureSection: {
    backgroundColor: '#FCF8F7'
  },
  productGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '30px',
    marginTop: '20px'
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: '24px',
    overflow: 'hidden',
    boxShadow: '0 4px 12px rgba(62, 53, 50, 0.03)',
    border: '1px solid #F3EAE7',
    display: 'flex',
    flexDirection: 'column'
  },
  cardImgWrapper: {
    height: '240px',
    overflow: 'hidden',
    position: 'relative'
  },
  cardImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  cardContent: {
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    flex: 1
  },
  cardTitle: {
    fontSize: '1.3rem',
    fontWeight: '700',
    color: '#3E3532',
    marginBottom: '8px'
  },
  cardDesc: {
    fontSize: '0.9rem',
    color: '#7A6F6C',
    lineHeight: '1.5',
    marginBottom: '20px',
    flex: 1
  },
  cardFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  cardPrice: {
    fontSize: '1.35rem',
    fontWeight: '800',
    color: '#E03E6B',
    fontFamily: "'Plus Jakarta Sans', sans-serif"
  },
  cardBtn: {
    padding: '10px 18px',
    borderRadius: '30px',
    fontWeight: '700',
    fontSize: '0.8rem',
    cursor: 'pointer'
  },
  pastriesSection: {
    backgroundColor: '#FFFFFF',
    borderTop: '1px solid #F3EAE7',
    borderBottom: '1px solid #F3EAE7'
  },
  pastryPreviewGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '24px'
  },
  pastryCard: {
    position: 'relative',
    height: '220px',
    borderRadius: '20px',
    overflow: 'hidden',
    cursor: 'pointer',
    boxShadow: '0 4px 10px rgba(0,0,0,0.02)'
  },
  pastryImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  pastryOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: '20px',
    background: 'linear-gradient(to top, rgba(62, 53, 50, 0.8), transparent)',
    display: 'flex',
    alignItems: 'flex-end',
    height: '50%'
  },
  pastryName: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: '1.2rem',
    fontFamily: "'Plus Jakarta Sans', sans-serif"
  },
  btsSection: {
    backgroundColor: '#FCF8F7'
  },
  btsGrid: {
    display: 'flex',
    justifyContent: 'center',
    gap: '60px',
    flexWrap: 'wrap',
    marginTop: '20px'
  },
  btsCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    gap: '16px'
  },
  btsCircle: {
    width: '180px',
    height: '180px',
    borderRadius: '50%',
    overflow: 'hidden',
    border: '6px solid #FFFFFF',
    boxShadow: '0 8px 20px rgba(62, 53, 50, 0.05)'
  },
  btsImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  btsTitle: {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontWeight: '700',
    fontSize: '1.1rem',
    color: '#3E3532'
  },
  deliverySection: {
    padding: '60px 0',
    backgroundColor: '#FCF8F7'
  },
  deliveryContainer: {
    backgroundColor: '#FCE7EE',
    border: '1px solid #F6BCD1',
    borderRadius: '24px',
    padding: '40px 60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '40px',
    flexWrap: 'wrap'
  },
  deliveryLeft: {
    flex: '1 1 450px',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  },
  deliveryTitle: {
    fontSize: '2.2rem',
    color: '#3E3532',
    letterSpacing: '-0.02em'
  },
  deliveryList: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  },
  deliveryItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    fontSize: '1.05rem',
    fontWeight: '600',
    color: '#3E3532'
  },
  deliveryIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '36px',
    height: '36px',
    backgroundColor: '#FFFFFF',
    borderRadius: '50%',
    boxShadow: '0 4px 10px rgba(224, 62, 107, 0.1)'
  },
  deliveryRight: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: '1 1 200px'
  },
  testimonialsSection: {
    backgroundColor: '#FCF8F7',
    borderTop: '1px solid #F3EAE7'
  },
  testimonialsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '30px',
    marginTop: '40px'
  },
  testimonialCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: '24px',
    padding: '36px',
    boxShadow: '0 6px 18px rgba(62, 53, 50, 0.02)',
    border: '1px solid #F3EAE7',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  },
  starsWrapper: {
    display: 'flex',
    gap: '4px'
  },
  star: {
    color: '#FFB300',
    fontSize: '1.2rem'
  },
  testimonialText: {
    fontSize: '0.95rem',
    color: '#7A6F6C',
    lineHeight: '1.6',
    fontStyle: 'italic',
    flex: 1
  },
  testimonialUser: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginTop: '10px'
  },
  avatarImg: {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '2px solid #FCE7EE'
  },
  userName: {
    fontSize: '0.95rem',
    fontWeight: '700',
    color: '#3E3532'
  },
  userRole: {
    fontSize: '0.8rem',
    color: '#A59B98',
    fontWeight: '600'
  }
};

export default Home;
