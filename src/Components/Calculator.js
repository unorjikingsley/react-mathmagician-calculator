import React, { useState } from 'react';
import calculate from '../logic/calculator';
// import operate from '../logic/operate';

const Calculator = () => {
  const [state, setState] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const clickHandler = (e) => {
    const calculated = calculate(state, e.target.innerHTML);
    setState(calculated);
  };

  const { total, next, operation } = state;

  return (
    <section className="cont">
      <div className="container">
        <div className="input">
          <span className="answer">
            {total}
            {operation}
            {next}
          </span>
        </div>

        <div className="keypad">
          <button type="button" name="AC" onClick={clickHandler}>
            AC
          </button>
          <button type="button" name="+/-" onClick={clickHandler}>
            +/-
          </button>
          <button type="button" name="%" onClick={clickHandler}>
            %
          </button>
          <button
            type="button"
            className="highlight"
            name="÷"
            onClick={clickHandler}
          >
            {/* &divide; */}
            ÷
          </button>
          <button type="button" name="7" onClick={clickHandler}>
            7
          </button>
          <button type="button" name="8" onClick={clickHandler}>
            8
          </button>
          <button type="button" name="9" onClick={clickHandler}>
            9
          </button>
          <button
            type="button"
            className="highlight"
            name="x"
            onClick={clickHandler}
          >
            {/* &times; */}
            x
          </button>
          <button type="button" name="4" onClick={clickHandler}>
            4
          </button>
          <button type="button" name="5" onClick={clickHandler}>
            5
          </button>
          <button type="button" name="6" onClick={clickHandler}>
            6
          </button>
          <button
            type="button"
            className="highlight"
            name="-"
            onClick={clickHandler}
          >
            {/* &ndash; */}
            -
          </button>
          <button type="button" name="1" onClick={clickHandler}>
            1
          </button>
          <button type="button" name="2" onClick={clickHandler}>
            2
          </button>
          <button type="button" name="3" onClick={clickHandler}>
            3
          </button>
          <button
            type="button"
            className="highlight"
            onClick={clickHandler}
            name="+"
          >
            +
          </button>
          <button type="button" name="0" id="zero" onClick={clickHandler}>
            0
          </button>
          <button type="button" name="." onClick={clickHandler}>
            .
          </button>
          <button type="button" className="highlight" onClick={clickHandler}>
            =
          </button>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
