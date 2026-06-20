import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(() => {
    const user = localStorage.getItem('sweet_delights_user');
    return user ? JSON.parse(user) : null;
  });

  const [registeredUsers, setRegisteredUsers] = useState(() => {
    const users = localStorage.getItem('sweet_delights_registered_users');
    return users ? JSON.parse(users) : [
      { name: 'Sarah Jenkins', email: 'sarah@example.com', password: 'password123' }
    ];
  });

  useEffect(() => {
    localStorage.setItem('sweet_delights_registered_users', JSON.stringify(registeredUsers));
  }, [registeredUsers]);

  const registerUser = (name, email, password) => {
    const existing = registeredUsers.find((u) => u.email.toLowerCase() === email.toLowerCase());
    if (existing) {
      return { success: false, message: 'Email already registered.' };
    }
    const newUser = { name, email, password };
    setRegisteredUsers((prev) => [...prev, newUser]);
    return { success: true, message: 'Account created successfully! You can now log in.' };
  };

  const loginUser = (email, password) => {
    const user = registeredUsers.find(
      (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    );
    if (user) {
      setCurrentUser(user);
      localStorage.setItem('sweet_delights_user', JSON.stringify(user));
      return { success: true, message: `Welcome back, ${user.name}!` };
    }
    return { success: false, message: 'Invalid email or password.' };
  };

  const logoutUser = () => {
    setCurrentUser(null);
    localStorage.removeItem('sweet_delights_user');
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        registerUser,
        loginUser,
        logoutUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
