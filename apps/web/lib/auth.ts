export function isLoggedIn(): boolean {
  if (typeof window === 'undefined') return false;
  const cookieToken = document.cookie
    .split(';')
    .find(c => c.trim().startsWith('token='));
  const localToken = window.localStorage.getItem('token');
  return Boolean(cookieToken || localToken);
}
