import React, { useEffect, useState } from 'react';
import Routes from './src/routes';
import { VersionContext } from './src/contexts/version';
import { getData } from './src/services/localStorage';

export default function App() {
  const [version, setVersion] = useState('nvi');
  
  const getCurrentVersion = async () => {
    const value = await getData('version') || 'nvi';
    setVersion(value);
  }

  useEffect(()=> {
    getCurrentVersion();
  }, []);

  return (
    <VersionContext.Provider value={{ version, setVersion }}>
      <Routes/>
    </VersionContext.Provider>
  );
}