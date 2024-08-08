// pages/api/professors.js
import pool from '../../db';

export default async function handler(req, res) {
  const { year } = req.query;
  try {
    const result = await pool.query(
      'SELECT id, name, photo FROM professors WHERE years @> $1::int[]',
      [[parseInt(year)]]
    );
    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Error fetching professors:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
