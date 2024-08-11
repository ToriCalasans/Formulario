import { useState, useEffect } from 'react';
import { useProfessorContext } from '../context/ProfessorContext';
import { supabase } from '../lib/supabase';

const Result = ({ professorsFromServer }) => {
  const { selectedProfessores } = useProfessorContext();
  const [professores, setProfessores] = useState({
    gold: professorsFromServer.gold || '',
    silver: professorsFromServer.silver || '',
    bronze: professorsFromServer.bronze || ''
  });

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

export async function getServerSideProps(context) {
  const { selectedProfessores } = context.query; // Obtém dados da query params

  // Se você precisa obter dados dos professores no servidor
  const { data, error } = await supabase
    .from('prof')
    .select('id_prof, nome_prof')
    .in('id_prof', [
      selectedProfessores.gold,
      selectedProfessores.silver,
      selectedProfessores.bronze,
    ]);

  if (error) {
    return {
      props: {
        professorsFromServer: {
          gold: '',
          silver: '',
          bronze: ''
        },
      },
    };
  }

  // Mapeia os dados recebidos para a estrutura desejada
  const professorsFromServer = data.reduce((acc, prof) => {
    if (prof.id_prof === selectedProfessores.gold) acc.gold = prof.nome_prof;
    if (prof.id_prof === selectedProfessores.silver) acc.silver = prof.nome_prof;
    if (prof.id_prof === selectedProfessores.bronze) acc.bronze = prof.nome_prof;
    return acc;
  }, { gold: '', silver: '', bronze: '' });

  return {
    props: {
      professorsFromServer
    },
  };
}

export default Result;
