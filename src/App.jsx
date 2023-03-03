import { Component } from 'react';
import CardList from './components/cardlist/cardlist.component';
import SearchBox from './components/Searchbox/searchbox.component';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monster: [
      ],
      sf: ""
    }
  }

  onsearchchange = (change) => {
    const sf = change.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { sf };
    })
  }



  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((names) => this.setState(() => {
        return { monster: names }
      }))
  }





  render() {
    const { monster, sf } = this.state;
    const { onsearchchange } = this;

    const filmons = monster.filter((man) => {
      return man.name.toLocaleLowerCase().includes(sf);
    });
    return (
      <div className="App">
        <SearchBox placeholder="search monsters" onChangeHandler={onsearchchange} class_name="monster-search-box" />
        <CardList monsterslist={filmons} />

      </div >
    );
  }
}

export default App;
