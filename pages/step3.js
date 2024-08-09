import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../lib/supabase';

export default function Step3() {
  const router = useRouter();
  const selectedProfessors = router.query.selectedProfessors ? JSON.parse(router.query.selectedProfessors) : {};
  const [selectedBronze, setSelectedBronze] = useState(null);
  const [professors, setProfessors] = useState([]);

  const fetchProfessors = async () => {
    let { data, error } = await supabase
      .from('prof_ano')
      .select('professors:prof (*)')
      .eq('id_ano_fk', selectedProfessors.year)
      .not('id_prof_fk', 'in', `(${selectedProfessors.gold},${selectedProfessors.silver})`);

    if (error) {
      console.error('Error fetching professors:', error);
    } else {
      setProfessors(data.map((pa) => pa.professors));
    }
  };

  useEffect(() => {
    fetchProfessors();
  }, []);

  const handleSubmit = () => {
    selectedProfessors.bronze = selectedBronze;
    router.push({
      pathname: '/result',
      query: { selectedProfessors: JSON.stringify(selectedProfessors) }
    });
  };

  return (
    <div>
      <h1>Selecione o Professor Bronze</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {professors.map((professor) => (
          <div 
            key={professor.Id_prof} 
            style={{ border: selectedBronze === professor.Id_prof ? '2px solid bronze' : '1px solid gray', margin: '10px', padding: '10px', cursor: 'pointer' }}
            onClick={() => setSelectedBronze(professor.Id_prof)}
          >
            <img src={`/images/${professor.foto_prof}`} alt={professor.nome_prof} style={{ width: '100px', height: '100px' }} />
            <p>{professor.nome_prof}</p>
          </div>
        ))}
      </div>
      <button onClick={handleSubmit} disabled={!selectedBronze}>Submit</button>
    </div>
  );
}
