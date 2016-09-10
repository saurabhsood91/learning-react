var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle')

var ConfirmBattleContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState: function() {
        return {
            isLoading: false,
            playerInfo: []
        }
    },
    componentDidMount: function() {
        // Get the usernames
        // When component is just loaded
        // Fetch the info from Github
        var query = this.props.location.query;
        // console.log(query);

    },
    render: function() {
        return (
            <ConfirmBattle
             isLoading={this.state.isLoading}
             playersInfo={this.state.playersInfo}
             />
        );
    }
});

module.exports = ConfirmBattleContainer;
