
import { Component } from 'react';
import { ContactService } from "../../services/ContactService";
export class ContactDetailsPage extends Component {

    state = {
        contact: null,
    }

    componentDidMount() {
        this.loadContact()
    }

    async loadContact() {
        const contact = await ContactService.getContactById(this.props.selectedContactId)
        this.setState({contact})
    }


    render() {
        const {contact} = this.state
        if (!contact) return <div>Loading Contact</div>
        return (
            <div className="contact-details">
                <h2>Contact Details Page</h2>
                <img src={`https://robohash.org/${contact._id}?set=set5`} alt="" />
                <h3>{contact.name}</h3>
                <h3>{contact.email}</h3>
                <h3>{contact.number}</h3>
            </div>
        )
    }
}
