import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Login = ({ showToast }) => {
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email.trim() || !formData.password.trim()) {
      setError('Please fill in all fields.');
      return;
    }

    const res = loginUser(formData.email, formData.password);
    if (res.success) {
      showToast(res.message);
      navigate('/');
    } else {
      setError(res.message);
    }
  };

  return (
    <div className="animate-fade-in" style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>Welcome Back</h1>
        <p style={styles.subtitle}>Log in to manage your orders and speed up your checkout.</p>
        
        {error && <div style={styles.error}>{error}</div>}
        
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.fieldGroup}>
            <label style={styles.label}>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="name@example.com"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
          
          <div style={styles.fieldGroup}>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
          
          <button type="submit" className="btn btn-primary" style={styles.submitBtn}>
            Log In
          </button>
        </form>
        
        <div style={styles.footer}>
          Don't have an account? <Link to="/register" style={styles.link}>Register here</Link>
        </div>
      </div>
    </div>
  );
};

const styles = {
  page: {
    backgroundColor: '#FCF8F7',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '80vh',
    padding: '40px 20px',
    fontFamily: "'DM Sans', sans-serif"
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: '24px',
    width: '100%',
    maxWidth: '420px',
    padding: '40px',
    boxShadow: '0 8px 30px rgba(62, 53, 50, 0.05)',
    border: '1px solid #F3EAE7'
  },
  title: {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: '2rem',
    fontWeight: '800',
    color: '#3E3532',
    textAlign: 'center',
    marginBottom: '8px'
  },
  subtitle: {
    fontSize: '0.9rem',
    color: '#7A6F6C',
    lineHeight: '1.5',
    textAlign: 'center',
    marginBottom: '28px'
  },
  error: {
    backgroundColor: '#FFEBEE',
    color: '#C62828',
    padding: '12px',
    borderRadius: '8px',
    fontSize: '0.85rem',
    fontWeight: '700',
    marginBottom: '20px',
    border: '1px solid #FFCDD2'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  },
  fieldGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  },
  label: {
    fontSize: '0.8rem',
    fontWeight: '700',
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    color: '#3E3532'
  },
  input: {
    padding: '12px 16px',
    border: '1.5px solid #F3EAE7',
    borderRadius: '12px',
    fontSize: '0.95rem',
    backgroundColor: '#FCF8F7',
    color: '#3E3532',
    fontFamily: 'inherit'
  },
  submitBtn: {
    width: '100%',
    padding: '14px',
    borderRadius: '30px',
    fontSize: '1rem',
    fontWeight: '700',
    marginTop: '8px'
  },
  footer: {
    textAlign: 'center',
    marginTop: '24px',
    fontSize: '0.85rem',
    color: '#7A6F6C',
    fontWeight: '600'
  },
  link: {
    color: '#E03E6B',
    fontWeight: '700',
    textDecoration: 'underline'
  }
};

export default Login;
