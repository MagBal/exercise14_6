var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    getDefaultProps: function() {
        console.log('The default value of the component set.');
    },
    componentWillMount: function() {
        console.log('The component is ready to mount.');
    },

    componentDidMount: function() {
        console.log('Mounting the component.');
    },

    componentWillReceiveProps: function() {
        console.log('The component received new props.');
    },

    shouldComponentUpdate: function() {
        console.log('Check if component must be update.');
    },

    componentWillUpdate: function() {
        console.log('Component updating.');
    },

    componentDidUpdate: function() {
        console.log('Component updated!');
    },

    componentWillUnmount: function() {
        console.log('Component removal.');
    },

    render: function() {
        return React.createElement('div', {},
            React.createElement('h1', {}, 'COUNTER'),
            React.createElement('button', {
                className: 'btn btn-lg btn-primary',
                onClick: this.increment
            }, 'increment +'),
            React.createElement('span', {}, 'counter: ' + this.state.counter),
            React.createElement('button', {
                className: 'btn btn-lg btn-warning',
                onClick: this.decrement
            }, 'decrement -'),
        );
    }
});

var element =
    React.createElement('div', {},
        React.createElement(Counter, {}),
    );

ReactDOM.render(element, document.getElementById('app'));