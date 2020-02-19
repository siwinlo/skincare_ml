import React from 'react';
import generated_descriptions from '../generated_descriptions.txt';
import generated_products from '../generated_products.txt';

class SynthProducts extends React.Component {
	constructor() {
		super();
		this.state = {
			count: 5,
			titles: [],
			descriptions: [],
		};
	}

	componentDidMount() {
		this.getDescriptions();
		this.getTitles();
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
			.then(d => this.setState({ descriptions: d.split('\n') }));
		return null;
	};

	shuffle = a => {
		let j, x, i;
		for (i = a.length - 1; i > 0; i--) {
			j = Math.floor(Math.random() * (i + 1));
			x = a[i];
			a[i] = a[j];
			a[j] = x;
		}
		return a;
	};

	showMore = () => {
		this.setState({ count: 5 });
	};

	render() {
		let titles = this.shuffle(this.state.titles).slice(0, this.state.count);
		let descriptions = this.shuffle(this.state.descriptions).slice(
			0,
			this.state.count,
		);
		if (this.state.titles.length > 0) {
			return (
				<div className="all-container">
					<h2>Generated Skincare Products</h2>
					{descriptions.map((el, i) => (
						<div>
							<h3>{titles[i]}</h3>
							<p>{el}</p>
						</div>
					))}
					<div className="show-more" onClick={this.showMore}>
						Regenerate!*
					</div>
				</div>
			);
		} else {
			return null;
		}
	}
}

export default SynthProducts;
