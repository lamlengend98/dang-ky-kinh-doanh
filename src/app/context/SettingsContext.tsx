import { createContext, useContext, useState, ReactNode, useCallback } from 'react';

interface SettingsContextType {
  isSettingsOpen: boolean;
  openSettings: () => void;
  closeSettings: () => void;
  isConfigured: () => boolean;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const openSettings = useCallback(() => setIsSettingsOpen(true), []);
  const closeSettings = useCallback(() => setIsSettingsOpen(false), []);

  const isConfigured = useCallback(() => {
    const stored = localStorage.getItem('authorized_person_info');
    if (!stored) return false;
    try {
      const info = JSON.parse(stored);
      // At minimum, we require a full name
      return !!info.hoTen && info.hoTen.trim().length > 0;
    } catch (e) {
      return false;
    }
  }, []);

  return (
    <SettingsContext.Provider value={{ isSettingsOpen, openSettings, closeSettings, isConfigured }}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
}
