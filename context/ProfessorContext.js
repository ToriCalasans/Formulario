import { createContext, useContext, useState } from 'react';

const ProfessorContext = createContext();

export const useProfessor = () => useContext(ProfessorContext);

export const ProfessorProvider = ({ children }) => {
  const [selectedProfessors, setSelectedProfessors] = useState({
    gold: null,
    silver: null,
    bronze: null
  });

  return (
    <ProfessorContext.Provider value={{ selectedProfessors, setSelectedProfessors }}>
      {children}
    </ProfessorContext.Provider>
  );
};
