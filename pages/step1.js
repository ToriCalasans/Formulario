import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../lib/supabase';

export default function Step1() {
  const router = useRouter();
  const { year } = router.query;
  const [selectedGold, setSelectedGold] = useState(null);
  const [professors, setProfessors] = useState([]);

  const fetchProfessors = async () => {
    let { data, error } = await supabase
      .from('prof_ano')
      .select('professors:prof (*), ano (*)')
      .eq('id_ano_fk', year);

    if (error) {
      console.error('Error fetching professors:', error);
    } else {
      setProfessors(data.map((pa) => pa.professors));
    }
  };

  useEffect(() => {
    if (year) {
      fetchProfessors();
    }
  }, [year]);

  const handleNext = () => {
    const selectedProfessors = { gold: selectedGold, year };
    router.push({
      pathname: '/step2',
      query: { selectedProfessors: JSON.stringify(selectedProfessors) }
    });
  };

  return (
    <div>
      <h1>Selecione o Professor Ouro</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {professors.map((professor) => (
          <div 
            key={professor.Id_prof} 
            style={{ border: selectedGold === professor.Id_prof ? '2px solid gold' : '1px solid gray', margin: '10px', padding: '10px', cursor: 'pointer' }}
            onClick={() => setSelectedGold(professor.Id_prof)}
          >
            <img src={`/images/${professor.foto_prof}`} alt={professor.nome_prof} style={{ width: '100px', height: '100px' }} />
            <p>{professor.nome_prof}</p>
          </div>
        ))}
      </div>
      <button onClick={handleNext} disabled={!selectedGold}>Next</button>
    </div>
  );
}
