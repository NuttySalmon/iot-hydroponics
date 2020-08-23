export enum PagesEnum {
  LANDING = 'landing',
  LOGIN = 'login',
  SIGNUP = 'signup',
  LOGOUT = 'logout',
  DASHBOARD = 'dashboard',
}
const userRoot = '/user'
export const pagePaths: { [key: string]: string } = {
  [PagesEnum.LANDING]: '/',
  [PagesEnum.LOGIN]: `${userRoot}/login`,
  [PagesEnum.SIGNUP]: `${userRoot}/signup`,
  [PagesEnum.LOGOUT]: `${userRoot}/logout`,
  [PagesEnum.DASHBOARD]: `${userRoot}/dashboard`,
}

export const authStatePathMap: { [key: string]: string } = {
  signIn: pagePaths[PagesEnum.LOGIN],
  signUp: pagePaths[PagesEnum.SIGNUP],
  logout: pagePaths[PagesEnum.LOGOUT],
  signedIn: '/user/dashboard',
}
