var USER_DATA = {
    name: 'Saurabh Sood',
    username: 'saurabhsood91',
    imageUrl: 'https://avatars0.githubusercontent.com/u/896324?v=3&s=140'
};

var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('../config/routes')

var ProfilePic = React.createClass({
    render: function() {
        return (
            <img src={this.props.imageUrl} style={{height: 100, width: 100}} />
        );
    }
});

var ProfileName = React.createClass({
    render: function() {
        return (
            <div>{this.props.name}</div>
        );
    }
});

var Avatar = React.createClass({
    render: function() {
        return (
            <div>
                <ProfilePic imageUrl={this.props.user.imageUrl} />
                <ProfileName name={this.props.user.name} />
                <ProfileLink username={this.props.user.username} />
            </div>
        );
    }
});

var Link = React.createClass({
    render: function() {
        return (
            <span
            style={{color: 'blue', cursor: 'pointer'}}
            onClick={this.changeURL}
            >
                {this.props.children}
            </span>
        );
    },
    changeURL: function() {
        window.location.replace(this.props.href);
    }
});

var ProfileLink = React.createClass({
    render: function() {
        return (
            <div>
                <Link href={'https://github.com/' + this.props.username}>
                    {this.props.username}
                </Link>
            </div>
        );
    }
});

ReactDOM.render(
    routes,
    document.getElementById('app')
);
