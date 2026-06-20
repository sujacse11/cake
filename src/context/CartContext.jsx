import React, { createContext, useState, useEffect } from 'react';
import chocTruffleImg from '../assets/images/chocolate_truffle.png';
import creamPuffImg from '../assets/images/cream_puff.png';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const localData = localStorage.getItem('sweet_delights_cart');
    if (localData) return JSON.parse(localData);
    
    return [
      {
        id: 'signature-choc-truffle',
        name: 'Chocolate Truffle Cake',
        desc: 'Rich, dense chocolate layers coated in a smooth ganache.',
        price: 850,
        quantity: 5,
        img: chocTruffleImg
      },
      {
        id: 'pastry-cream-puff',
        name: 'Cream Puff',
        desc: 'Light-as-air choux buns stuffed with freshly whipped chantilly and dusted with snow sugar.',
        price: 850,
        quantity: 1,
        img: creamPuffImg
      }
    ];
  });

  const [addons, setAddons] = useState(() => {
    const localData = localStorage.getItem('sweet_delights_addons');
    return localData ? JSON.parse(localData) : { candles: false, partyPopper: false };
  });

  const [coupon, setCoupon] = useState(() => {
    const localData = localStorage.getItem('sweet_delights_coupon');
    return localData ? JSON.parse(localData) : null; // e.g. { code: 'CHRISTMAS25', rate: 0.25 }
  });

  useEffect(() => {
    localStorage.setItem('sweet_delights_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('sweet_delights_addons', JSON.stringify(addons));
  }, [addons]);

  useEffect(() => {
    localStorage.setItem('sweet_delights_coupon', JSON.stringify(coupon));
  }, [coupon]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existing = prevCart.find((i) => i.id === item.id);
      if (existing) {
        return prevCart.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const updateQuantity = (itemId, change) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.id === itemId) {
            const newQty = item.quantity + change;
            return { ...item, quantity: newQty };
          }
          return item;
        })
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const toggleAddon = (addonKey) => {
    setAddons((prev) => ({
      ...prev,
      [addonKey]: !prev[addonKey]
    }));
  };

  const applyCouponCode = (code) => {
    const cleanedCode = code.trim().toUpperCase();
    if (cleanedCode === 'CHRISTMAS25' || cleanedCode === 'XMASS25') {
      setCoupon({ code: cleanedCode, rate: 0.25 });
      return { success: true, message: '25% discount coupon applied successfully!' };
    }
    return { success: false, message: 'Invalid coupon code. Try CHRISTMAS25.' };
  };

  const removeCoupon = () => {
    setCoupon(null);
  };

  const clearCart = () => {
    setCart([]);
    setAddons({ candles: false, partyPopper: false });
    setCoupon(null);
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  // Cart financial summary
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const addonsTotal = (addons.candles ? 150 : 0) + (addons.partyPopper ? 120 : 0);
  const rawSubtotal = subtotal + addonsTotal;
  
  const discountAmount = coupon ? Math.round(rawSubtotal * coupon.rate) : 0;
  const taxableAmount = rawSubtotal - discountAmount;
  const taxes = taxableAmount > 0 ? Math.round(taxableAmount * 0.026) : 0; // matching Figma ~₹45 for ₹1700
  const total = taxableAmount + taxes;

  return (
    <CartContext.Provider
      value={{
        cart,
        cartCount,
        addToCart,
        updateQuantity,
        removeItem,
        addons,
        toggleAddon,
        coupon,
        applyCouponCode,
        removeCoupon,
        clearCart,
        financials: {
          subtotal,
          addonsTotal,
          rawSubtotal,
          discountAmount,
          taxes,
          total
        }
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
