(function (angular) {
    'use strict';
    angular
        .module('xmpl.service', [])
        .value('greeter', {
            salutation: 'Hello',
            localize: function (localization) {
                this.salutation = localization.salutation;
            },
            greet: function (name) {
                return this.salutation + ' ' + name + '!';
            }
        })
        .value('user', {
            load: function (name) {
                this.name = name;
            }
        })
        .service("lcHttp", ["$http", "$q", function ($http, $q) {
            function lcHttp(){
                var deferred = $q.defer();
                $http.apply(this, arguments).then(function(){

                    return deferred.resolve()
                }, function(){

                    return deferred.reject()
                });

                return deferred.promise;
            }
            for(var prop in $http){
                lcHttp[prop] = (function(methodName){
                    return function(){
                        var deferred = $q.defer();

                        $http[methodName]
                            .apply(null, arguments)
                            .then(function(result){
                                deferred.resolve(result);
                            }, function(err){
                                deferred.reject(err);
                            })
                        return deferred.promise;
                    }
                })(prop)
            }

            return lcHttp;
        }])
    ;

    angular.module('xmpl.directive', []);

    angular.module('xmpl.filter', []);

    angular.module("test", [])
        .controller("myController", ["$scope", "lcHttp",  function($scope, lcHttp, $http){
            // lcHttp.get();
        }])
        .run(["lcHttp", "$http", function(lcHttp, $http){
        }]);

    angular.module('xmpl', ['xmpl.service', 'xmpl.directive', 'xmpl.filter', "test"])

        .run(function (greeter, user) {
            // This is effectively part of the main method initialization code
            greeter.localize({
                salutation: 'Bonjour'
            });
            user.load('World');
        })

        .controller('XmplController', function ($scope, greeter, user) {
            $scope.greeting = greeter.greet(user.name);
            // lchttp.get();
            $scope.ge = function(ev){
                console.log(ev);
            };
        });
})(window.angular);

/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */