import React from 'react';

export default function ProfessorCard({ professor, selected, onClick }) {
  return (
    <div 
      style={{ border: selected ? '2px solid gold' : '1px solid gray', margin: '10px', padding: '10px', cursor: 'pointer' }}
      onClick={onClick}
    >
      <img src={`/images/${professor.foto_prof}`} alt={professor.nome_prof} style={{ width: '100px', height: '100px' }} />
      <p>{professor.nome_prof}</p>
    </div>
  );
}
