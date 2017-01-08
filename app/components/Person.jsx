var React = require("React");

var Person = React.createClass({
    /* set the types of the props */
    propTypes: {
        /* */
        name: React.PropTypes.string
    },

    render: function() {
        return (
            <span>{this.props.name}</span>
        );
    }
});

module.exports = Person;
