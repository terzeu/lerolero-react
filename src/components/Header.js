import React, {Component} from 'react';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valueSearch: "",
        }
    }

    handleChange = (e) => {
        const value = e.target.value;
        const { listaApi } = this.props;
        this.setState({valueSearch:value})
        let listaFiltrada = listaApi.filter((item)=>item.title.indexOf(value) !== -1)
        this.props.changeList(listaFiltrada)
    }

    render() {
        const { valueSearch } = this.state

        return (
            <header>
                <div className="header-content">
                    <div className="search">
                        <img src={require('../assets/search.png')} />
                        <input value={valueSearch} onChange={e=>{this.handleChange(e)}} />
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;