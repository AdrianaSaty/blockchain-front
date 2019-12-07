import React from 'react';
import { Link } from 'react-router-dom';
import './FormHeader.css';

const FormHeader = () => {
  return(
    <div>
      <Link to='/' className='blotting-logo'></Link>
    </div>
  );
}

export default FormHeader;
