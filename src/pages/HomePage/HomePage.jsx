
import { Component } from 'react';
import { UserService } from '../../services/UserService';
import logo from '../../assets/img/coin.svg';
import { BitcoinService } from '../../services/BitcoinService';
// import contactImg from '../../assets/img/contact.svg'
export class HomePage extends Component {

    state = {
        user: null,
        bitcoinRate: 0
    }

    componentDidMount() {
        this.loadUser()
        this.getBitcoinRate()
    }

    async loadUser() {
        const user = await UserService.getUser()
        this.setState({ user })
    }

    async getBitcoinRate() {
        const bitcoinRate = await BitcoinService.getRate()
        this.setState({ bitcoinRate })
    }

    render() {
        const { user, bitcoinRate } = this.state
        if (!user || !bitcoinRate) return <div>Loading User.....</div>
        return (
            <div className="home-page">
                <header className="header-container">
                    <img src={logo} alt="" />
                    <nav className="nav-container">
                        <a href="/">Contacts</a>
                        <a href="/">Statistics</a>
                        <a href="/HomePage" className="logged-user">{user.name} ${user.coins}</a>
                    </nav>
                </header>

                <div className="main-container">
                    <div className="bitcoin-rate-container">
                        <h1> Current Bitcoin Rate: {bitcoinRate}</h1>
                    </div>
                </div>
            </div>
        )
    }
}
