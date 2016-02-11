/**
 * Created by zeh on 11/02/16.
 */

(function() {
  'use strict';

  angular
      .module('uql.example')
      .config(ExampleConfig);

  /** @ngInject */
  function ExampleConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'app/components/uql.example/example.html',
          controller: 'ExampleController',
          controllerAs: 'ctrl'
        });

    $urlRouterProvider.otherwise('/');
  }


})();
