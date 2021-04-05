
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
        this.setState({ contact })
    }


    render() {
        const { contact } = this.state
        if (!contact) return <div>Loading Contact</div>
        return (
            <div className="contact-details">
                <img src={`https://robohash.org/${contact._id}?set=set5`} alt="" />
                <div className="contact-info">
                <h3>Name: {contact.name}</h3>
                <h3>Phone: {contact.phone}</h3>
                <h3>Email: {contact.email}</h3>
                </div>
            </div>
        )
    }
}
