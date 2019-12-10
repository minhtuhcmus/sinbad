import React, { useState } from 'react';
import { Affix, Input } from 'antd';
import page from '../assets/book-page.png';
import contact from '../assets/contact.png';
const { Search } = Input;
const BookPage = () => {
  return(
    <div className='book-page'>
      <img className='page' src={page} alt='page'/>
      
      <Affix className='contact'>
        <img src={contact} alt='contact'/>
      </Affix>
    </div>
  )
}

export default BookPage;