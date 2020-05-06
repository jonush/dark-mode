import { useState, useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = () => {
  const [ darkMode, setDarkMode ] = useLocalStorage('darkModeToggler', false);

  useEffect(() => {
    if(darkMode === true) {
      document.querySelector('body').classList.add('dark-mode')
    } else {
      document.querySelector('body').classList.remove('dark-mode')
    }
  }, [setDarkMode])

  return [darkMode, setDarkMode];
}