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
            search: event.target.value.substr(0, 20)
        });
    }

    render() {
        let filteredContacts = this.props.contacts.filter(
            (contact) => {
                return contact.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            }
        );
        return (
            <div>
                {/* React input tag needs onChange handler */}
                <input type="text" value={this.state.search}  onChange={this.updateSearch.bind(this)} />
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
