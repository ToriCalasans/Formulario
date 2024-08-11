import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
// pages/index.js

import { useRouter } from 'next/router';

const Index = () => {
  const router = useRouter();

  const goToStep1 = () => {
    router.push('/step1');
  };

  return (
    <div>
      <h1>Welcome to the Professor Selection System</h1>
      <button onClick={goToStep1}>Start</button>
    </div>
  );
};

export default Index;

