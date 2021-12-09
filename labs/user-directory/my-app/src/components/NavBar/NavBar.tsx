import React from 'react';
import "./Navbar.css"
import { viewContext } from '../../context/Contexts';
import { ViewCon } from '../../type.d';
const NavBar = () => {
  const {changeView} = React.useContext(viewContext) as ViewCon
  return (
    <nav className="header">
      <p onClick={()=>changeView('home')}>Home</p>
    </nav>
  );
};

export default NavBar;