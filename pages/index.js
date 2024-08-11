import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

const Home = () => {
  const [anos, setAnos] = useState([]);
  const [selectedAno, setSelectedAno] = useState('');

  useEffect(() => {
    const fetchAnos = async () => {
      const { data, error } = await supabase
        .from('ano')
        .select('*');

      if (error) {
        console.error('Error fetching data:', error);
      } else {
        console.log('Fetched anos:', data);
        setAnos(data);
      }
    };

    fetchAnos();
  }, []);

  return (
    <div>
      <h1>Selecione o Ano</h1>
      <select
        value={selectedAno}
        onChange={(e) => setSelectedAno(e.target.value)}
      >
        <option value="" disabled>
          Selecione um ano
        </option>
        {anos.map((ano) => (
          <option key={ano.id_ano} value={ano.id_ano}>
            {ano.nome_ano}º Ano
          </option>
        ))}
      </select>
    </div>
  );
};

export default Home;
