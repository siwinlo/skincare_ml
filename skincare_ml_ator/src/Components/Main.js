import React from 'react';
import AllTitles from './AllTitles';
import AllDescriptions from './AllDescriptions';
import AllExhs from './AllExhs';

class Main extends React.Component {
	constructor() {
		super();
		this.state = {};
	}
	render() {
		return (
			<div className="main">
				<AllTitles />
				<AllDescriptions />
				<AllExhs />
			</div>
		);
	}
}

export default Main;
