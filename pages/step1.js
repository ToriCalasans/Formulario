import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../lib/supabase';
import { useProfessorContext } from '../context/ProfessorContext';

export default function Step1() {
  const router = useRouter();
  const { selectedYear, selectedProfessors, setSelectedProfessors } = useProfessorContext();
  const [professors, setProfessors] = useState([]);

  useEffect(() => {
    const fetchProfessors = async () => {
      let { data, error } = await supabase
        .from('prof')
        .select('*')
        .in('id_prof', supabase.from('prof_ano').select('id_prof_fk').eq('id_ano_fk', selectedYear));
      if (error) console.error('Error fetching professors:', error);
      else setProfessors(data);
    };
    if (selectedYear) fetchProfessors();
  }, [selectedYear]);

  const handleNext = () => {
    router.push('/step2');
  };

  const selectProfessor = (profId) => {
    setSelectedProfessors({ ...selectedProfessors, gold: profId });
  };

  return (
    <div>
      <h1>Selecione o Professor Ouro</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {professors.map((prof) => (
          <div 
            key={prof.id_prof} 
            style={{ border: selectedProfessors.gold === prof.id_prof ? '2px solid gold' : '1px solid gray', margin: '10px', padding: '10px', cursor: 'pointer' }}
            onClick={() => selectProfessor(prof.id_prof)}
          >
            <img src={`/images/${prof.foto_prof}`} alt={prof.nome_prof} style={{ width: '100px', height: '100px' }} />
            <p>{prof.nome_prof}</p>
          </div>
        ))}
      </div>
      <button onClick={handleNext} disabled={!selectedProfessors.gold}>Next</button>
    </div>
  );
}
