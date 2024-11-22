import React, { createContext, useState } from 'react';

// Create the UserContext
export const UserContext = createContext();

// Provide the UserContext to the app
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Initial user state is null

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
