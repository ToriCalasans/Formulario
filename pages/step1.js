import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

const Step1 = () => {
  const [years, setYears] = useState([]);
  const [selectedYear, setSelectedYear] = useState(null);

  useEffect(() => {
    const fetchYears = async () => {
      const { data, error } = await supabase
        .from('ano')  // Nome da tabela
        .select('*'); // Seleciona todas as colunas
  
      if (error) {
        console.error('Error fetching years:', error);
      } else {
        console.log('Fetched anos:', data);  // Verifique se os dados estão corretos
        setYears(data);
      }
    };
  
    fetchYears();
  }, []);
  
  const handleNext = () => {
    // Lógica para ir para a próxima página
  };

  return (
    <div>
      <h1>Step 1: Select a Year</h1>
      {years.length === 0 ? (
        <p>No years available</p>
      ) : (
        <select
          value={selectedYear !== null ? selectedYear : ""}
          onChange={(e) => setSelectedYear(Number(e.target.value))}
        >
          <option value="" disabled>Select a year</option>
          {years.map((ano) => (
            <option key={ano.id_ano} value={ano.id_ano}>
              {ano.nome_ano}º Ano
            </option>
          ))}
        </select>
      )}
      <button onClick={handleNext} disabled={selectedYear === null}>
        Next
      </button>
    </div>
  );
};

export default Step1;
