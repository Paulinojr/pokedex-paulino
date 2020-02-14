import React from 'react';
import PokeCell from './PokeCell.js';
import './styles/PokeList.css';

const PokeList = ({ handleOnClick, pokemonList }) => {
    const cells = pokemonList.map(pokeClass => {
        if(!isNaN(pokeClass.id)){
            return(
                <PokeCell 
                    key={pokeClass.name} 
                    pokeClass={pokeClass}   
                    handleOnClick={handleOnClick}
                />
            );
        } 
    });
    return (
        <section className="poke-list">
            {cells}
        </section>
    )
}

export default PokeList;