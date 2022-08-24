import {useContext} from 'react';
import {Theme} from '../context/ThemeContext';

const useTheme = () => {
  const {theme, toggleTheme} = useContext(Theme);
  const {colors, dark} = theme;
  return {
    colors,
    theme,
    toggleTheme,
    dark,
  };
};
export default useTheme;
