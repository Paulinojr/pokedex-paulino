import React, { Component } from 'react';
import PokeList from './PokeList';
import DetailView from './DetailView';
import Pokemon from '../models/Pokemon';
import './styles/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: {},
      pokemonList: []
    };

    this.handleOnClick = this.handleOnClick.bind(this);
    this.fetchPokemonData = this.fetchPokemonData.bind(this);
  }

  handleOnClick(id) {

    fetch(`http://pokeapi.co/api/v2/pokemon/${id}/`)
      .then(res => res.json())
      .then(data => {
        let pokemon = new Pokemon(data);
        this.setState({ pokemon });
      })
      .catch(err => console.log(err));
  }

  componentDidMount() { 
    fetch('http://pokeapi.co/api/v2/pokemon/?limit=151&')
      .then(res => res.json())
      .then(data => {
        data.results.map((pokemon) => {
          this.fetchPokemonData(pokemon);
        });
      })
      .catch(err => console.log(err));
  }

  fetchPokemonData(pokemon){
    let url = pokemon.url

    fetch(url)
      .then(res => res.json())
      .then(data => {
        const joined = this.state.pokemonList.concat(data);
        this.setState({pokemonList: joined})
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <PokeList handleOnClick={this.handleOnClick} pokemonList={this.state.pokemonList}/>
        <DetailView pokemon={this.state.pokemon} />
      </div>
    );
  }
}

export default App;