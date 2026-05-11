import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Button = (props) => {
  return (
    <div className="mybtn">
      <button
        className={`rounded font-bold
          ${props?.className || ''}
        `}
      >
        {props?.text}
        <FaArrowRight className="text-sm" />
      </button>
    </div>
  );
};

export default Button;
