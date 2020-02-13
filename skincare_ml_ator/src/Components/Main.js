import React from 'react';
import AllTitles from './AllTitles';
import AllDescriptions from './AllDescriptions';

class Main extends React.Component {
	constructor() {
		super();
		this.state = {};
	}
	render() {
		return (
			<div className="main">
				<AllDescriptions />
			</div>
		);
	}
}

export default Main;
