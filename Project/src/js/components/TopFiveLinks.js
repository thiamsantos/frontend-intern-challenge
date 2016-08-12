export default class TopFiveLinks {

	constructor(list) {

		this._list = list.sort((a,b) => b.hits - a.hits).slice(0,5);
	}

	render(node) {

		node.innerHTML = `
			${this._list.map(item => `
				<li class="top-links__item">
					<a class="top-links__link" href="${item.url}">${item.shortUrl}</a>
					<p class="top-links__count">${item.hits}</p>
				</li>
			`).join('')}
		`;
	}
}
