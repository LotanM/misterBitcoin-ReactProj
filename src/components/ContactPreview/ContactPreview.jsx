export function ContactPreview({ contact, onSelectContact }) {
  return (
    <li className="contact-preview" onClick={() => onSelectContact(contact._id)}>
      <img src={`https://robohash.org/${contact._id}?set=set5`} alt="" />
      <div className="contact-info">
        <p>{contact.name}</p>
        <small>{contact.phone}</small>
      </div>
    </li>
  )
}