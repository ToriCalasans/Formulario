import React, { createContext, useContext, useState } from 'react';

const ProfessorContext = createContext();

export const ProfessorProvider = ({ children }) => {
  const [selectedProfessores, setSelectedProfessores] = useState({ gold: '', silver: '', bronze: '' });

  return (
    <ProfessorContext.Provider value={{ selectedProfessores, setSelectedProfessores }}>
      {children}
    </ProfessorContext.Provider>
  );
};

export const useProfessorContext = () => useContext(ProfessorContext);
