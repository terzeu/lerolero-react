import React, {Component} from 'react';
import CardLeroLero from '../components/CardLeroLero';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listaApi: [],
            loading: false
        }
    }


    render() {
        const { listaApi, loading } = this.props;

        return (
            <div className="body">
                { !loading ?
                    listaApi.length > 0 ?
                        listaApi.map((itemLista,indexLista)=> (
                            <CardLeroLero key={indexLista} dados={itemLista} />
                        ))
                        :<h3 className="msg-aviso">Não há resultados para esta pesquisa</h3>
                    : <h3 className="msg-aviso">Carregando...</h3>
                }
            </div>
        )
    }
}

export default Home;