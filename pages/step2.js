import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../lib/supabase';

export default function Step2() {
  const router = useRouter();
  const selectedProfessors = router.query.selectedProfessors ? JSON.parse(router.query.selectedProfessors) : {};
  const [selectedSilver, setSelectedSilver] = useState(null);
  const [professors, setProfessors] = useState([]);

  const fetchProfessors = async () => {
    let { data, error } = await supabase
      .from('prof_ano')
      .select('professors:prof (*)')
      .eq('id_ano_fk', selectedProfessors.year)
      .neq('id_prof_fk', selectedProfessors.gold);

    if (error) {
      console.error('Error fetching professors:', error);
    } else {
      setProfessors(data.map((pa) => pa.professors));
    }
  };

  useEffect(() => {
    fetchProfessors();
  }, []);

  const handleNext = () => {
    selectedProfessors.silver = selectedSilver;
    router.push({
      pathname: '/step3',
      query: { selectedProfessors: JSON.stringify(selectedProfessors) }
    });
  };

  return (
    <div>
      <h1>Selecione o Professor Prata</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {professors.map((professor) => (
          <div 
            key={professor.Id_prof} 
            style={{ border: selectedSilver === professor.Id_prof ? '2px solid silver' : '1px solid gray', margin: '10px', padding: '10px', cursor: 'pointer' }}
            onClick={() => setSelectedSilver(professor.Id_prof)}
          >
            <img src={`/images/${professor.foto_prof}`} alt={professor.nome_prof} style={{ width: '100px', height: '100px' }} />
            <p>{professor.nome_prof}</p>
          </div>
        ))}
      </div>
      <button onClick={handleNext} disabled={!selectedSilver}>Next</button>
    </div>
  );
}
