'use strict';
const faveApp = angular.module('faveApp', []);

faveApp.constant('App', {
    Url: {
        DATA_BOOKS: 'https://raw.githubusercontent.com/fduckart/fduckart.github.io/data/v1/books.json',
        DATA_FILMS: 'https://raw.githubusercontent.com/fduckart/fduckart.github.io/data/v1/films.json',
        DATA_RECORDS: 'https://raw.githubusercontent.com/fduckart/fduckart.github.io/data/v1/records.json',
        DATA_SONGS: 'https://raw.githubusercontent.com/fduckart/fduckart.github.io/data/v1/songs.json'
    }
});

(function() {

    function RecordJsController($scope, $http, App) {
        $scope.init = () => {
            $http.get(App.Url.DATA_RECORDS).then((response) => {
                $scope.records = response.data.records;
            });
        };
    }
    faveApp.controller("RecordJsController", RecordJsController);

    function FilmJsController($scope, $http, App) {
        $scope.init = () => {
            $http.get(App.Url.DATA_FILMS).then((response) => {
                $scope.films = response.data.films;
            });
        };
    }
    faveApp.controller("FilmJsController", FilmJsController);

    function BookJsController($scope, $http, App) {
        $scope.init = () => {
            $http.get(App.Url.DATA_BOOKS).then((response) => {
                $scope.books = response.data.books;
            });
        };
    }
    faveApp.controller("BookJsController", BookJsController);

    function SongJsController($scope, $http, App) {
        $scope.init = () => {
            $http.get(App.Url.DATA_SONGS).then((response) => {
                $scope.songs = response.data.songs;
            });
        };
    }
    faveApp.controller("SongJsController", SongJsController);

})();
