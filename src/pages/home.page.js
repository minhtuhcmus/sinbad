import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Affix, Input } from 'antd';
import page from '../assets/home-page.png';
import contact from '../assets/contact.png';
const { Search } = Input;
const HomePage = () => {
  return(
    <div className='home-page'>
      <img className='page' src={page} alt='page'/>
      <Link to='/search' className='search-link'></Link>
      <Affix className='contact'>
        <img src={contact} alt='contact'/>
      </Affix>
    </div>
  )
}

export default HomePage;