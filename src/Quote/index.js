import React from 'react';
import './Quote.css'

const Quote = ({quote, author}) => {
    return (
      <div className='quotes'>
        <h1 id='text'><i className='fa fa-quote-left'/>{quote}</h1>
        <h4 id='author'>--{author}</h4>
      </div>
    );
  }

export default Quote;