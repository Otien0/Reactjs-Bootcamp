import React, {Component} from 'react';


class Experience extends Component {

	render() {
		return (
			<div className="item">
                <div className="meta">
                    <div className="upper-row">
                        <h3 className="job-title">{this.props.item.title}</h3>
                        <div className="time">{this.props.item.period}</div>
                    </div>
                    <div className="company">
                        <a href={this.props.item.companyURL} target="_blank" rel="noopener noreferrer">{this.props.item.company}</a>
                    </div>
                </div>
                <div className="details">
                    <p>{this.props.item.details}</p>
                    <p>{this.props.item.details2}</p>
                    <p>{this.props.item.details3}</p>
                    <p>{this.props.item.details4}</p>
                    
                </div>
            </div>
		);
	}
}

export default Experience;