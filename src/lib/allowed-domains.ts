/**
 * Allowed company email domains. This is the client-side mirror; the database
 * (allowed_email_domains table + the auth.users domain trigger + the
 * Before-User-Created hook) is the real enforcement — a non-Magppie Google
 * account can't even be created in Supabase.
 */
export const ALLOWED_EMAIL_DOMAINS = ['mymagppie.com', 'magppie.com']

export function isAllowedEmail(email?: string | null): boolean {
  if (!email) return false
  const domain = email.split('@')[1]?.toLowerCase()
  return !!domain && ALLOWED_EMAIL_DOMAINS.includes(domain)
}
