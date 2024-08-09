import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

export default function Home() {
  const router = useRouter();
  const [selectedYear, setSelectedYear] = useState(null);
  const [years, setYears] = useState([]);

  const fetchYears = async () => {
    let { data, error } = await supabase.from('ano').select('*');
    if (error) {
      console.error('Error fetching years:', error);
    } else {
      setYears(data);
      setSelectedYear(data[0]?.id_ano || null); // Set first year as selected by default
    }
  };

  useEffect(() => {
    fetchYears();
  }, []);

  const handleStart = () => {
    router.push(`/step1?year=${selectedYear}`);
  };

  return (
    <div>
      <h1>Bem-vindo ao Sistema de Seleção de Professores</h1>
      <h2>Selecione o Ano</h2>
      <select value={selectedYear} onChange={(e) => setSelectedYear(Number(e.target.value))}>
        {years.map((year) => (
          <option key={year.id_ano} value={year.id_ano}>
            {year.nome_ano}
          </option>
        ))}
      </select>
      <button onClick={handleStart} disabled={!selectedYear}>Começar</button>
    </div>
  );
}
