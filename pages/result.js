import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../lib/supabase';

export default function Result() {
  const router = useRouter();
  const [selectedProfessors, setSelectedProfessors] = useState(router.query.selectedProfessors ? JSON.parse(router.query.selectedProfessors) : {});
  const [professors, setProfessors] = useState({});

  const fetchProfessorDetails = async (profId, role) => {
    let { data, error } = await supabase
      .from('prof')
      .select('*')
      .eq('Id_prof', profId)
      .single();

    if (error) {
      console.error(`Error fetching ${role} professor:`, error);
    } else {
      setProfessors((prev) => ({ ...prev, [role]: data }));
    }
  };

  useEffect(() => {
    if (selectedProfessors.gold) fetchProfessorDetails(selectedProfessors.gold, 'gold');
    if (selectedProfessors.silver) fetchProfessorDetails(selectedProfessors.silver, 'silver');
    if (selectedProfessors.bronze) fetchProfessorDetails(selectedProfessors.bronze, 'bronze');
  }, [selectedProfessors]);

  return (
    <div>
      <h1>Professores Selecionados</h1>
      {professors.gold && (
        <div>
          <h2>Ouro</h2>
          <img src={`/images/${professors.gold.foto_prof}`} alt={professors.gold.nome_prof} style={{ width: '100px', height: '100px' }} />
          <p>{professors.gold.nome_prof}</p>
        </div>
      )}
      {professors.silver && (
        <div>
          <h2>Prata</h2>
          <img src={`/images/${professors.silver.foto_prof}`} alt={professors.silver.nome_prof} style={{ width: '100px', height: '100px' }} />
          <p>{professors.silver.nome_prof}</p>
        </div>
      )}
      {professors.bronze && (
        <div>
          <h2>Bronze</h2>
          <img src={`/images/${professors.bronze.foto_prof}`} alt={professors.bronze.nome_prof} style={{ width: '100px', height: '100px' }} />
          <p>{professors.bronze.nome_prof}</p>
        </div>
      )}
    </div>
  );
}
