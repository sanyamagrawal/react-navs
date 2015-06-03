/** @jsx React.DOM */

var MessageBox = React.createClass({
    render: function() {
        return ( < h1 > Hello World < /h1>);
    }
});

React.renderComponent(<MessageBox /> , document.getElementById('app'));
