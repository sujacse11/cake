import React, { useState } from 'react';
import headerLeftImg from '../assets/images/pink_cake_header.png';
import headerRightImg from '../assets/images/hero_cake.png';
import cakesChocTruffleRow1 from '../assets/images/cakes_choc_truffle_row1.png';
import cakesRedVelvetRow1 from '../assets/images/cakes_red_velvet_row1.png';
import cakesBlackForestRow1 from '../assets/images/cakes_black_forest_row1.png';
import cakesPineappleRow1 from '../assets/images/cakes_pineapple_row1.png';
import cakesRedVelvetCakeRow2 from '../assets/images/cakes_red_velvet_cake_row2.png';
import cakesRedVelvetRow2 from '../assets/images/cakes_red_velvet_row2.png';
import cakesBlackForestRow2 from '../assets/images/cakes_black_forest_row2.png';
import cakesPineappleRow2 from '../assets/images/cakes_pineapple_row2.png';
import customCake1 from '../assets/images/custom_cake_1.png';
import customCake2 from '../assets/images/custom_cake_2.png';
import chefBakingImg from '../assets/images/chef_baking.png';
import cakeIcingImg from '../assets/images/cake_icing.png';
import packagingImg from '../assets/images/packaging.png';
import avatarSarah from '../assets/images/avatar_sarah.png';
import avatarMichael from '../assets/images/avatar_michael.png';
import avatarEmily from '../assets/images/avatar_emily.png';
import BookingModal from '../components/BookingModal';

const Cakes = ({ showToast }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedFlavour, setSelectedFlavour] = useState('');

  const cakesList = [
    { id: 'cake-choc-truffle', name: 'Chocolate Truffle', img: cakesChocTruffleRow1 },
    { id: 'cake-red-velvet', name: 'Red Velvet', img: cakesRedVelvetRow1 },
    { id: 'cake-black-forest', name: 'Black Forest', img: cakesBlackForestRow1 },
    { id: 'cake-pineapple', name: 'Pineapple', img: cakesPineappleRow1 },
    { id: 'cake-red-velvet-classic', name: 'Red Velvet Cake', img: cakesRedVelvetCakeRow2 },
    { id: 'cake-red-velvet-pineapple', name: 'Red Velvet', img: cakesRedVelvetRow2 },
    { id: 'cake-black-forest-cherries', name: 'Black Forest', img: cakesBlackForestRow2 },
    { id: 'cake-pineapple-sprinkles', name: 'Pineapple', img: cakesPineappleRow2 }
  ];

  const handleOrderClick = (cakeName) => {
    setSelectedFlavour(cakeName);
    setModalOpen(true);
  };

  return (
    <div className="animate-fade-in" style={styles.page}>
      {/* Page Header (Double image header banner) */}
      <section style={styles.headerBanner}>
        <div className="container cakes-header-grid" style={styles.headerGrid}>
          <div style={styles.headerHalf}>
            <img src={headerLeftImg} alt="Pastel pink flower cake" style={styles.headerImg} />
          </div>
          <div style={styles.headerHalf}>
            <img src={headerRightImg} alt="Light green mint cake" style={styles.headerImg} />
          </div>
        </div>
      </section>

      {/* Main Section */}
      <section className="section-padding">
        <div className="container">
          <h1 className="heading-lg text-center" style={styles.title}>The Cake Flavours</h1>
          <p className="subtitle text-center" style={styles.desc}>
            Explore our curated selection of hand-rolled pastries, baked daily using traditional French methods and premium stone-ground flour.
          </p>
          
          <div className="cakes-grid-overrides" style={styles.cakesGrid}>
            {cakesList.map((cake, idx) => (
              <div key={cake.id} className="card-hover" style={styles.card}>
                <div style={styles.cardImgWrapper}>
                  <img src={cake.img} alt={cake.name} style={styles.cardImg} />
                </div>
                <div style={styles.cardContent}>
                  <h3 style={styles.cardTitle}>{cake.name}</h3>
                  <p style={styles.cardDesc}>Rich, dense chocolate layers coated in a smooth ganache.</p>
                  <div style={styles.cardFooter}>
                    <span style={styles.cardPrice}>₹850</span>
                    <button onClick={() => handleOrderClick(cake.name)} className="btn btn-primary" style={styles.cardBtn}>
                      Order Now
                    </button>
                  </div>
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
            <h2 style={styles.partyTitle}>We accept birthday party & orders</h2>
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
            <button onClick={() => setModalOpen(true)} className="btn btn-primary" style={styles.partyBtn}>
              Book Now
            </button>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      <BookingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedFlavour={selectedFlavour}
        onSubmitSuccess={showToast}
      />
    </div>
  );
};

const styles = {
  page: {
    backgroundColor: '#FCF8F7'
  },
  headerBanner: {
    backgroundColor: '#FFFFFF',
    borderBottom: '1px solid #F3EAE7',
    padding: '40px 0'
  },
  headerGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '30px'
  },
  headerHalf: {
    height: '320px',
    borderRadius: '24px',
    overflow: 'hidden',
    boxShadow: '0 8px 24px rgba(62, 53, 50, 0.05)'
  },
  headerImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  title: {
    marginTop: '20px'
  },
  desc: {
    maxWidth: '700px',
    marginBottom: '60px'
  },
  cakesGrid: {
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
    height: '240px',
    overflow: 'hidden'
  },
  cardImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s ease'
  },
  cardContent: {
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    flex: 1
  },
  cardTitle: {
    fontSize: '1.25rem',
    fontWeight: '700',
    color: '#3E3532',
    marginBottom: '8px'
  },
  cardDesc: {
    fontSize: '0.85rem',
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
    fontSize: '1.3rem',
    fontWeight: '800',
    color: '#E03E6B',
    fontFamily: "'Plus Jakarta Sans', sans-serif"
  },
  cardBtn: {
    padding: '10px 22px',
    borderRadius: '30px',
    fontSize: '0.85rem',
    fontWeight: '700'
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
    cursor: 'pointer'
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

export default Cakes;
