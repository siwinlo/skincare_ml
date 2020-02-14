import React from 'react';
// import AllTitles from './AllTitles';
// import AllDescriptions from './AllDescriptions';
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
	}

	toggleAbout(event) {
		this.setState({
			about: !this.state.about,
		});
	}
	toggleProducts(event) {
		this.setState({
			products: !this.state.products,
		});
	}
	toggleExhs(event) {
		this.setState({
			exhs: !this.state.exhs,
		});
	}
	render() {
		return (
			<div className="main">
				<div onClick={this.toggleAbout}>
					{this.state.about ? <About /> : <h1>About</h1>}
				</div>
				<div onClick={this.toggleProducts}>
					{this.state.about ? <SynthProducts /> : <h1>Skincare Products</h1>}
				</div>
				<div onClick={this.toggleExhs}>
					{this.state.about ? <AllExhs /> : <h1>Exhibition Press Releases</h1>}
				</div>
			</div>
		);
	}
}

export default Main;
