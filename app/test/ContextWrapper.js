import React from 'react';

class ContextWrapper extends React.Component {

    getChildContext() {
        return {
            router: {
                push: () => {}
            }
        };
    }

    render() {
        return this.props.children;
    }
}

ContextWrapper.childContextTypes = {
    router: React.PropTypes.object
};

export default ContextWrapper;
