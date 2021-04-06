
import { Component } from 'react';

export class AppHeader extends Component {

    state = {

    }

    componentDidMount() {

    }

    render() {
        return (
            <header className="app-header">
                <img src={require('../../assets/img/coin.svg').default} alt="" />
                <nav className="nav-container">
                    <a href="/">Contacts</a>
                    <a href="/">Statistics</a>
                </nav>
            </header>
        )
    }

}
