import React from 'react';
import './styles/PokeCell.css';


const PokeCell = ({pokeClass, handleOnClick}) => {
    const { id } = pokeClass;
    const style = {backgroundImage: `url(${pokeClass.sprites.front_default})`};
    return <button onClick={() => handleOnClick(id)} style={style} className="poke-cell"></button>
};

export default PokeCell;