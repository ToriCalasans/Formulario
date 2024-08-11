import { supabase } from '../../lib/supabase';

export default async function handler(req, res) {
  const { anoId } = req.query;

  try {
    const { data, error } = await supabase
      .from('prof_ano')
      .select(`
        id_prof_ano,
        prof (id_prof, nome_prof, foto_prof)
      `)
      .eq('id_ano_fk', anoId);

    if (error) throw error;

    const professores = data.map((item) => ({
      id: item.prof.id_prof,
      nome: item.prof.nome_prof,
      foto: item.prof.foto_prof,
    }));

    res.status(200).json(professores);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
