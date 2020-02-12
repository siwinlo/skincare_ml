const Axios = require('axios');

async function fetchAllProducts() {
	try {
		const response = await Axios.get(
			`https://sokoglam.com/products.json?limit=250`,
		);
		const data = await response.data.products;
		const titles = data.map(product => product.title);
		//console.log(titles)
		return titles;
	} catch (error) {
		console.log(error);
	}
}

console.log(fetchAllProducts());
