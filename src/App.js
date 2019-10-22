import React, {Component} from 'react';
import Home from './pages/Home';
import Header from './components/Header';
import './App.css';
import './styles/home.css';
import './styles/cardLeroLero.css';
import './styles/header.css';
import './styles/search.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      originListaApi: [],
      listaApi: [],
      loading: false
    }
  }

  componentDidMount = () => {
    this.setState({loading: true})
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then( (result) => {
            return result.json();
        })
        .then((json)=> {
            console.log('resultado:',json);
            this.setState({
                listaApi:json,
                originListaApi: json,
                loading:false
            });
        })
        .catch((err)=>{
            console.log('erro:',err)
        })
  }

  changeList = (newList) => {
    this.setState({listaApi:newList})
  }

  render() {
    const { listaApi, originListaApi, loading } = this.state;

    return (
      <div className="App">
        <Header changeList={this.changeList} listaApi={originListaApi} />
        <Home loading={loading} listaApi={listaApi} />
      </div>
  );
  }
}

export default App;
