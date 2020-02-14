import React from 'react';
// import fs from 'fs';
// import toJSON from 'plain-text-data-to-json';
import generated_press from '../generated_press.txt';

class AllExhs extends React.Component {
	constructor() {
		super();
		this.state = {
			t: [],
			count: 5,
		};
	}

	componentDidMount() {
		this.getDescriptions();
	}

	getDescriptions = () => {
		fetch(generated_press)
			.then(r => r.text())
			.then(t =>
				this.setState({
					t: t.split('\n'),
				}),
			);
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
		let exhs = this.shuffle(this.state.t).slice(0, this.state.count);
		if (this.state.t.length > 0) {
			return (
				<div className="all-container">
					<h2>Generated Art Exhibition Press Releases</h2>
					{exhs.map(el => (
						<ul>
							<p>{el}</p>
						</ul>
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

export default AllExhs;
