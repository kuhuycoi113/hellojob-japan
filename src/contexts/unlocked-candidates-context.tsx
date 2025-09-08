'use client';

import React, { createContext, useState, useContext, ReactNode, useCallback } from 'react';

interface UnlockedCandidatesContextType {
  unlockedIds: Set<string>;
  unlockCandidate: (id: string) => void;
}

const UnlockedCandidatesContext = createContext<UnlockedCandidatesContextType | undefined>(undefined);

export const UnlockedCandidatesProvider = ({ children }: { children: ReactNode }) => {
  const [unlockedIds, setUnlockedIds] = useState<Set<string>>(new Set());

  const unlockCandidate = useCallback((id: string) => {
    setUnlockedIds(prevIds => {
      const newIds = new Set(prevIds);
      newIds.add(id);
      return newIds;
    });
  }, []);

  return (
    <UnlockedCandidatesContext.Provider value={{ unlockedIds, unlockCandidate }}>
      {children}
    </UnlockedCandidatesContext.Provider>
  );
};

export const useUnlockedCandidates = () => {
  const context = useContext(UnlockedCandidatesContext);
  if (context === undefined) {
    throw new Error('useUnlockedCandidates must be used within a UnlockedCandidatesProvider');
  }
  return context;
};
