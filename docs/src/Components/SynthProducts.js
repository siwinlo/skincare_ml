import React from 'react';
import generated_descriptions from '../generated_descriptions.txt';
import generated_products from '../generated_products.txt';

class SynthProducts extends React.Component {
	constructor() {
		super();
		this.state = {
			titles: [],
			descriptions: [],
		};
	}

	getTitles = () => {
		fetch(generated_products)
			.then(r => r.text())
			.then(t =>
				this.setState({
					titles: t.split('\n'),
				}),
			);
		return null;
	};

	getDescriptions = () => {
		fetch(generated_descriptions)
			.then(r => r.text())
			.then(d =>
				this.setState({
					descriptions: d.split('\n'),
				}),
			);
		return null;
	};

	render() {
		this.getDescriptions();
		this.getTitles();
		if (this.state.titles.length > 0) {
			return (
				<div className="all-container synth">
					<h2>Generated Skincare Products</h2>
					{this.state.descriptions.map((el, i) => (
						<div>
							<h3>{this.state.titles[i]}</h3>
							<p>{el}</p>
						</div>
					))}
				</div>
			);
		} else {
			return null;
		}
	}
}

export default SynthProducts;
