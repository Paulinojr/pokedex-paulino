import React from 'react';
import './styles/DetailView.css';
import silhouette from '../assets/silhouette.png'

const DetailView = ({ pokemon }) => {
    const { name, sprite, type, height, weight, locationAreaEncounters } = pokemon;
    return (
        <section className="detail-view">
            <img src={sprite ? sprite : silhouette} className={sprite ? 'sprite-image' : 'sprite-image sprite-silhouette'} alt="sprite"/>
            <div className='data-wrapper'>
                <h1 className='data-name'>{name ? name : '????'}</h1>
                <p className="data-char">Type: {type ? type : '????'}</p>
                <p className="data-char">Height: {height ? height + 'ft' : '????'}</p>
                <p className="data-char">Weight: {weight ? weight + 'kg' : '????'}</p>               
            </div>
        </section>
    );
}

export default DetailView;