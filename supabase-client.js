// Supabase client helper (ES module)
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const SUPABASE_URL = window.SUPABASE_URL || '';
const SUPABASE_ANON_KEY = window.SUPABASE_ANON_KEY || '';

const supabase = (SUPABASE_URL && SUPABASE_ANON_KEY) ? createClient(SUPABASE_URL, SUPABASE_ANON_KEY) : null;

const supabaseClient = {
  supabase,
  async signUp({ email, password }){
    if(!supabase) throw new Error('Supabase not configured');
    return await supabase.auth.signUp({ email, password });
  },
  async signIn({ email, password }){
    if(!supabase) throw new Error('Supabase not configured');
    // supabase-js v2 method
    return await supabase.auth.signInWithPassword({ email, password });
  },
  async signOut(){
    if(!supabase) throw new Error('Supabase not configured');
    return await supabase.auth.signOut();
  },
  async insertEntry(entry){
    if(!supabase) throw new Error('Supabase not configured');
    return await supabase.from('mood_entries').insert([entry]);
  },
  async getEntriesForUser(userId){
    if(!supabase) throw new Error('Supabase not configured');
    return await supabase.from('mood_entries').select('*').eq('user_id', userId).order('created_at', { ascending: false });
  },
  onAuthStateChange(cb){
    if(!supabase) return () => {};
    return supabase.auth.onAuthStateChange(cb);
  }
};

window.supabaseClient = supabaseClient;
export default supabaseClient;
