var React = require('react');
var ChildComponent = require('ChildComponent');
var Person = require('Person');

var Main = React.createClass({
    render: function() {
        return (
            /* Passing props from main (parent) to ChildComponent */
            <ChildComponent name="HHH" isPerson={true}/>
        );
    }
});

module.exports = Main;
