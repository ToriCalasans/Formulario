import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { useRouter } from 'next/router';

const Step1 = () => {
  const [professors, setProfessors] = useState([]);
  const router = useRouter();
  const { year } = router.query;

  useEffect(() => {
    const fetchProfessors = async () => {
      const { data, error } = await supabase
        .from('prof_ano')
        .select(`
          prof (
            id_prof,
            nome_prof,
            foto_prof
          )
        `)
        .eq('id_ano_fk', year);  // Corrigir o nome da coluna aqui

      if (error) {
        console.error('Error fetching professors:', error);
      } else {
        setProfessors(data.map(d => d.prof));
      }
    };

    if (year) {
      fetchProfessors();
    }
  }, [year]);

  const handleNext = (selectedProfessor) => {
    router.push({
      pathname: '/step2',
      query: { year, gold: selectedProfessor }
    });
  };

  return (
    <div>
      <h1>Select the Gold Professor</h1>
      {professors.map((prof) => (
        <div key={prof.id_prof} onClick={() => handleNext(prof.id_prof)}>
          <img src={`/images/${prof.foto_prof}`} alt={prof.nome_prof} />
          <div>{prof.nome_prof}</div>
        </div>
      ))}
    </div>
  );
};

export default Step1;
