import React from "react";

class Contact extends React.Component {
    render() {
        return (
            <li key={this.props.contact}>
                {this.props.contact.name} {this.props.contact.phone}
            </li>
        )
    }
}

module.exports = Contact;
