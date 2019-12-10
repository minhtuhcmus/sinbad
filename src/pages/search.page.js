import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Affix, Input, Select, DatePicker, Button } from 'antd';
import page from '../assets/search-page.png';
import contact from '../assets/contact.png';
import result from '../assets/result.png';
const { Search } = Input;
const { Option } = Select;
const SearchPage = () => {
  const [key, setKey] = useState('');
  const [showResult, setShowResult] = useState(false);
  return(
    <div className='search-page'>
      <img className='page' src={page} alt='page'/>
      <Input
        className='search-box'
        placeholder="Tìm tour, địa điểm"
        onChange={async ({ target: { value } }) => {
          console.log(value);
          await setKey(value);
        }}
        style={{ height: 53, width: 415 }}
      />
      <Select className='region-select' defaultValue="trong nước" style={{ width: 152 }} onChange={() => {
      }}>
        <Option value="trong nước">Trong nước</Option>
        <Option value="nước ngoài">Nước ngoài</Option>
      </Select>
      <DatePicker 
      className='date-picker' 
      size="large"
      style={{ width: 160 }}
      />
      <Select 
      className='price-select' 
      defaultValue="< 5.000.000đ" 
      style={{ width: 152 }} onChange={() => {
      }}>
        <Option value="< 5.000.000đ">{'< 5.000.000đ'}</Option>
        <Option value="5.000.000đ - 10.000.000">{"5.000.000đ - 10.000.000"}</Option>
        <Option value="10.000.000đ - 20.000.000">{"10.000.000đ - 20.000.000"}</Option>
        <Option value="20.000.000đ - 50.000.000">{"20.000.000đ - 50.000.000"}</Option>
        <Option value="> 50.000.000">{"> 50.000.000"}</Option>
      </Select>
      <Button
      onClick={() =>{
        if(key === 'biển'){
          setShowResult(true);
        }
        else{
          setShowResult(false);
        }
      }} 
      type='primary' 
      className='search-btn'
      style={{ width: 193, height: 53 }}
      >
        Tìm kiếm
      </Button>
      {
        showResult ? <img className='result' src={result} alt='result'/> : ''
      }
      <Link to='/detail' className='tour-content'>

      </Link>
      <Affix className='contact'>
        <img src={contact} alt='contact'/>
      </Affix>
    </div>
  )
}

export default SearchPage;