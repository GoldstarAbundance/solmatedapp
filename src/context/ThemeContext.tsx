import EncryptedStorage from 'react-native-encrypted-storage';
import {Constant} from '../config';
import React, {createContext, useState, useLayoutEffect} from 'react';
import {DARK_THEME, LIGHT_THEME} from '../theme/theme';

export const Theme = createContext({
  theme: LIGHT_THEME,
  toggleTheme: (theme: string) => {},
});
const ThemeContext = (props: any) => {
  const [theme, setTheme] = useState(LIGHT_THEME);
  const checkForTheme = async () => {
    try {
      const value = await EncryptedStorage.getItem(
        Constant.EncryptedStorageKey.ThemeSelected,
      );
      if (value != null && value != undefined) {
        if (value === 'day') setTheme(LIGHT_THEME);
        else setTheme(DARK_THEME);
      } else setTheme(LIGHT_THEME);
    } catch (error) {
      setTheme(LIGHT_THEME);
    }
  };

  const toggleTheme = async (theme: string) => {
    if (theme === 'day') {
      setTheme(LIGHT_THEME);
      await EncryptedStorage.setItem(Constant.EncryptedStorageKey.ThemeSelected, 'day');
    } else {
      setTheme(DARK_THEME);
      await EncryptedStorage.setItem(
        Constant.EncryptedStorageKey.ThemeSelected,
        'night',
      );
    }
  };
  useLayoutEffect(() => {
    checkForTheme();
  }, []);

  return (
    <Theme.Provider
      value={{
        theme: theme,
        toggleTheme: toggleTheme,
      }}>
      {props.children}
    </Theme.Provider>
  );
};
export default ThemeContext;
