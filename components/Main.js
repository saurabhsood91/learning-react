var React = require('react');

var Main = React.createClass({
    render: function() {
        return (
            <div>
                Main Component
                {this.props.children}
            </div>
        );
    }
});

module.exports = Main;
