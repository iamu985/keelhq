/**
 * Waitlist service — handles email sign-ups for the KeelHq waitlist.
 *
 * Responsibility:
 * - Insert a new email into the waitlist_users table via Supabase.
 * - Return a typed result indicating success or failure.
 *
 * Supabase table expected:
 *   waitlist_users (id uuid, email text unique, created_at timestamptz)
 */

import { supabaseClient } from '../../lib/supabase';

// TODO: add unit tests for this logic

export interface WaitlistResult {
  readonly success: boolean;
  readonly error?: string;
}

/**
 * Adds an email address to the waitlist.
 */
export async function addToWaitlist(email: string): Promise<WaitlistResult> {
  const { error } = await supabaseClient.from('waitlist_users').insert({ email });

  if (error) {
    return { success: false, error: error.message };
  }

  return { success: true };
}
