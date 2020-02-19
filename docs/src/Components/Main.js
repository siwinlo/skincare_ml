import React from 'react';
import About from './About';
import AllExhs from './AllExhs';
import SynthProducts from './SynthProducts';

class Main extends React.Component {
	constructor() {
		super();
		this.state = {
			about: false,
			products: false,
			exhs: false,
		};
		this.toggleAbout = this.toggleAbout.bind(this);
		this.toggleProducts = this.toggleProducts.bind(this);
		this.toggleExhs = this.toggleExhs.bind(this);
	}

	toggleAbout(event) {
		this.setState({
			about: !this.state.about,
			products: false,
			exhs: false,
		});
	}
	toggleProducts(event) {
		this.setState({
			about: false,
			products: !this.state.products,
			exhs: false,
		});
	}
	toggleExhs(event) {
		this.setState({
			about: false,
			products: false,
			exhs: !this.state.exhs,
		});
	}
	render() {
		return (
			<div className="main-container">
				<div className="nav">
					<div className="nav-link" onClick={this.toggleAbout}>
						About
					</div>
					<div className="nav-link" onClick={this.toggleProducts}>
						Skincare Products
					</div>
					<div className="nav-link" onClick={this.toggleExhs}>
						Exhibition Press Releases
					</div>
				</div>
				<div className="main">
					{this.state.about ? <About /> : null}
					{this.state.products ? <SynthProducts /> : null}
					{this.state.exhs ? <AllExhs /> : null}
				</div>
			</div>
		);
	}
}

export default Main;
