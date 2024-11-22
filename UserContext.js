import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [stories, setStories] = useState([
    {
      id: '1',
      username: 'storyteller_213',
      time: '2hr',
      title: 'This is my abortion story',
      description:
        'I was 22 and had been dating my boyfriend for 3 years when I first thought I might be pregnant...',
      tags: ['Abortion', 'BIPOC', '1st trimester'],
    },
    {
      id: '2',
      username: 'Binks<3',
      time: '3d',
      title: 'My and my husband’s journey with IVF',
      description:
        'My husband and I talked about wanting kids for years before deciding it was the right time...',
      tags: ['Infertility', '2nd trimester'],
    },
  ]);

  return (
    <UserContext.Provider value={{ user, setUser, stories, setStories }}>
      {children}
    </UserContext.Provider>
  );
}
