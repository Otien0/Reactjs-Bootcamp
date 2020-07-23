import React, { Component } from 'react';


class Quiz_Options extends Component {
    constructor(props) {
        super(props);

        this.state = {};
        this.callParentCheckOptions = this.callParentCheckOptions.bind(this);
    }
    callParentCheckOptions() {
        this.props.checkResults(this.props.option);
    }
    render() {
        return (
            <div className="fields animated zoomIn" onClick={this.callParentCheckOptions}>
                <div className="field-block">{this.props.option}</div>
            </div>
        );
    }
}

export default Quiz_Options;