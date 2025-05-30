'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import '../css/layout/_header.scss';

function Header() {
  const toggleRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<HTMLLIElement[]>([]);

  useEffect(() => {
    const toggle = toggleRef.current;
    const nav = navRef.current;

    const handleToggleClick = () => {
      toggle?.classList.toggle('active');
      document.body.classList.toggle('nav_open');
      nav?.classList.toggle('active');
    };

    const handleNavItemClick = () => {
      toggle?.classList.remove('active');
      document.body.classList.remove('nav_open');
      nav?.classList.remove('active');
    };

    toggle?.addEventListener('click', handleToggleClick);

    itemRefs.current.forEach((el) => {
      el.addEventListener('click', handleNavItemClick);
    });

    const currentItemRefs = [...itemRefs.current];
    return () => {
      toggle?.removeEventListener('click', handleToggleClick);
      currentItemRefs.forEach((el) => {
        el.removeEventListener('click', handleNavItemClick);
      });
    };
  }, []);

  return (
    <header className="header">
      <div className="header_wrap">
        <h1>
          <Link className="js-open" href="/">
            Portfolio
          </Link>
        </h1>
        <div className="toggle" ref={toggleRef}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className="header_nav" ref={navRef}>
          <ul className="header_list">
            {['/', '/about', '/profile', '/travel'].map((path, i) => (
              <li
                key={path}
                className="header_item"
                ref={(el) => {
                  if (el) itemRefs.current[i] = el;
                }}
              >
                <Link className={path === '/' ? 'js-open' : ''} href={path}>
                  {path === '/'
                    ? 'Home'
                    : path.replace('/', '').charAt(0).toUpperCase() +
                      path.slice(2)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
