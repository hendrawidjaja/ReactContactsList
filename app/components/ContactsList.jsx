import React from "react";
import Contact from "Contact";

class ContactsList extends React.Component {
    constructor() {
        super();
        this.state = {
            search: ""
        };
    }

    updateSearch(event) {
        this.setState({
            search: event.target.value.substr(0, 20) /* Limit the search field to 20 chars */
        });
    }

    addContact(e) {
        e.preventDefault(); /* prevent browser to refresh */
        let name = this.refs.name.value; /* get refs value from an input name tag */
        let phone = this.refs.phone.value; /* get refs value from an input phone tag */
        let id = Math.floor((Math.random() * 100) + 1); /* Using random generator for id nummber */
        this.setState({
            contacts: this.state.contacts.concat({id, name, phone}) /* create a new contact based on the given value from input tag */
        });

        /* reset name and phone */
        this.refs.name.value = "";
        this.refs.phone.value = "";
    }

    render() {
        let filteredContacts = this.props.contacts.filter(
            (contact) => {
                return contact.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1; /* return all related name only */
            }
        );
        return (
            <div>
                {/* React input tag needs onChange handler */}
                <input type="text" value={this.state.search}  onChange={this.updateSearch.bind(this)} placeholder="Search Name"/>
                <form onSubmit={this.addContact.bind(this)}>
                    <input type="text" ref="name"/>
                    <input type="text" ref="phone"/>
                    <button type="submit">Add New Contact</button>
                </form>
                <ul>
                    {filteredContacts.map((contact) => {
                        return <Contact contact={contact} key={contact.name}/>
                    })}
                </ul>
            </div>
        )
    }
}

module.exports = ContactsList;
