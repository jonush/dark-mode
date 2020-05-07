import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = () => {
  const [ darkMode, setDarkMode ] = useLocalStorage('darkModeToggler', false);

  useEffect(() => {
    if(darkMode === true) {
      document.querySelector('body').classList.add('dark-mode');
      document.querySelector('.title').style.color = 'white';
    } else {
      document.querySelector('body').classList.remove('dark-mode');
      document.querySelector('.title').style.color = 'black';
    }
  }, [darkMode])

  return [darkMode, setDarkMode];
}