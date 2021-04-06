
import { Component } from 'react';
import { Link } from 'react-router-dom';

export class AppHeader extends Component {

    state = {

    }

    componentDidMount() {

    }

    render() {
        return (
            <header className="app-header">
                <img src={require('../../assets/img/logo.svg').default} alt="" />
                <nav className="nav-container">
                    <ul>
                        <li><Link to="/contact-page">Contacts</Link></li>
                        <li><Link to="/statistic-page">Statistics</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }

}
