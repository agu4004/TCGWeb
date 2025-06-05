import { isLoggedIn } from '../../lib/auth';

describe('isLoggedIn', () => {
  afterEach(() => {
    window.localStorage.clear();
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 GMT';
  });

  it('returns true when token in localStorage', () => {
    window.localStorage.setItem('token', 'abc');
    expect(isLoggedIn()).toBe(true);
  });

  it('returns true when token in cookie', () => {
    document.cookie = 'token=xyz';
    expect(isLoggedIn()).toBe(true);
  });

  it('returns false when no token', () => {
    expect(isLoggedIn()).toBe(false);
  });
});
