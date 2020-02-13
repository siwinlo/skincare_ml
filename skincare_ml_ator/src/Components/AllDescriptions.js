import React from 'react';
// import fs from 'fs';
// import toJSON from 'plain-text-data-to-json';
import generated_descriptions from '../generated_descriptions.txt';

class AllDescriptions extends React.Component {
	constructor() {
		super();
		this.state = {
			t: [],
		};
	}

	getDescriptions = () => {
		fetch(generated_descriptions)
			.then(r => r.text())
			.then(t =>
				this.setState({
					t: t,
				}),
			);
		return null;
	};

	render() {
		this.getDescriptions();
		if (this.state.t.length > 0) {
			return (
				<div>
					{this.state.t.split('\n').map(el => (
						<ul>{el}</ul>
					))}
				</div>
			);
		} else {
			return null;
		}
	}
}

export default AllDescriptions;
