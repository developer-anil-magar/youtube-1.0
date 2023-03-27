import React from 'react';

const buttonStyle = {
  black: 'bg-black text-white',
  gray: 'bg-gray-200 text-black font-medium',
};

const buttonSize = {
  md: 'w-28 h-10',
  lg: 'w-48 h-10',
  smRound: 'w-10 h-10',
  xs: 'w-10 h-10',
  xl: 'w-64 h-10',
  sm: 'w-16 h-10',
};

const Button = ({
  title,
  iconLeft,
  variant = 'gray',
  size = 'md',
  iconRight,
  round,
  roundedFull,
}) => (
  <button
    type="button"
    className={`${buttonStyle[variant]} ${buttonSize[size]} ${roundedFull ? 'rounded-full' : 'rounded-xl'} flex items-center justify-center`}
  >
    <div className={` ${iconRight ? 'border-r-2 border-gray-400 w-20' : ''} flex items-center h-12`}>
      {iconLeft && (
        <img src={iconLeft} alt="right icon" className="h-[1.2rem] w-[1.2rem] mr-2" />
      )}
      {title && (
        <h3 className={`${round ? '-mt-4 text-sm md:text-3xl font-bold' : ''}`}>{title}</h3>
      )}
    </div>

    {iconRight && (
    <img src={iconRight} alt="icon right" className="h-[1rem] w-[1rem] ml-3 sm:ml-7" />
    )}
  </button>
);

export default Button;
