import React from 'react';
import { useNavigate } from 'react-router-dom';
import bakeryInteriorImg from '../assets/images/bakery_interior.png';
import isabellaImg from '../assets/images/baker_isabella.png';
import rahulImg from '../assets/images/baker_rahul.png';
import meiImg from '../assets/images/baker_mei.png';

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="animate-fade-in" style={styles.page}>
      {/* 1. Our Story Section */}
      <section className="section-padding" style={styles.storySection}>
        <div className="container hero-container-flex" style={styles.storyContainer}>
          <div className="hero-left-align" style={styles.storyLeft}>
            <div style={styles.premiumBadge}>📖 Our Story</div>
            <h1 style={styles.storyTitle}>Crafting Sweet Memories Since 2010</h1>
            <p style={styles.storyText}>
              What started as a small home kitchen experiment has blossomed into the city's most loved premium bakery. At Sweet Delights, we believe that every cake tells a story and every pastry holds a piece of magic.
            </p>
            <p style={styles.storyText}>
              Our founder, guided by a passion for authentic flavors and artistic presentation, built this bakery on one simple principle: never compromise on quality. Today, that principle still guides everything we do.
            </p>
          </div>
          <div style={styles.storyRight}>
            <div style={styles.imageFrame}>
              <img src={bakeryInteriorImg} alt="Sweet Delights Bakery Interior" style={styles.storyImg} />
            </div>
          </div>
        </div>
      </section>

      {/* 2. What We Stand For Section */}
      <section className="section-padding" style={styles.valuesSection}>
        <div className="container">
          <h2 className="heading-lg text-center">What We Stand For</h2>
          <p className="subtitle text-center">
            Our commitment to excellence goes beyond just baking. It's about delivering a truly premium, hygienic, and unforgettable experience.
          </p>

          <div className="product-grid-overrides" style={styles.valuesGrid}>
            <div style={styles.valueCard}>
              <div style={styles.valueIconWrapper}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3c0 4.5 1.5 6 6 6-4.5 0-6 1.5-6 6 0-4.5-1.5-6-6-6 4.5 0 6-1.5 6-6z" />
                  <path d="M19 15c0 2.25.75 3 3 3-2.25 0-3 .75-3 3 0-2.25-.75-3-3-3 2.25 0 3-.75 3-3z" />
                </svg>
              </div>
              <h3 style={styles.valueTitle}>Premium Ingredients</h3>
              <p style={styles.valueText}>
                We source only the finest chocolates, freshest farm fruits, and purest vanilla to ensure every bite is bursting with authentic flavor.
              </p>
            </div>

            <div style={styles.valueCard}>
              <div style={styles.valueIconWrapper}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  <path d="M9 11l2 2 4-4"></path>
                </svg>
              </div>
              <h3 style={styles.valueTitle}>Uncompromised Hygiene</h3>
              <p style={styles.valueText}>
                Baked in a spotless, modern kitchen. We follow rigorous safety and sanitization standards because your health is our priority.
              </p>
            </div>

            <div style={styles.valueCard}>
              <div style={styles.valueIconWrapper}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </div>
              <h3 style={styles.valueTitle}>Baked with Love</h3>
              <p style={styles.valueText}>
                Our team of expert chefs pours their heart and soul into every recipe, ensuring each creation is as beautiful as it is delicious.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Meet Our Master Bakers Section */}
      <section className="section-padding" style={styles.bakersSection}>
        <div className="container">
          <h2 className="heading-lg text-center">Meet Our Master Bakers</h2>
          <p className="subtitle text-center">
            The talented hands and creative minds behind your favorite sweet delights.
          </p>

          <div className="product-grid-overrides" style={styles.bakersGrid}>
            <div style={styles.bakerCard}>
              <div style={styles.bakerCircle}>
                <img src={isabellaImg} alt="Chef Isabella" style={styles.bakerImg} />
              </div>
              <h3 style={styles.bakerName}>Chef Isabella</h3>
              <span style={styles.bakerRole}>Head Pastry Chef</span>
              <p style={styles.bakerBio}>
                With 15 years of experience in French patisseries, Isabella leads our team with visionary flavor combinations.
              </p>
            </div>

            <div style={styles.bakerCard}>
              <div style={styles.bakerCircle}>
                <img src={rahulImg} alt="Rahul Sharma" style={styles.bakerImg} />
              </div>
              <h3 style={styles.bakerName}>Rahul Sharma</h3>
              <span style={styles.bakerRole}>Master Chocolatier</span>
              <p style={styles.bakerBio}>
                A perfectionist at heart, Rahul ensures every truffle and brownie has the perfect rich, fudgy texture.
              </p>
            </div>

            <div style={styles.bakerCard}>
              <div style={styles.bakerCircle}>
                <img src={meiImg} alt="Mei Lin" style={styles.bakerImg} />
              </div>
              <h3 style={styles.bakerName}>Mei Lin</h3>
              <span style={styles.bakerRole}>Lead Cake Decorator</span>
              <p style={styles.bakerBio}>
                Mei brings cakes to life with her incredible piping skills and eye for stunning, modern aesthetic details.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA Banner Section */}
      <section className="container" style={styles.ctaSectionWrapper}>
        <div style={styles.ctaBanner}>
          <h2 style={styles.ctaTitle}>Ready to taste the magic?</h2>
          <p style={styles.ctaText}>
            Explore our menu of handcrafted cakes and delightful pastries. Freshly baked happiness is just a click away.
          </p>
          <button 
            onClick={() => navigate('/')} 
            style={styles.ctaBtn}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#FCF8F7'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#FFFFFF'}
          >
            Explore Menu & Order
          </button>
        </div>
      </section>
    </div>
  );
};

const styles = {
  page: {
    backgroundColor: '#FCF8F7'
  },
  storySection: {
    backgroundColor: '#FFFFFF',
    borderBottom: '1px solid #F3EAE7'
  },
  storyContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '60px',
    flexWrap: 'wrap'
  },
  storyLeft: {
    flex: '1 1 500px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '20px'
  },
  premiumBadge: {
    backgroundColor: '#EAE0DD',
    color: '#3E3532',
    padding: '6px 14px',
    borderRadius: '20px',
    fontSize: '0.8rem',
    fontWeight: '700',
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    display: 'inline-block'
  },
  storyTitle: {
    fontSize: '2.8rem',
    color: '#3E3532',
    letterSpacing: '-0.02em'
  },
  storyText: {
    fontSize: '1.05rem',
    color: '#7A6F6C',
    lineHeight: '1.6'
  },
  storyRight: {
    flex: '1 1 450px',
    display: 'flex',
    justifyContent: 'center'
  },
  imageFrame: {
    width: '100%',
    maxWidth: '520px',
    borderRadius: '24px',
    overflow: 'hidden',
    boxShadow: '0 12px 30px rgba(62, 53, 50, 0.06)'
  },
  storyImg: {
    width: '100%',
    height: 'auto',
    display: 'block'
  },
  valuesSection: {
    backgroundColor: '#FCF8F7'
  },
  valuesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '30px'
  },
  valueCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: '24px',
    padding: '40px',
    boxShadow: '0 4px 12px rgba(62, 53, 50, 0.02)',
    border: '1px solid #F3EAE7',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    gap: '16px',
    transition: 'transform 0.3s ease'
  },
  valueIconWrapper: {
    backgroundColor: '#FCE7EE',
    color: '#3E3532',
    width: '64px',
    height: '64px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  valueTitle: {
    fontSize: '1.3rem',
    fontWeight: '700',
    color: '#3E3532'
  },
  valueText: {
    fontSize: '0.95rem',
    color: '#7A6F6C',
    lineHeight: '1.6'
  },
  bakersSection: {
    backgroundColor: '#FCF8F7',
    borderTop: '1px solid #F3EAE7',
    borderBottom: '1px solid #F3EAE7'
  },
  bakersGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '40px',
    marginTop: '20px'
  },
  bakerCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    gap: '12px'
  },
  bakerCircle: {
    width: '180px',
    height: '180px',
    borderRadius: '50%',
    overflow: 'hidden',
    marginBottom: '10px'
  },
  bakerImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  bakerName: {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: '1.3rem',
    fontWeight: '700',
    color: '#3E3532'
  },
  bakerRole: {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    color: '#E03E6B',
    fontWeight: '600',
    fontSize: '0.9rem',
    marginTop: '4px',
    marginBottom: '12px',
    display: 'block'
  },
  bakerBio: {
    fontSize: '0.9rem',
    color: '#7A6F6C',
    lineHeight: '1.6',
    maxWidth: '300px',
    marginTop: '6px'
  },
  ctaSectionWrapper: {
    padding: '80px 24px'
  },
  ctaBanner: {
    backgroundColor: '#F6BCD1', // The exact primary brand color requested!
    borderRadius: '30px',
    padding: '60px 40px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
    boxShadow: '0 16px 36px rgba(246, 188, 209, 0.25)'
  },
  ctaTitle: {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: '2.4rem',
    fontWeight: '800',
    color: '#3E3532'
  },
  ctaText: {
    fontSize: '1.1rem',
    color: '#3E3532',
    maxWidth: '600px',
    lineHeight: '1.6',
    opacity: 0.95
  },
  ctaBtn: {
    marginTop: '10px',
    padding: '12px 36px',
    fontSize: '0.95rem',
    color: '#3E3532',
    backgroundColor: '#FFFFFF',
    borderRadius: '6px',
    fontWeight: '600',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
    fontFamily: "'Plus Jakarta Sans', sans-serif"
  }
};

export default About;
