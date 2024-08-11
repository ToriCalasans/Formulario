import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { useRouter } from 'next/router';

const Index = () => {
  const [years, setYears] = useState([]);
  const [selectedYear, setSelectedYear] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchYears = async () => {
      const { data, error } = await supabase
        .from('ano')
        .select('*');

      if (error) {
        console.error('Error fetching years:', error);
      } else {
        setYears(data);
      }
    };

    fetchYears();
  }, []);

  const handleNext = () => {
    if (selectedYear) {
      router.push({
        pathname: '/step1',
        query: { year: selectedYear }
      });
    }
  };

  return (
    <div>
      <h1>Select a Year</h1>
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
      <button onClick={handleNext} disabled={selectedYear === null}>
        Next
      </button>
    </div>
  );
};

export default Index;
