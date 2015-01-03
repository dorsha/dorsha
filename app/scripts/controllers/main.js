'use strict';

angular.module('dorshaApp')
    .controller('MainCtrl', function ($scope, $rootScope) {

        $rootScope.messages = {
            header: ['^1500Hi^1500', 'My name is Doron Sharon^1500', 'You can call me dorsha']
        };

        $scope.type = function (elemendId, commands, loop, typeSpeed) {
            $('#' + elemendId + '-cursor').empty();
            $('#' + elemendId).typed({
                strings: commands,
                typeSpeed: typeSpeed || 30,
                loop: loop || false,
                backSpeed: 5
            });
        };
    });
