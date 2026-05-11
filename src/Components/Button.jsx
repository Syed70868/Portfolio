import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Button = (props) => {
  if (props.href) {
    return (
      <div className="mybtn">
        <a
          href={props.href}
          target={props.href.startsWith('#') ? '_self' : '_blank'}
          rel={props.href.startsWith('#') ? '' : 'noopener noreferrer'}
          className={`rounded font-bold ${props?.className || ''}`}
        >
          {props?.text}
          <FaArrowRight className="text-sm" />
        </a>
      </div>
    );
  }

  return (
    <div className="mybtn">
      <button
        className={`rounded font-bold ${props?.className || ''}`}
        onClick={props.onClick}
      >
        {props?.text}
        <FaArrowRight className="text-sm" />
      </button>
    </div>
  );
};

export default Button;
