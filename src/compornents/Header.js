import { Link } from 'react-router-dom';

import '../css/layout/_header.scss';  

// menu
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementsByClassName('toggle');
  const body = document.getElementsByClassName('body');
  const nav = document.getElementsByClassName('header_nav');

  const navItem = document.getElementsByClassName('header_item');
  const navItemArr = [].slice.call( navItem );

  toggle[0].addEventListener('click', () => {
    toggle[0].classList.toggle("active");
    body[0].classList.toggle('nav_open');
    nav[0].classList.toggle('active');
  }, false);

  navItemArr.forEach(element => {
    element.addEventListener('click', () => {
      toggle[0].classList.toggle("active");
      body[0].classList.toggle('nav_open');
      nav[0].classList.toggle('active');
    }, false);
    
  });

});

function App() {

  return (
    <header className='header'>

      <div className='header_wrap'>
        <h1><Link to="/">Portfolio</Link></h1>
        <div className='toggle'>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className='header_nav'>
          <ul className='header_list'>
            <li className='header_item'>
              <Link to="/">Home</Link>
            </li>
            <li className='header_item'>
              <Link to="/about">About</Link>
            </li>
            <li className='header_item'>
              <Link to="/profile">Profile</Link>
            </li>
            <li className='header_item'>
              <Link to="/works">Works</Link>
            </li>
          </ul>
        </nav>
      </div>

    </header>
  );
}

export default App;
