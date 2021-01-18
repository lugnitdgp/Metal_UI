import React, { FC } from 'react';

type ButtonTypes = {
  /**
   * Label of the button
  */
  label: string;
  /**
   * Boolean value to define the button style 
  */
  outlined?: boolean;
  /**
   * Button click action
  */
  onClick(): void;
}

const BASE_BUTTON = 'rounded outline-none shadow py-3 px-12 font-normal uppercase tracking-wider text-lg'
const CONTAINED_BUTTON = `${BASE_BUTTON} bg-blue-400 border border-teal-400 text-white`
const OUTLINED_BUTTON = `${BASE_BUTTON} border border-blue-400 text-white`

export const Button:FC<ButtonTypes> = ({ onClick, label = "Some label", outlined }) => {
  return (
    <button
      onClick={onClick}
      className={outlined ? OUTLINED_BUTTON : CONTAINED_BUTTON}
    >
      <span className="text-black">{label}</span>
    </button>
  )
};