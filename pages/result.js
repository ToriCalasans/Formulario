import { useEffect, useState } from 'react';
import { useProfessorContext } from '../context/ProfessorContext';
import { supabase } from '../lib/supabase';

const Result = () => {
  const { selectedProfe } = useProfessorContext();
  const [prof, setProf] = useState({ gold: '', silver: '', bronze: '' });

  useEffect(() => {
    const fetchProfessorName = async (professorId, medal) => {
      const { data, error } = await supabase
        .from('prof')
        .select('nome_prof')
        .eq('id_prof', professorId)
        .single();

      if (error) throw error;

      setProfessores((prev) => ({ ...prev, [medal]: data.nome_prof }));
    };

    if (selectedProfessores.gold) fetchProfessorName(selectedProfessores.gold, 'gold');
    if (selectedProfessores.silver) fetchProfessorName(selectedProfessores.silver, 'silver');
    if (selectedProfessores.bronze) fetchProfessorName(selectedProfessores.bronze, 'bronze');
  }, [selectedProfessores]);

  return (
    <div>
      <h1>Resultados</h1>
      <p>Ouro: {professores.gold}</p>
      <p>Prata: {professores.silver}</p>
      <p>Bronze: {professores.bronze}</p>
    </div>
  );
};

export default Result;
