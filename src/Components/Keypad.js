import React from 'react';
import PropTypes from 'prop-types';

const Keypad = (props) => {
  const {
    clearLabel, negateLabel, percentageLabel, divideLabel,
  } = props;

  return (
    <div className="keypad">
      <button type="button" aria-label={clearLabel || 'Clear'}>
        AC
      </button>
      <button type="button" name="+/-" aria-label={negateLabel || 'Plus/Minus'}>
        +/-
      </button>
      <button
        type="button"
        name="%"
        aria-label={percentageLabel || 'Percentage'}
      >
        %
      </button>
      <button
        type="button"
        className="highlight"
        name="/"
        aria-label={divideLabel || 'Divide'}
      >
        &divide;
      </button>
      <button type="button" name="7" aria-label="7">
        7
      </button>
      <button type="button" name="8" aria-label="8">
        8
      </button>
      <button type="button" name="9" aria-label="9">
        9
      </button>
      <button
        type="button"
        className="highlight"
        name="*"
        aria-label="Multiply"
      >
        &times;
      </button>
      <button type="button" name="4" aria-label="4">
        4
      </button>
      <button type="button" name="5" aria-label="5">
        5
      </button>
      <button type="button" name="6" aria-label="6">
        6
      </button>
      <button
        type="button"
        className="highlight"
        name="-"
        aria-label="Subtract"
      >
        &ndash;
      </button>
      <button type="button" name="1" aria-label="1">
        1
      </button>
      <button type="button" name="2" aria-label="2">
        2
      </button>
      <button type="button" name="3" aria-label="3">
        3
      </button>
      <button type="button" className="highlight" aria-label="Add" name="+">
        +
      </button>
      <button type="button" name="0" id="zero" aria-label="0">
        0
      </button>
      <button type="button" name="." aria-label="Decimal Point">
        .
      </button>
      <button type="button" className="highlight" aria-label="Equals">
        =
      </button>
    </div>
  );
};

Keypad.propTypes = {
  clearLabel: PropTypes.string,
  negateLabel: PropTypes.string,
  percentageLabel: PropTypes.string,
  divideLabel: PropTypes.string,
};

Keypad.defaultProps = {
  clearLabel: undefined,
  negateLabel: undefined,
  percentageLabel: undefined,
  divideLabel: undefined,
};

export default Keypad;
