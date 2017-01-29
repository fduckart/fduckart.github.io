'use strict';
var faveApp = angular.module('faveApp', []);

(function() {

    function RecordJsController($scope) {
        $scope.records = [
            {title: 'Shoot Out The Lights', artist: 'Richard & Linda Thompson'},
            {title: 'Another Green World', artist: 'Brian Eno'},
            {title: 'Kind Of Blue', artist: 'Miles Davis'},
            {title: 'Moondance', artist: 'Van Morrison'},
            {title: 'Horses', artist: 'Patti Smith'},
            {title: 'How Will the Wolf Survive?', artist: 'Los Lobos'},
            {title: 'El Rayo-X', artist: 'David Lindley'},
            {title: 'Rid Of Me', artist: 'PJ Harvey'},
            {title: 'What\'s Going On?', artist: 'Marvin Gaye'},
            {title: 'Highway to Hell', artist: 'AC/DC'}
        ];
    }
    faveApp.controller("RecordJsController", RecordJsController);

    function FilmJsController($scope) {
        $scope.films = [
            {title: 'Citizen Kane', director: 'Orson Welles'},
            {title: 'Chinatown', director: 'Brian DePalma'},
            {title: 'Blade Runner', director: 'Ridely Scott'},
            {title: 'Vertigo', director: 'Alfred Hitchcock'},
            {title: 'Sunset Boulevard', director: 'Billy Wilder'},
            {title: 'The Rules of the Game', director: 'Jean Renoir'},
            {title: 'Annie Hall', director: 'Woody Allen'},
            {title: 'The Wizard of Oz', director: 'Victor Fleming'},
            {title: 'Out of the Past', director: 'Jacques Tourneur'},
            {title: 'The Conversation', director: 'Francis Ford Coppola'}
        ];
    }
    faveApp.controller("FilmJsController", FilmJsController);

    function BookJsController($scope) {
        $scope.books = [
            {title: 'Lolita', author: 'Vladimir Nabokov'},
            {title: 'Nineteen Eighty Four', author: 'George Orwell'},
            {title: 'Lucky Jim', author: 'Kingsley Amis'},
            {title: 'Things Fall Apart', author: 'Chinua Achebe'},
            {title: 'Brave New World', author: 'Aldous Huxley'},
            {title: 'Frankenstein', author: 'Mary Shelley'},
            {title: 'Fear and Loathing in Las Vegas', author: 'Hunter S. Thomspon'},
            {title: 'Portnoy\'s Complaint', author: 'Philip Roth'},
            {title: 'Experience', author: 'Martin Amis'},
            {title: 'Life', author: 'Keith Richards'}
        ];
    }
    faveApp.controller("BookJsController", BookJsController);

})();
