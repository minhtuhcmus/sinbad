import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { Affix, Input } from 'antd';
import page from '../assets/detail-page.png';
import contact from '../assets/contact.png';
const { Search } = Input;
const DetailPage = () => {
  return(
    <div className='detail-page'>
      <img className='page' src={page} alt='page'/>
      
      <Link className='book-btn' to='/book'>
      </Link>
      <Affix className='contact'>
        <img src={contact} alt='contact'/>
      </Affix>
    </div>
  )
}

export default DetailPage;