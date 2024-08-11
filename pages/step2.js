// pages/step2.js

import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { useRouter } from 'next/router';

const Step2 = () => {
  const [selectedClass, setSelectedClass] = useState(null);
  const [classes, setClasses] = useState([]);
  const router = useRouter();
  const { year } = router.query;

  useEffect(() => {
    const fetchClasses = async () => {
      const { data, error } = await supabase
        .from('class')
        .select('*');
  
      if (error) {
        console.error('Error fetching classes:', error);
      } else {
        console.log('Fetched classes:', data);  // Verifique se os dados estão corretos
        setClasses(data);
      }
    };
  
    fetchClasses();
  }, []);
  

  const handleNext = () => {
    if (selectedClass) {
      router.push({
        pathname: '/step3',
        query: { year, class: selectedClass }
      });
    }
  };

  return (
    <div>
      <h1>Step 2: Select a Classification</h1>
      <select
        value={selectedClass !== null ? selectedClass : ""}
        onChange={(e) => setSelectedClass(Number(e.target.value))}
      >
        <option value="" disabled>Select a classification</option>
        {classes.map((cls) => (
          <option key={cls.id_class} value={cls.id_class}>
            {cls.nome_class}
          </option>
        ))}
      </select>
      <button onClick={handleNext} disabled={selectedClass === null}>
        Next
      </button>
    </div>
  );
};

export default Step2;
