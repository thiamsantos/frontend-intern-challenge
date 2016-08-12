export default function getLinkList(url) {

	return new Promise((resolve, reject) => {

		let req = new XMLHttpRequest();
    req.open('GET', url, true);

    req.onload = () =>
      req.status == 200 ?
      	resolve(JSON.parse(req.response)) :
      	reject(Error(`${req.status} ${req.statusText}`));

    req.send();
	});
}
