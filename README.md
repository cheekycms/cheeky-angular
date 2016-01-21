## cheeky-angular

[![NPM version][npm-image]][npm-url] [![NPM downloads][npm-downloads-image]][npm-downloads-url] [![Bower version][bower-image]][bower-url] [![Dependencies status][dep-status-image]][dep-status-url] [![MIT license][license-image]][license-url]

Angular Plugin for [Cheeky CMS](https://github.com/cheekycms/cheeky).

## Usage

```
    <script src="/bower_components/angular/angular.min.js"></script>
    <script src="/bower_components/angular-sanitize/angular-sanitize.min.js"></script>
    <script src="/bower_components/angular-cache/dist/angular-cache.min.js"></script>
    <script src="/bower_components/lodash/lodash.min.js"></script>
    <script src="/src/cheeky-angular.js"></script>
    <script src="http://www.alohaeditor.org/download/aloha.min.js"></script>
```

Configure the css key maps

```
angular.module('app', ['ngSanitize', 'cheeky'])
    .config(function(cheekyCMSProvider){
        cheekyCMSProvider.map({
            "content": "content.json",
            "crumpet": "crumpet.json"
        });
    });
```

## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/cheeky-angular.svg
[npm-url]: https://npmjs.org/package/cheeky-angular
[npm-downloads-image]: https://img.shields.io/npm/dm/cheeky-angular.svg
[npm-downloads-url]: https://npmjs.org/package/cheeky-angular
[bower-image]: https://img.shields.io/bower/v/cheeky-angular.svg
[bower-url]: http://bower.io/search/?q=cheeky-angular
[dep-status-image]: https://img.shields.io/david/angulartics/cheeky-angular.svg
[dep-status-url]: https://david-dm.org/angulartics/cheeky-angular
[license-image]: http://img.shields.io/badge/license-MIT-blue.svg
[license-url]: LICENSE