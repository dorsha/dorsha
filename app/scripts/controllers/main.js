'use strict';

angular.module('dorshaApp')
    .controller('MainCtrl', function ($scope, $rootScope) {

        var small = $(window).width() < 482;
        var header = small ?
            ['^1500Hi^1500', 'My name is\nDoron Sharon^1500', 'You can call me\ndorsha^200'] :
            ['^1500Hi^1500', 'My name is Doron Sharon^1500', 'You can call me dorsha^200'];

        $rootScope.messages = {
            header: header
        };

        $scope.type = function (elemendId, commands, loop, typeSpeed) {
            $('#' + elemendId + '-cursor').empty();
            $('#' + elemendId).typed({
                strings: commands,
                typeSpeed: typeSpeed || 30,
                loop: loop || false,
                backSpeed: 5,
                callback: function() {
                    $scope.typedFinished = true;
                    $scope.$apply();
                }
            });
        };
    });
