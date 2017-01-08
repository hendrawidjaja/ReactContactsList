import React from "react";
import ReactDOM from "react-dom";
import ContactsList from "ContactsList";

let contacts = [{
    id: 1,
    name: "Hendra",
    phone: "555 555 551"
}, {
    id: 2,
    name: "Cumi Lele",
    phone: "555 555 552"
}, {
    id: 3,
    name: "Jancuk",
    phone: "555 555 553"
}, {
    id: 4,
    name: "Meki",
    phone: "555 555 554"
}]

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Contacts List</h1>
                {/* Pass from props to ContactsList props */}
                <ContactsList contacts={this.props.contacts}/>
            </div>
        )
    }
}

/* passing over contacts to props of APP */
ReactDOM.render(<App contacts={contacts}/>, document.getElementById("app"));
