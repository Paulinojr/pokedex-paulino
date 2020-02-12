import React from 'react';
import './styles/PokeCell.css';
import sprites from '../assets/sprites.png'

const PokeCell = (props) => {
    const { id, backgroundPosition } = props.pokeClass;
    console.log(props)
    const style = {backgroundImage: `url(${sprites})`, backgroundPosition};
    return <button style={style} className="poke-cell"></button>
};

export default PokeCell;