# Made by Thiago Santos

The js not minified is located in the folder 'src/js/main.js'. And the scss not compiled is organized insed the folder 'src/scss'.

## Gulp
To run gulp you need to have the [NodeJs](https://nodejs.org/en/). To install the dependencies run in the terminal `npm i`.

Now you have to run the gulp task, for that type `gulp development` or `gulp production`.

The **development** task compile the sass and add vendor prefixes, and minify the js. The **production** task just have two differences, remove css unused and minify the css.
