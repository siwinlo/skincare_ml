import React from 'react';
// import fs from 'fs';
// import toJSON from 'plain-text-data-to-json';
import generated_products from '../generated_products.txt';

class AllTitles extends React.Component {
	constructor() {
		super();
		this.state = {
			t: [],
		};
	}

	getDescriptions = () => {
		fetch(generated_products)
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

export default AllTitles;
