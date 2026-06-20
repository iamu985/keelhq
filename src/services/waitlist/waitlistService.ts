/**
 * Waitlist service — handles email sign-ups for the Keel waitlist.
 *
 * Responsibility:
 * - Insert a new email into the waitlist_signups table via Supabase.
 * - Return a typed result indicating success or failure.
 *
 * Supabase table expected:
 *   waitlist_signups (id uuid, email text unique, created_at timestamptz)
 */

// TODO: add unit tests for this logic

export interface WaitlistResult {
  readonly success: boolean;
  readonly error?: string;
}

/**
 * Adds an email address to the waitlist.
 *
 * Replace the stub body with the Supabase implementation once
 * SUPABASE_URL and SUPABASE_ANON_KEY env vars are configured.
 */
export async function addToWaitlist(email: string): Promise<WaitlistResult> {
  // TODO: uncomment and replace stub when Supabase is connected:
  // import { createClient } from '@supabase/supabase-js';
  // const supabase = createClient(import.meta.env.SUPABASE_URL, import.meta.env.SUPABASE_ANON_KEY);
  // const { error } = await supabase.from('waitlist_signups').insert({ email });
  // if (error) return { success: false, error: error.message };
  // return { success: true };

  // Stub — remove when Supabase is connected:
  await new Promise<void>((resolve) => setTimeout(resolve, 700));
  return { success: true };
}
