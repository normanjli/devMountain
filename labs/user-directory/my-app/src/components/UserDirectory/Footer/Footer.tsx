import React from 'react';
import "./Footer.css"
import { viewContext } from '../../../context/Contexts';
import { ViewCon } from '../../../type.d';
const Footer = () => {
  const {changeView} = React.useContext(viewContext) as ViewCon
  return (
    <footer>
      <span onClick={()=>changeView("prev")}>{`< Previous`}</span>
      <div className='buttons-ctnr'>
        <button>Edit</button>
        <button>Delete</button>
        <button>New</button>
      </div>
      <span onClick={()=>changeView("next")}>{`Next >`}</span>
    </footer>
  );
};
export default Footer;