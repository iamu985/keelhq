/**
 * Authentication service for KeelHq.
 *
 * Responsibility:
 * - Provide a single integration point for all auth operations.
 * - Currently contains stubs; replace implementations with Supabase or FastAPI calls.
 */

// TODO: add unit tests for this service

export interface LoginResult {
  readonly success: boolean;
  readonly error?: string;
}

export interface LogoutResult {
  readonly success: boolean;
}

/**
 * Attempts to sign in a user with email and password.
 * Stub implementation — replace with real backend call.
 */
export async function login(email: string, password: string): Promise<LoginResult> {
  // TODO: replace stub with real backend call
  // Option A — Supabase: const { error } = await supabase.auth.signInWithPassword({ email, password });
  // Option B — FastAPI: const res = await fetch('/api/auth/login', { method: 'POST', body: JSON.stringify({ email, password }) });
  await new Promise<void>((resolve) => setTimeout(resolve, 800));
  return { success: false, error: 'Authentication not yet connected.' };
}

/**
 * Signs out the currently authenticated user.
 * Stub implementation — replace with real backend call.
 */
export async function logout(): Promise<LogoutResult> {
  // TODO: replace stub with real backend call
  await new Promise<void>((resolve) => setTimeout(resolve, 200));
  return { success: true };
}
