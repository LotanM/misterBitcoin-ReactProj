
import { Component } from 'react';
import { UserService } from '../services/UserService';
import { BitcoinService } from '../services/BitcoinService';
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

                <div className="main-container">
                    <div className="logged-user-container">
                        <h1>Hello, <span>{user.name}</span></h1>
                        <div className="container">
                        <img src={require('../assets/img/coins.svg').default} alt=""/> <h2>Coins: {user.coins}   </h2>
                        </div>
                        <div className="container">
                        <img src={require('../assets/img/BTC.svg').default} alt=""/> <h2>BTC: {bitcoinRate}</h2>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}
