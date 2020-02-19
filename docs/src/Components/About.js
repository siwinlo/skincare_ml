import React from 'react';

function About() {
	return (
		<div className="all-container">
			<h2>About</h2>
			<p>
				<a href="https://siwinlo.github.io">
					A text generation project by Siwin Lo
				</a>
			</p>
			<p>
				This application displays text generated using textgenrnn, a text
				generation machine learning library, trained on art exhibition press
				releases drawn from Artforum's Art Guide listings, and skincare product
				names and descriptions from Soko Glam. However, the samples shown on
				this UI are drawn from a static bank that is sporadically updated.
			</p>
			<a href="https://github.com/minimaxir/textgenrnn">
				Learn more about textgenrnn
			</a>
		</div>
	);
}

export default About;
