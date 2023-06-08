import React from 'react';
import Quotes from '../Components/Quotes';

function Quote() {
  return (
    <div
      style={{
        listStyle: 'none',
        marginTop: '100px',
        padding: '120px',
        textAlign: 'center',
      }}
    >
      <Quotes />
    </div>
  );
}

export default Quote;
