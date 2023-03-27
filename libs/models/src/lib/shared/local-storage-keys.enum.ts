export enum LocalStorageKeysEnum {
  THEME = 'cc-theme',
  ACCESS_TOKEN = 'cc-token'
}

export const tokenGetter = () => {
  return localStorage.getItem(LocalStorageKeysEnum.ACCESS_TOKEN) || '';
}
