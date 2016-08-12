import $ from './components/selectNode';
import ShortUrl from './components/ShortUrl';
import CountHits from './components/CountHits';
import getLinkList from './components/getLinkList';
import TopFiveLinks from './components/TopFiveLinks';

getLinkList('/urls')
	.then(list => {

		let topFiveLinks = new TopFiveLinks(list);
		topFiveLinks.render($('.top-links__list'));

		let countHits = new CountHits(list);
		countHits.render($('.hits__total'));
	})
	.catch(err => console.log(err));

const shortUrlInput	 = $('.short-url__input')
		, shortUrlSubmit = $('.short-url__button')
		, shortUrlClose	 = $('.short-url__close');

const shortUrl = new ShortUrl(shortUrlInput, shortUrlSubmit, shortUrlClose);

shortUrlInput.addEventListener('input', () => shortUrl.validates());
shortUrlClose.addEventListener('click', () => shortUrl.clear());
shortUrlSubmit.addEventListener('click', () => shortUrl.submitEvent());
