'use client';

import React, { createContext, useState, useContext, ReactNode } from 'react';

type Role = 'guest' | 'union' | 'support_org' | 'company' | 'haken' | 'yuryo_shokai' | 'sending_company';

interface RoleContextType {
  userRole: Role;
  setUserRole: (role: Role) => void;
}

const RoleContext = createContext<RoleContextType | undefined>(undefined);

export const RoleProvider = ({ children }: { children: ReactNode }) => {
  const [userRole, setUserRole] = useState<Role>('guest');

  return (
    <RoleContext.Provider value={{ userRole, setUserRole }}>
      {children}
    </RoleContext.Provider>
  );
};

export const useRole = () => {
  const context = useContext(RoleContext);
  if (context === undefined) {
    throw new Error('useRole must be used within a RoleProvider');
  }
  return context;
};
