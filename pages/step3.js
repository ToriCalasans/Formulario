// pages/step3.js

import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { useRouter } from 'next/router';

const Step3 = () => {
  const [professors, setProfessors] = useState([]);
  const router = useRouter();
  const { year, class: selectedClass } = router.query;

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
        .eq('id_ano_fk', year);
  
      if (error) {
        console.error('Error fetching professors:', error);
      } else {
        console.log('Fetched professors:', data);  // Verifique se os dados estão corretos
        setProfessors(data.map(d => d.prof));
      }
    };
  
    if (year) {
      fetchProfessors();
    }
  }, [year]);
  

  const handleSubmit = async () => {
    // Implement form submission logic
  };

  return (
    <div>
      <h1>Step 3: Select Professors</h1>
      <form onSubmit={handleSubmit}>
        {professors.map((prof) => (
          <div key={prof.id_prof}>
            <img src={`/images/${prof.foto_prof}`} alt={prof.nome_prof} />
            <div>{prof.nome_prof}</div>
            <input
              type="radio"
              name="professor"
              value={prof.id_prof}
            />
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Step3;
