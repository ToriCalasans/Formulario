import { createContext, useContext, useState } from 'react';

const ProfessorContext = createContext();

export const useProfessorContext = () => useContext(ProfessorContext);

export const ProfessorProvider = ({ children }) => {
  const [selectedAno, setSelectedAno] = useState(null);
  const [selectedProfessores, setSelectedProfessores] = useState({
    gold: null,
    silver: null,
    bronze: null,
  });

  return (
    <ProfessorContext.Provider
      value={{
        selectedAno,
        setSelectedAno,
        selectedProfessores,
        setSelectedProfessores,
      }}
    >
      {children}
    </ProfessorContext.Provider>
  );
};
