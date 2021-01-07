import React, { useEffect, useRef } from 'react';
import Switch from './ui/Switch';
import useLocalStorage from '../hooks/useLocalStorage';

const Header = () => {
  const check = useRef(null);
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  const handlerChange = (e) => {
    const bool = e.target.checked;
    return bool ? setTheme('dark') : setTheme('light');
  };

  useEffect(() => {
    if (theme === 'dark') {
      check.current.checked = true;
      document.documentElement.classList.add('dark-theme');
    } else if (theme === 'light') {
      document.documentElement.classList.remove('dark-theme');
    }
  }, [theme]);

  return (
    <header className="header  o-container">
      <div className="flex justify-between">
        <h3>Blog</h3>
        <Switch handlerChange={handlerChange} reference={check} />
      </div>
    </header>
  );
};

export default Header;
