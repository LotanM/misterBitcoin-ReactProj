import { ContactPreview } from "../ContactPreview/ContactPreview";


export function ContactList({ contacts, onSelectContact }) {
    return (
        <ul className="contact-list">
            {
                contacts && contacts.map(contact => <ContactPreview onSelectContact={onSelectContact} contact={contact} key={contact._id} />)
            }
        </ul>
    )

}
