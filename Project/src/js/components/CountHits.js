export default class CountHits {

	constructor(list) {

		this._list = list
			.reduce((a, b) => a + b.hits, 0)
			.toString()
			.split('')
			.reverse()
			.map((curr,i) => (i > 0 && i % 3 === 0) ? `${curr}.` : curr)
			.reverse()
			.join('');;
	}

	render(node) {

		node.textContent = this._list;
	}
}
