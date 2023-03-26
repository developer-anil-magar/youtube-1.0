import React from 'react';

const buttonStyle = {
  black: 'bg-black text-white',
  gray: 'bg-gray-200 text-black font-medium',
};

const buttonSize = {
  md: 'w-32 ',
  lg: 'w-48 ',
  smRound: 'w-12  rounded-full',
  xs: 'w-10 ',
  xl: 'w-64 ',
  sm: 'w-16 ',
};

const Button = ({
  title,
  iconLeft,
  variant = 'gray',
  size = 'md',
  iconRight,
  round,
  roundedFull,
}) => {
  console.log('button');
  return (
    <button
      type="button"
      className={`${buttonStyle[variant]} ${buttonSize[size]} ${roundedFull ? 'rounded-full' : 'rounded-xl'} flex items-center justify-center`}
    >
      <div className={` ${iconRight ? 'border-r-2 border-gray-400 w-20' : ''} flex items-center h-12`}>
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
