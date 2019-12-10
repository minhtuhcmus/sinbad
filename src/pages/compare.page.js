import React, { useState } from 'react';
import { Affix, Input } from 'antd';
import page from '../assets/compare-page.png';
import contact from '../assets/contact.png';
const { Search } = Input;
const ComparePage = () => {
  return(
    <div className='compare-page'>
      <img className='page' src={page} alt='page'/>
      <Search
        className='input-box'
        placeholder="Tìm tour, địa điểm"
        onSearch={value => console.log(value)}
        style={{ width: 200 }}
      />
      <Affix className='contact'>
        <img src={contact} alt='contact'/>
      </Affix>
    </div>
  )
}

export default ComparePage;