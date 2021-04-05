
import { Component } from 'react';
import { ContactService } from '../../services/ContactService';
import { ContactList } from '../../components/ContactList';
import { ContactFilter } from '../../components/ContactFilter/ContactFilter';
import { ContactDetailsPage } from '../ContactDetailsPage/ContactDetailsPage';

export class ContactPage extends Component {

    state = {
        contacts: null,
        filterBy: null,
        selectedContactId: null,
    }

    componentDidMount() {
        this.loadContacts()
    }

    async loadContacts() {
        const contacts = await ContactService.getContacts(this.state.filterBy)
        this.setState({ contacts })
    }

    onChangeFilter = (filterBy) => {
        this.setState({ filterBy }, this.loadContacts)
    }

    onSelectContact = (contactId) => {
        this.setState({ selectedContactId: contactId })
      }


    render() {
        const { contacts, selectedContactId } = this.state
        return (
            <div className="contact-page">
                    <ContactFilter onChangeFilter={this.onChangeFilter} />
                <h3>Contacts</h3>
                <div className="contacts-container">
               
                   {!selectedContactId && <ContactList onSelectContact={this.onSelectContact} contacts={contacts} />}
                  
                   {selectedContactId && <ContactDetailsPage selectedContactId={selectedContactId} />}
                        

                </div>
            </div>
        )
    }
}
