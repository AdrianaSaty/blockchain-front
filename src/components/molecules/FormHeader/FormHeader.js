import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../img/blotting-logo.png';
import './FormHeader.css';

const FormHeader = () => {
  return(
    <div>
      <Link to='/' className='blotting-logo'></Link>
      <a href='/'><img className='blotting-logo' src={logo} alt='logo'/></a>
    </div>
  );
}

export default FormHeader;
