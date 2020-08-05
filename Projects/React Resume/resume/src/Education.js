import React, {Component} from 'react';

class Education extends Component {
	render() {
		return (
			<div className="item">
				<h4 className="degree">{this.props.item.degree}</h4>
				<h5 className="meta">{this.props.item.category}</h5>
				<h5 className="meta">{this.props.item.university}</h5>
				<h4 className="degree">{this.props.item.grade}</h4>
				<h5 className="meta">{this.props.item.school}</h5>
				<h5 className="meta">{this.props.item.award}</h5>
				<h5 className="meta">{this.props.item.location}</h5>
				<h5 className="meta">{this.props.item.county}</h5>
				<div className="time">{this.props.item.period}</div>
			</div>
		);
	}
}

export default Education;