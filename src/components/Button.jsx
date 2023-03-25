import React from 'react';

const buttonStyle = {
  black: 'bg-black text-white',
  gray: 'bg-gray-200 text-black font-medium',
};

const buttonSize = {
  md: ' rounded-full w-32 h-12',
  lg: 'rounded-full w-48 h-12',
  smRound: 'rounded-full w-12 h-12',
};

const Button = ({
  title,
  iconLeft,
  variant = 'gray',
  size = 'md',
  iconRight,
  round,
}) => {
  console.log('button');
  return (
    <button
      type="button"
      className={`${buttonStyle[variant]} ${buttonSize[size]} flex items-center justify-center`}
    >
      <div className={` ${iconRight ? 'border-r-2 border-gray-400 w-20' : ''} flex items-center `}>
        {iconLeft && (
        <img src={iconLeft} alt="right icon" className="h-7 w-7 mr-2" />
        )}
        {title && (
        <h3 className={`${round ? '-mt-3 text-3xl font-bold' : ''}`}>{title}</h3>
        )}
      </div>

      {iconRight && (
        <img src={iconRight} alt="icon right" className="h-7 w-8 ml-7" />
      )}
    </button>
  );
};

export default Button;
