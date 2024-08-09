// pages/api/professors.js
import { supabase } from '../../lib/supabase';

export default async function handler(req, res) {
  const { year } = req.query;
  try {
    const { data, error } = await supabase
      .from('professors')
      .select('id, name, photo')
      .contains('years', [parseInt(year)]);

    if (error) throw error;

    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching professors:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
