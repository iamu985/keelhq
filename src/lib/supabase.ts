/**
 * Supabase browser client.
 *
 * Responsibility:
 * - Create a single shared Supabase client for the frontend using public env vars.
 */

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

if (typeof supabaseUrl !== 'string' || supabaseUrl.length === 0) {
  throw new Error('Missing PUBLIC_SUPABASE_URL environment variable');
}

if (typeof supabaseAnonKey !== 'string' || supabaseAnonKey.length === 0) {
  throw new Error('Missing PUBLIC_SUPABASE_ANON_KEY environment variable');
}

export const supabaseClient = createClient(supabaseUrl, supabaseAnonKey);
