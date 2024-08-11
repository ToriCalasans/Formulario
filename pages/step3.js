import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { useRouter } from 'next/router';

const Step3 = () => {
  const [professors, setProfessors] = useState([]);
  const router = useRouter();
  const { year, gold, silver } = router.query;

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
        .eq('id_ano_fk', year)  // Corrigir o nome da coluna aqui
        .not(`id_prof_fk`, 'in', `(${gold},${silver})`);  // Corrigir o nome da coluna aqui

      if (error) {
        console.error('Error fetching professors:', error);
      } else {
        setProfessors(data.map(d => d.prof));
      }
    };

    if (year && gold && silver) {
      fetchProfessors();
    }
  }, [year, gold, silver]);

  const handleSubmit = (selectedProfessor) => {
    // Enviar dados para o banco de dados
    // ...

    router.push('/final');
  };

  return (
    <div>
      <h1>Select the Bronze Professor</h1>
      {professors.map((prof) => (
        <div key={prof.id_prof} onClick={() => handleSubmit(prof.id_prof)}>
          <img src={`/images/${prof.foto_prof}`} alt={prof.nome_prof} />
          <div>{prof.nome_prof}</div>
        </div>
      ))}
    </div>
  );
};

export default Step3;
