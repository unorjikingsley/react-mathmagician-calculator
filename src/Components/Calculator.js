import React from 'react';
import Input from './Input';
import Keypad from './Keypad';

const Calculator = () => (
  <section className="cont">
    <div className="container">
      <Input />
      <Keypad
        clearLabel="AC"
        negateLabel="+/-"
        percentageLabel="%"
        divideLabel="/"
      />
    </div>
  </section>
);

export default Calculator;
