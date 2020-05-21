import React, { Component } from 'react';
import './lumadaheader.css';

class lumadaheader extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<h1 className="lds-header">
				<div className="lds-left">Lumada Safe Serve Insights</div>
				<div className="lds-right">logout</div>
			</h1>
			);
	}
}

export default lumadaheader;