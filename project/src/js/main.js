(function() {
  // Ajax
  var http = new XMLHttpRequest();
  http.open('GET', 'https://raw.githubusercontent.com/chaordic/frontend-intern-challenge/master/Assets/urls.json');
  http.send(null);

  var pushJson = function(url) {
    url.sort(function (a, b) {
      if (a.hits > b.hits) {
        return 0;
      }
      if (a.hits < b.hits) {
        return 1;
      }
      return 0;
    });

    document.querySelector('.link-list').classList.remove('no-js');

    for (var i = 0; i < 5; i++) {
      var $content = document.querySelectorAll('.link-list__content')[i];
      var $url = $content.querySelector('.link-list__url');
      var $number = $content.querySelector('.link-list__number');

      $url.href = url[i].url;
      $url.textContent = url[i].shortUrl;
      $number.textContent = url[i].hits;
    }
  };

  http.onreadystatechange = function () {
    var done = 4;
    var ok = 200;
    if (http.readyState === done && http.status === ok) {
      var url = JSON.parse(http.responseText);
      pushJson(url);
    }
  };

  // form
  var $form = document.querySelector('.form');
  var $formClose = document.querySelector('.form__close');
  var $formInput = document.querySelector('.form__input');
  var $formButton = document.querySelector('.form__button');

  $formClose.addEventListener('click', function() {
    if ($formInput.value != '') {
      $formInput.value = '';
      this.classList.add('hidden');
      $formButton.textContent = 'Encurtar';
      $formButton.title = 'Encurtar link';
      $formButton.classList.add('disabled');
    }
  });
  $formInput.addEventListener('input', function() {
    if ($formClose.classList.contains('hidden')) {
      $formClose.classList.remove('hidden');
    }
    if (this.value == '') {
      $formClose.classList.add('hidden');
      $formButton.classList.add('disabled');
    }
    var RegExp = /^(((https?):\/\/)?(www\.)?)?[A-Za-z\d]+(\.[A-Za-z\d]+)+/;
    if (this.value != '' && RegExp.test(this.value) && $formButton.classList.contains('disabled')) {
      $formButton.classList.remove('disabled');
    }
    if (this.value != '' && !RegExp.test(this.value) && !$formButton.classList.contains('disabled')) {
      $formButton.classList.add('disabled');
    }
  });
  $form.addEventListener('submit', function(event){
    event.preventDefault();
  });
  $formButton.addEventListener('click', function(event){
    if ($formInput.value != '') {
      var randomString = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
      $formInput.value = 'http://chr.dc/' + randomString;
      this.textContent = 'Copiar';
      this.title = 'Copiar url encurtada';
    }
    // I don't know how to fire this event
    // if (this.textContent == 'Copiar') {
    //   var copy = $formInput.select();
    //   document.execCommand('copy');
    //   $formClose.classList.add('hidden');
    //   $formInput.value = '';
    //   this.textContent = 'Encurtar';
    // }
  });

})();
