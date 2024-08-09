import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

const years = [6, 7, 8, 9]; // Anos disponíveis para seleção

export default function Home() {
  const [selectedYear, setSelectedYear] = useState(years[0]); // Ano selecionado
  const [professors, setProfessors] = useState([]);

  const fetchProfessors = async (year) => {
    console.log('Fetching professors for year:', year);
    let { data, error } = await supabase
      .from('professors')
      .select('*')
      .contains('years', [`${year}°`]); // Ajuste para incluir o símbolo de grau

    if (error) {
      console.error('Error fetching professors:', error);
    } else {
      console.log('Professors fetched:', data);
      setProfessors(data);
    }
  };

  useEffect(() => {
    fetchProfessors(selectedYear);
  }, [selectedYear]);

  return (
    <div>
      <h1>Selecione o Ano</h1>
      <select value={selectedYear} onChange={(e) => setSelectedYear(Number(e.target.value))}>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}º Ano
          </option>
        ))}
      </select>
      <div>
        <h2>Professores do {selectedYear}º Ano</h2>
        {professors.length === 0 ? (
          <p>Nenhum professor encontrado.</p>
        ) : (
          <div>
            {professors.map((professor) => (
              <div key={professor.id}>
                <img src={professor.photo} alt={professor.name} />
                <p>{professor.name}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
