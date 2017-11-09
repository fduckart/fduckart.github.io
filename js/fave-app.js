'use strict';
var faveApp = angular.module('faveApp', []);

(function() {

    function RecordJsController($scope) {
        $scope.records = [
            {title: 'Shoot Out The Lights', artist: 'Richard & Linda Thompson'},
            {title: 'Another Green World', artist: 'Brian Eno'},
            {title: 'Kind Of Blue', artist: 'Miles Davis'},
            {title: 'Moondance', artist: 'Van Morrison'},
            {title: 'Highway to Hell', artist: 'AC/DC'},
            {title: 'Horses', artist: 'Patti Smith'},
            {title: 'How Will the Wolf Survive?', artist: 'Los Lobos'},
            {title: 'El Rayo-X', artist: 'David Lindley'},
            {title: 'Rid of Me', artist: 'PJ Harvey'},
            {title: 'What\'s Going On?', artist: 'Marvin Gaye'},
            {title: 'Purple Rain', artist: 'Prince'}
        ];
    }
    faveApp.controller("RecordJsController", RecordJsController);

    function FilmJsController($scope) {
        $scope.films = [
            {title: 'Citizen Kane', director: 'Orson Welles', year: 1900},
            {title: 'Chinatown', director: 'Brian DePalma', year: 1900},
            {title: 'Blade Runner', director: 'Ridely Scott', year: 1900},
            {title: 'Vertigo', director: 'Alfred Hitchcock', year: 1900},
            {title: 'Sunset Boulevard', director: 'Billy Wilder', year: 1900},
            {title: 'The Rules of the Game', director: 'Jean Renoir', year: 1900},
            {title: 'Annie Hall', director: 'Woody Allen', year: 1900},
            {title: 'The Wizard of Oz', director: 'Victor Fleming', year: 1900},
            {title: 'Out of the Past', director: 'Jacques Tourneur', year: 1900},
            {title: 'Casablanca', director: 'Michael Curtiz', year: 1900},
            {title: 'Ex Machina', director: 'Alex Garland', year: 1900},
            {title: 'The Conversation', director: 'Francis Ford Coppola', year: 1900}
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

    function SongJsController($scope) {
        $scope.songs = [
            {title: 'Sheela-Na-Gig', artist: 'PJ Harvey'},
            {title: 'Sky Saw', artist: 'Brian Eno'},
            {title: 'Into The Mystic', artist: 'Van Morrison'},
            {title: 'Do It Again', artist: 'Steely Dan'},
            {title: 'Sweet Home Alabama', artist: 'Lynyrd Skynyrd'},
            {title: 'Hate It Here', artist: 'Wilco'},
            {title: 'Gimme Shelter', artist: 'The Rolling Stones'},
            {title: 'Sultans of Swing', artist: 'Dire Straits'},
            {title: 'Fast Car', artist: 'Tracy Chapman'},
            {title: 'Chameleon', artist: 'Herbie Hancock'},
            {title: 'Planet Claire', artist: 'The B-52s'},
            {title: 'Watching the Detectives', artist: 'Elvis Costello'},
            {title: 'Money', artist: 'Pink Floyd'},
            {title: 'Blitzkrieg Bop', artist: 'Ramones'},
            {title: 'Heroes', artist: 'David Bowie'},
            {title: 'Guilty', artist: 'Randy Newman'}
        ];
    }
    faveApp.controller("SongJsController", SongJsController);

})();
