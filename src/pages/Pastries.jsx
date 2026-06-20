import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import pastriesHeaderImg from '../assets/images/pastries_header.png';
import croissantImg from '../assets/images/croissant.png';
import eclairImg from '../assets/images/eclair.png';
import tartImg from '../assets/images/strawberry_tart.png';
import puffImg from '../assets/images/cream_puff.png';
import baklavaImg from '../assets/images/baklava.png';
import turnoverImg from '../assets/images/apple_turnover.png';
import danishImg from '../assets/images/cheese_danish.png';
import donutImg from '../assets/images/donut.png';
import milleFeuilleImg from '../assets/images/mille_feuille.png';
import bananaSliceImg from '../assets/images/banana_slice.png';
import chefBakingImg from '../assets/images/chef_baking.png';
import cakeIcingImg from '../assets/images/cake_icing.png';
import packagingImg from '../assets/images/packaging.png';
import avatarSarah from '../assets/images/avatar_sarah.png';
import avatarMichael from '../assets/images/avatar_michael.png';
import avatarEmily from '../assets/images/avatar_emily.png';
import customCake1 from '../assets/images/custom_cake_1.png';
import customCake2 from '../assets/images/custom_cake_2.png';

const Pastries = ({ showToast }) => {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('All');

  const filterCategories = [
    { id: 'All', label: 'All Pastries' },
    { id: 'Puff', label: 'Puff' },
    { id: 'Choux', label: 'Choux' },
    { id: 'Fluffy', label: 'Fluffy' },
    { id: 'Sweetlime', label: 'Sweetlime' }
  ];

  const pastriesData = [
    {
      id: 'pastry-croissant',
      name: 'Croissant',
      categories: ['Fluffy'],
      badge: 'FLUFFY',
      price: 85,
      showPrice: true,
      showBadge: true,
      desc: 'Classic butter-laminated dough, proofed for 24 hours for ultimate honeycomb structure.',
      img: croissantImg
    },
    {
      id: 'pastry-eclair',
      name: 'Chocolate Éclair',
      categories: ['Choux'],
      badge: 'CHOUX',
      price: 90,
      showPrice: true,
      showBadge: true,
      desc: 'Delicate choux pastry piped with Madagascar vanilla bean cream and glazed with 70% dark chocolate.',
      img: eclairImg
    },
    {
      id: 'pastry-tart',
      name: 'Strawberry Tart',
      categories: ['Fluffy', 'Sweetlime'],
      badge: 'SEASONAL',
      price: 100,
      showPrice: true,
      showBadge: true,
      desc: 'Sweet sablee crust filled with silky creme patissiere and topped with farm-fresh berries.',
      img: tartImg
    },
    {
      id: 'pastry-puff',
      name: 'Cream Puff',
      categories: ['Choux'],
      badge: 'CHOUX',
      price: 100,
      showPrice: true,
      showBadge: true,
      desc: 'Light-as-air profiteroles stuffed with freshly whipped chantilly and dusted with snow sugar.',
      img: puffImg
    },
    {
      id: 'pastry-baklava',
      name: 'Baklava',
      categories: ['Puff'],
      badge: 'PHYLLO',
      price: 120,
      showPrice: false,
      showBadge: true,
      desc: 'Mediterranean phyllo layers with crushed pistachios, walnuts, and orange blossom honey.',
      img: baklavaImg
    },
    {
      id: 'pastry-turnover',
      name: 'Apple Turnover',
      categories: ['Puff'],
      badge: 'PUFF',
      price: 100,
      showPrice: true,
      showBadge: true,
      desc: 'Caramelized Granny Smith apples encased in a shattering, sugar-crusted puff pastry.',
      img: turnoverImg
    },
    {
      id: 'pastry-danish',
      name: 'Cheese Danish',
      categories: ['Fluffy'],
      badge: 'FLUFFY',
      price: 100,
      showPrice: true,
      showBadge: true,
      desc: 'A tender danish pastry nestling a heart of sweet cream cheese and a hint of lemon zest.',
      img: danishImg
    },
    {
      id: 'pastry-donut',
      name: 'Donut Pastry',
      categories: ['Sweetlime'],
      badge: 'YEASTED',
      price: 100,
      showPrice: true,
      showBadge: true,
      desc: 'Brioche-style dough, slow-fried and glazed with our signature wild honey and vanilla reduction.',
      img: donutImg
    },
    {
      id: 'pastry-mille-feuille',
      name: 'Mille-Feuille',
      categories: ['Puff'],
      badge: 'PUFF',
      price: 100,
      showPrice: false,
      showBadge: true,
      desc: "A 'thousand layers' of caramelized puff pastry alternating with rich crème mousseline.",
      img: milleFeuilleImg
    },
    {
      id: 'pastry-banana-slice',
      name: 'Banana Pastry Slice',
      categories: ['Sweetlime'],
      badge: 'SWEETLIME',
      price: 100,
      showPrice: false,
      showBadge: true,
      desc: 'Moist banana-infused sponge topped with caramelized fruit and toasted hazelnut praline.',
      img: bananaSliceImg
    }
  ];

  const filteredPastries = activeTab === 'All' 
    ? pastriesData 
    : pastriesData.filter(item => item.categories.includes(activeTab));

  const handleOrder = (pastry) => {
    addToCart(pastry);
    showToast(`Added ${pastry.name} to cart!`);
    navigate('/checkout');
  };

  return (
    <div className="animate-fade-in" style={styles.page}>
      {/* Header Grid Image Banner */}
      <div style={styles.headerBannerWrapper}>
        <img src={pastriesHeaderImg} alt="Pastries Morning Collection" style={styles.headerBanner} />
      </div>

      {/* Product Content Section */}
      <section className="section-padding" style={{ paddingTop: '40px' }}>
        <div className="container">
          <h1 className="heading-lg" style={styles.title}>The Morning Collection</h1>
          <p className="subtitle" style={styles.subtitle}>
            Explore our curated selection of hand-rolled pastries, baked daily using traditional French methods and premium stone-ground flour.
          </p>

          {/* Filtering Tabs */}
          <div className="scrollable-tabs" style={styles.tabsRow}>
            {filterCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                style={{
                  ...styles.tab,
                  backgroundColor: activeTab === cat.id ? '#E03E6B' : '#EAE0DD',
                  color: activeTab === cat.id ? '#FFFFFF' : '#7A6F6C'
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid of pastries */}
          <div className="pastries-grid-overrides" style={styles.grid}>
            {filteredPastries.map((pastry) => (
              <div key={pastry.id} className="card-hover" style={styles.card}>
                <div style={styles.cardImgWrapper}>
                  <img src={pastry.img} alt={pastry.name} style={styles.cardImg} />
                  {pastry.showBadge && (
                    <span style={styles.badge}>{pastry.badge.toUpperCase()}</span>
                  )}
                </div>
                <div style={styles.cardContent}>
                  <div style={styles.cardHeaderRow}>
                    <h3 style={styles.cardTitle}>{pastry.name}</h3>
                    {pastry.showPrice && (
                      <span style={styles.cardPrice}>₹{pastry.price}</span>
                    )}
                  </div>
                  <p style={styles.cardDesc}>{pastry.desc}</p>
                  <button 
                    onClick={() => handleOrder(pastry)} 
                    style={styles.cardBtn}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#C22F56'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#E03E6B'}
                  >
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
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

      {/* Behind the Scenes */}
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

      {/* Special Events Section */}
      <section className="section-padding" style={styles.partySection}>
        <div className="container" style={styles.partyContainer}>
          <div style={styles.partyLeft}>
            <div style={styles.partyImagesWrapper}>
              <img src={customCake1} alt="Custom Birthday Cake" style={styles.partyImg} />
              <img src={customCake2} alt="Custom Theme Dessert table" style={styles.partyImg} />
            </div>
          </div>
          <div style={styles.partyRight}>
            <div style={styles.premiumBadge}>🎉 Special Events</div>
            <h2 style={styles.partyTitle}>We accept birthday party & event orders</h2>
            <p style={styles.partyDesc}>
              Make your celebrations unforgettable with our exquisite range of custom cakes. From intimate birthdays to grand gatherings, we bring your sweet visions to life.
            </p>
            <ul style={styles.partyList}>
              <li style={styles.partyListItem}>
                <div style={styles.checkIconWrapper}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span>Customized Birthday Cakes</span>
              </li>
              <li style={styles.partyListItem}>
                <div style={styles.checkIconWrapper}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span>Unique Themed Designs</span>
              </li>
              <li style={styles.partyListItem}>
                <div style={styles.checkIconWrapper}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span>Bulk Party Orders & Dessert Tables</span>
              </li>
            </ul>
            <button onClick={() => { window.location.href = 'tel:+919876543210'; showToast('Calling Sweet Delights: +91 98765 43210'); }} className="btn" style={styles.partyBtn}>
              Call us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

const styles = {
  page: {
    backgroundColor: '#FCF8F7'
  },
  headerBannerWrapper: {
    width: '100%',
    overflow: 'hidden',
    borderBottom: '1px solid #F3EAE7'
  },
  headerBanner: {
    width: '100%',
    height: 'auto',
    display: 'block'
  },
  title: {
    marginTop: '20px',
    textAlign: 'left'
  },
  subtitle: {
    maxWidth: '700px',
    marginBottom: '40px',
    marginLeft: '0',
    textAlign: 'left'
  },
  tabsRow: {
    display: 'flex',
    justifyContent: 'flex-start',
    gap: '12px',
    flexWrap: 'wrap',
    marginBottom: '50px'
  },
  tab: {
    padding: '8px 24px',
    borderRadius: '20px',
    fontSize: '0.85rem',
    fontWeight: '700',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    fontFamily: "'Plus Jakarta Sans', sans-serif"
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '30px'
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: '24px',
    overflow: 'hidden',
    boxShadow: '0 4px 12px rgba(62, 53, 50, 0.03)',
    border: '1px solid #F3EAE7',
    transition: 'all 0.3s ease',
    display: 'flex',
    flexDirection: 'column'
  },
  cardImgWrapper: {
    height: '220px',
    overflow: 'hidden',
    position: 'relative'
  },
  cardImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s ease'
  },
  badge: {
    position: 'absolute',
    top: '16px',
    right: '16px',
    backgroundColor: '#E03E6B',
    color: '#FFFFFF',
    padding: '4px 12px',
    borderRadius: '12px',
    fontSize: '0.7rem',
    fontWeight: '700',
    letterSpacing: '0.05em'
  },
  cardContent: {
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    flex: 1
  },
  cardHeaderRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '16px'
  },
  cardTitle: {
    fontSize: '1.15rem',
    fontWeight: '700',
    color: '#E03E6B',
    fontFamily: "'Plus Jakarta Sans', sans-serif"
  },
  cardDesc: {
    fontSize: '0.85rem',
    color: '#7A6F6C',
    lineHeight: '1.6',
    marginBottom: '20px',
    flex: 1
  },
  cardPrice: {
    fontSize: '1.15rem',
    fontWeight: '800',
    color: '#E03E6B',
    fontFamily: "'Plus Jakarta Sans', sans-serif"
  },
  cardBtn: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#E03E6B',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '6px',
    fontWeight: '700',
    fontSize: '0.9rem',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
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
  partySection: {
    padding: '80px 0',
    backgroundColor: '#FFFFFF',
    borderTop: '1px solid #F3EAE7',
    borderBottom: '1px solid #F3EAE7'
  },
  partyContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '60px',
    flexWrap: 'wrap'
  },
  partyLeft: {
    flex: '1 1 450px',
    display: 'flex',
    justifyContent: 'center'
  },
  partyImagesWrapper: {
    display: 'flex',
    gap: '20px',
    width: '100%',
    maxWidth: '480px'
  },
  partyImg: {
    flex: 1,
    width: '50%',
    height: '240px',
    objectFit: 'cover',
    borderRadius: '20px',
    boxShadow: '0 8px 20px rgba(62, 53, 50, 0.05)'
  },
  partyRight: {
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
  partyTitle: {
    fontSize: '2.4rem',
    color: '#3E3532',
    letterSpacing: '-0.02em',
    lineHeight: '1.2'
  },
  partyDesc: {
    fontSize: '1.05rem',
    color: '#7A6F6C',
    lineHeight: '1.6'
  },
  partyList: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    margin: '8px 0',
    padding: 0
  },
  partyListItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    fontWeight: '600',
    fontSize: '1.05rem',
    color: '#3E3532'
  },
  checkIconWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E03E6B',
    borderRadius: '50%',
    width: '20px',
    height: '20px',
    flexShrink: 0
  },
  partyBtn: {
    padding: '12px 36px',
    fontSize: '0.95rem',
    borderRadius: '30px',
    fontWeight: '700',
    cursor: 'pointer',
    backgroundColor: '#FCE7EE',
    color: '#E03E6B',
    border: '1px solid #F6BCD1'
  }
};

export default Pastries;
