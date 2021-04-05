
import { Component } from 'react';
import { UserService } from '../../services/UserService';
import logo from '../../assets/img/coin.svg';
import { BitcoinService } from '../../services/BitcoinService';
import { ContactFilter } from '../../components/ContactFilter/ContactFilter';
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
                    </nav>
                </header>

                <div className="main-container">
                    <div className="logged-user-container">
                        <h2>Hello! {user.name}</h2>
                        <h2>Coins: {user.coins}   </h2>
                        <h2>BTC: {bitcoinRate}</h2>
                    </div>
                </div>
            </div>
        )
    }
}
