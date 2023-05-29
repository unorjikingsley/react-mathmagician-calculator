import React from 'react';

class Calculator extends React.PureComponent {
  render() {
    return (
      <section className="cont">
        <div className="container">
          <form>
            <input type="text" placeholder="0" />
          </form>

          <div className="keypad">
            <button type="button">AC</button>
            <button type="button" name="+/-">+/-</button>
            <button type="button" name="%">%</button>
            <button type="button" className="highlight" name="/">
              &divide;
            </button>
            <button type="button" name="7">7</button>
            <button type="button" name="8">8</button>
            <button type="button" name="9">9</button>
            <button type="button" className="highlight" name="*">
              &times;
            </button>
            <button type="button" name="4">4</button>
            <button type="button" name="5">5</button>
            <button type="button" name="6">6</button>
            <button type="button" className="highlight" name="-">
              &ndash;
            </button>
            <button type="button" name="1">1</button>
            <button type="button" name="2">2</button>
            <button type="button" name="3">3</button>
            <button type="button" className="highlight" name="+">
              +
            </button>
            <button type="button" name="0" id="zero">
              0
            </button>
            <button type="button" name=".">.</button>
            <button type="button" className="highlight">=</button>
          </div>
        </div>
      </section>
    );
  }
}

export default Calculator;
