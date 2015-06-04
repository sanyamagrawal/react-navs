/** @jsx React.DOM */

var MenuExample = React.createClass({

            getInitialState: function() {
                return {
                    focused: 0
                };
            },

            clicked: function(index) {

                // The click handler will update the state with
                // the index of the focused menu entry

                this.setState({
                    focused: index
                });
            },

            createNavNodes: function(itemName, index) {
                var focusClass;
                if (this.state.focused === index) {
                    focusClass = "focused";
                }

                return (<li className={focusClass} onClick={this.clicked.bind(this,index)}>{itemName}</li>);
            },

            render: function() {

                // Here we will read the items property, which was passed
                // as an attribute when the component was created

                var navNodes = this.props.items.map(this.createNavNodes);
                // The map method will loop over the array of menu entries,
                // and will return a new array with <li> elements.

                return (
                    <div>
                        <ul> {navNodes}</ul>
                        <p>
                            Selected: {this.props.items[this.state.focused]}
                        </p>
                    </div >
                );
            }
        });

// Render the menu component on the page, and pass an array with menu options

React.renderComponent( < MenuExample items = {
    ['Home', 'Services', 'About', 'Contact us']
} />, document.body);
