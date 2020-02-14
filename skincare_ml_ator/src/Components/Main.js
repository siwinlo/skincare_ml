import React from 'react';
// import AllTitles from './AllTitles';
// import AllDescriptions from './AllDescriptions';
import AllExhs from './AllExhs';
import SynthProducts from './SynthProducts';

class Main extends React.Component {
	constructor() {
		super();
		this.state = {};
	}
	render() {
		return (
			<div className="main">
				{/* <AllTitles />
				<AllDescriptions /> */}
				<SynthProducts />
				<AllExhs />
			</div>
		);
	}
}

export default Main;
